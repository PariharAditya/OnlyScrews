// Admin API for managing Product Size Availability
// POST /api/admin/size-availability - Create/Update size availability data
// GET /api/admin/size-availability - List all products with size data
// PUT /api/admin/size-availability - Update specific size availability
// DELETE /api/admin/size-availability - Delete size availability for a product

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Type for incoming request
interface SizeData {
  size: string;
  available: boolean;
}

interface MaterialData {
  name: string;
  slug?: string; // Optional - will be generated from name if not provided
  sizes: SizeData[];
}

interface ProductSizeAvailabilityRequest {
  productSlug: string;
  productName?: string; // Optional - for creating new products
  categorySlug?: string; // Optional - for creating new products
  subcategorySlug?: string; // Optional - for creating new products
  materials: MaterialData[];
}

// Helper to generate slug from name
function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// POST - Add or update size availability
export async function POST(request: NextRequest) {
  try {
    const body: ProductSizeAvailabilityRequest = await request.json();

    // Validate required fields
    if (!body.productSlug || !body.materials || body.materials.length === 0) {
      return NextResponse.json(
        { error: "productSlug and materials are required" },
        { status: 400 }
      );
    }

    // Find the product
    const product = await prisma.product.findFirst({
      where: { slug: body.productSlug },
      include: { subcategory: { include: { category: true } } },
    });

    if (!product) {
      return NextResponse.json(
        {
          error: `Product with slug '${body.productSlug}' not found. Please create the product first or provide categorySlug/subcategorySlug.`,
          hint: "Use the products in your database or create the product hierarchy first.",
        },
        { status: 404 }
      );
    }

    const results = {
      productSlug: body.productSlug,
      productName: product.name,
      materialsProcessed: 0,
      sizesCreated: 0,
      sizesDeleted: 0,
    };

    // Process each material
    for (let matIndex = 0; matIndex < body.materials.length; matIndex++) {
      const matData = body.materials[matIndex];
      const materialSlug = matData.slug || generateSlug(matData.name);

      // Upsert material
      const material = await prisma.material.upsert({
        where: { slug: materialSlug },
        update: { name: matData.name },
        create: {
          name: matData.name,
          slug: materialSlug,
          sortOrder: matIndex,
          isActive: true,
        },
      });

      // Delete existing size availability for this product + material combo
      const deleted = await prisma.productSizeAvailability.deleteMany({
        where: {
          productId: product.id,
          materialId: material.id,
        },
      });
      results.sizesDeleted += deleted.count;

      // Create new size availability records
      for (let sizeIndex = 0; sizeIndex < matData.sizes.length; sizeIndex++) {
        const sizeData = matData.sizes[sizeIndex];
        await prisma.productSizeAvailability.create({
          data: {
            productId: product.id,
            materialId: material.id,
            size: sizeData.size,
            available: sizeData.available,
            sortOrder: sizeIndex,
          },
        });
        results.sizesCreated++;
      }

      results.materialsProcessed++;
    }

    return NextResponse.json({
      success: true,
      message: `Size availability updated for ${product.name}`,
      results,
    });
  } catch (error) {
    console.error("Error in POST /api/admin/size-availability:", error);
    return NextResponse.json(
      { error: "Internal server error", details: String(error) },
      { status: 500 }
    );
  }
}

// GET - List all products with size availability data
export async function GET() {
  try {
    const products = await prisma.product.findMany({
      where: {
        sizeAvailability: {
          some: {},
        },
      },
      select: {
        id: true,
        name: true,
        slug: true,
        subcategory: {
          select: {
            name: true,
            slug: true,
            category: {
              select: {
                name: true,
                slug: true,
              },
            },
          },
        },
        _count: {
          select: {
            sizeAvailability: true,
          },
        },
      },
    });

    // Also get list of all products (for reference)
    const allProducts = await prisma.product.findMany({
      select: {
        name: true,
        slug: true,
        subcategory: {
          select: {
            name: true,
            category: {
              select: { name: true },
            },
          },
        },
      },
      orderBy: { name: "asc" },
    });

    return NextResponse.json({
      productsWithSizeData: products.map((p) => ({
        name: p.name,
        slug: p.slug,
        category: `${p.subcategory?.category?.name} > ${p.subcategory?.name}`,
        sizeRecordCount: p._count.sizeAvailability,
      })),
      allAvailableProducts: allProducts.map((p) => ({
        name: p.name,
        slug: p.slug,
        category: `${p.subcategory?.category?.name} > ${p.subcategory?.name}`,
      })),
    });
  } catch (error) {
    console.error("Error in GET /api/admin/size-availability:", error);
    return NextResponse.json(
      { error: "Internal server error", details: String(error) },
      { status: 500 }
    );
  }
}

// PUT - Update specific size availability
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.productSlug || !body.materialSlug || !body.size) {
      return NextResponse.json(
        { error: "productSlug, materialSlug, and size are required" },
        { status: 400 }
      );
    }

    // Find the product
    const product = await prisma.product.findFirst({
      where: { slug: body.productSlug },
    });

    if (!product) {
      return NextResponse.json(
        { error: `Product with slug '${body.productSlug}' not found` },
        { status: 404 }
      );
    }

    // Find the material
    const material = await prisma.material.findFirst({
      where: { slug: body.materialSlug },
    });

    if (!material) {
      return NextResponse.json(
        { error: `Material with slug '${body.materialSlug}' not found` },
        { status: 404 }
      );
    }

    // Find existing size availability
    const existing = await prisma.productSizeAvailability.findFirst({
      where: {
        productId: product.id,
        materialId: material.id,
        size: body.size,
      },
    });

    if (!existing) {
      return NextResponse.json(
        {
          error: `Size availability record not found for product '${body.productSlug}', material '${body.materialSlug}', size '${body.size}'`,
        },
        { status: 404 }
      );
    }

    // Update the record
    const updated = await prisma.productSizeAvailability.update({
      where: { id: existing.id },
      data: {
        available: body.available !== undefined ? body.available : existing.available,
        sortOrder: body.sortOrder !== undefined ? body.sortOrder : existing.sortOrder,
      },
    });

    return NextResponse.json({
      success: true,
      message: `Updated size availability for ${product.name} - ${material.name} - ${body.size}`,
      data: {
        productName: product.name,
        materialName: material.name,
        size: updated.size,
        available: updated.available,
        sortOrder: updated.sortOrder,
      },
    });
  } catch (error) {
    console.error("Error in PUT /api/admin/size-availability:", error);
    return NextResponse.json(
      { error: "Internal server error", details: String(error) },
      { status: 500 }
    );
  }
}

// DELETE - Remove all size availability for a product
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const productSlug = searchParams.get("productSlug");

    if (!productSlug) {
      return NextResponse.json(
        { error: "productSlug query parameter is required" },
        { status: 400 }
      );
    }

    const product = await prisma.product.findFirst({
      where: { slug: productSlug },
    });

    if (!product) {
      return NextResponse.json(
        { error: `Product with slug '${productSlug}' not found` },
        { status: 404 }
      );
    }

    const deleted = await prisma.productSizeAvailability.deleteMany({
      where: { productId: product.id },
    });

    return NextResponse.json({
      success: true,
      message: `Deleted ${deleted.count} size availability records for ${product.name}`,
    });
  } catch (error) {
    console.error("Error in DELETE /api/admin/size-availability:", error);
    return NextResponse.json(
      { error: "Internal server error", details: String(error) },
      { status: 500 }
    );
  }
}
