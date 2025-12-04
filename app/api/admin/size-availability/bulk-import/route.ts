// Bulk Import API for Product Size Availability
// POST /api/admin/size-availability/bulk-import
// 
// Accepts CSV-style format that's easy to copy from Excel:
// - Tab or comma separated
// - Format: productSlug, materialName, size, available (Y/N or true/false or 1/0)

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface ParsedRow {
  productSlug: string;
  materialName: string;
  size: string;
  available: boolean;
}

// Helper to generate slug from name
function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// Parse availability value from various formats
function parseAvailable(value: string): boolean {
  const normalized = value.trim().toLowerCase();
  return (
    normalized === "true" ||
    normalized === "yes" ||
    normalized === "y" ||
    normalized === "1" ||
    normalized === "available" ||
    normalized === "in stock" ||
    normalized === "green"
  );
}

// Parse CSV/TSV data
function parseCSV(csvData: string): ParsedRow[] {
  const lines = csvData.trim().split("\n");
  const rows: ParsedRow[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    // Skip header row if detected
    if (
      i === 0 &&
      (line.toLowerCase().includes("product") ||
        line.toLowerCase().includes("material") ||
        line.toLowerCase().includes("size"))
    ) {
      continue;
    }

    // Split by tab first, then comma
    let parts = line.includes("\t") ? line.split("\t") : line.split(",");
    parts = parts.map((p) => p.trim());

    if (parts.length >= 4) {
      rows.push({
        productSlug: parts[0],
        materialName: parts[1],
        size: parts[2],
        available: parseAvailable(parts[3]),
      });
    }
  }

  return rows;
}

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get("content-type") || "";
    let rows: ParsedRow[] = [];

    if (contentType.includes("text/plain") || contentType.includes("text/csv")) {
      // CSV/TSV format
      const csvData = await request.text();
      rows = parseCSV(csvData);
    } else {
      // JSON format - can be array of rows or { data: "csv string" }
      const body = await request.json();

      if (typeof body.data === "string") {
        // CSV string in JSON
        rows = parseCSV(body.data);
      } else if (Array.isArray(body)) {
        // Direct array of objects
        rows = body.map((row: Record<string, unknown>) => ({
          productSlug: String(row.productSlug || row.product_slug || row.product || ""),
          materialName: String(row.materialName || row.material_name || row.material || ""),
          size: String(row.size || ""),
          available:
            typeof row.available === "boolean"
              ? row.available
              : parseAvailable(String(row.available || "false")),
        }));
      } else if (body.rows && Array.isArray(body.rows)) {
        // { rows: [...] } format
        rows = body.rows.map((row: Record<string, unknown>) => ({
          productSlug: String(row.productSlug || row.product_slug || row.product || ""),
          materialName: String(row.materialName || row.material_name || row.material || ""),
          size: String(row.size || ""),
          available:
            typeof row.available === "boolean"
              ? row.available
              : parseAvailable(String(row.available || "false")),
        }));
      }
    }

    if (rows.length === 0) {
      return NextResponse.json(
        {
          error: "No valid data rows found",
          hint: "Expected format: productSlug, materialName, size, available (Y/N)",
          example: "hex-sem, Stainless Steel 304, M-4 X 8, Y",
        },
        { status: 400 }
      );
    }

    // Group rows by product and material
    const grouped: Record<string, Record<string, ParsedRow[]>> = {};
    for (const row of rows) {
      if (!row.productSlug || !row.materialName || !row.size) {
        continue;
      }
      if (!grouped[row.productSlug]) {
        grouped[row.productSlug] = {};
      }
      if (!grouped[row.productSlug][row.materialName]) {
        grouped[row.productSlug][row.materialName] = [];
      }
      grouped[row.productSlug][row.materialName].push(row);
    }

    const results = {
      productsProcessed: 0,
      materialsProcessed: 0,
      sizesCreated: 0,
      errors: [] as string[],
    };

    // Process each product
    for (const [productSlug, materials] of Object.entries(grouped)) {
      // Find product
      const product = await prisma.product.findFirst({
        where: { slug: productSlug },
      });

      if (!product) {
        results.errors.push(`Product not found: ${productSlug}`);
        continue;
      }

      let matIndex = 0;
      for (const [materialName, sizeRows] of Object.entries(materials)) {
        const materialSlug = generateSlug(materialName);

        // Upsert material
        const material = await prisma.material.upsert({
          where: { slug: materialSlug },
          update: { name: materialName },
          create: {
            name: materialName,
            slug: materialSlug,
            sortOrder: matIndex,
            isActive: true,
          },
        });

        // Delete existing size availability for this product + material
        await prisma.productSizeAvailability.deleteMany({
          where: {
            productId: product.id,
            materialId: material.id,
          },
        });

        // Create new records
        for (let sizeIndex = 0; sizeIndex < sizeRows.length; sizeIndex++) {
          const row = sizeRows[sizeIndex];
          await prisma.productSizeAvailability.create({
            data: {
              productId: product.id,
              materialId: material.id,
              size: row.size,
              available: row.available,
              sortOrder: sizeIndex,
            },
          });
          results.sizesCreated++;
        }

        results.materialsProcessed++;
        matIndex++;
      }

      results.productsProcessed++;
    }

    return NextResponse.json({
      success: true,
      message: `Bulk import complete`,
      results,
      summary: `Processed ${results.productsProcessed} products, ${results.materialsProcessed} materials, created ${results.sizesCreated} size records`,
    });
  } catch (error) {
    console.error("Error in bulk import:", error);
    return NextResponse.json(
      { error: "Internal server error", details: String(error) },
      { status: 500 }
    );
  }
}

// GET - Show import format help
export async function GET() {
  return NextResponse.json({
    endpoint: "POST /api/admin/size-availability/bulk-import",
    description: "Bulk import size availability data from CSV/Excel format",
    formats: {
      csv: {
        contentType: "text/plain or text/csv",
        format: "productSlug, materialName, size, available",
        example: `hex-sem, Stainless Steel 304, M-4 X 8, Y
hex-sem, Stainless Steel 304, M-4 X 10, Y
hex-sem, Stainless Steel 304, M-4 X 12, N
hex-sem, Mild Steel, M-4 X 8, Y
hex-sem, Mild Steel, M-4 X 10, N`,
        availableValues: "Y/N, Yes/No, true/false, 1/0, Available, In Stock, Green",
      },
      json: {
        contentType: "application/json",
        format: "Array of objects or { data: 'csv string' }",
        example: [
          { productSlug: "hex-sem", materialName: "Stainless Steel 304", size: "M-4 X 8", available: true },
          { productSlug: "hex-sem", materialName: "Stainless Steel 304", size: "M-4 X 10", available: true },
        ],
      },
    },
    tips: [
      "You can copy data directly from Excel (tab-separated)",
      "First row can be a header - it will be skipped if detected",
      "Available values: Y, Yes, true, 1, Available, In Stock, Green",
      "Not available values: N, No, false, 0, anything else",
    ],
  });
}
