import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { ProductSizeAvailabilityResponse, MaterialSizeAvailability } from '@/types/product';

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        const { slug } = await params;

        // Find the product by slug (checking subcategory products)
        const product = await prisma.product.findFirst({
            where: {
                slug: slug,
                isActive: true,
            },
            include: {
                sizeAvailability: {
                    include: {
                        material: true,
                    },
                    orderBy: [
                        { material: { sortOrder: 'asc' } },
                        { sortOrder: 'asc' },
                    ],
                },
            },
        });

        // If not found in products table, try to find by subcategory slug
        if (!product) {
            const subcategory = await prisma.subcategory.findFirst({
                where: {
                    slug: slug,
                    isActive: true,
                },
                include: {
                    products: {
                        where: { isActive: true },
                        include: {
                            sizeAvailability: {
                                include: {
                                    material: true,
                                },
                                orderBy: [
                                    { material: { sortOrder: 'asc' } },
                                    { sortOrder: 'asc' },
                                ],
                            },
                        },
                        take: 1, // Get the first/main product
                    },
                },
            });

            if (!subcategory || subcategory.products.length === 0) {
                return NextResponse.json(
                    { error: 'Product not found', materials: [] },
                    { status: 404 }
                );
            }

            const subcatProduct = subcategory.products[0];
            const response = formatSizeAvailabilityResponse(subcatProduct);
            return NextResponse.json(response);
        }

        const response = formatSizeAvailabilityResponse(product);
        return NextResponse.json(response);
    } catch (error) {
        console.error('Error fetching product size availability:', error);
        return NextResponse.json(
            { error: 'Internal server error', materials: [] },
            { status: 500 }
        );
    }
}

function formatSizeAvailabilityResponse(product: {
    id: string;
    name: string;
    slug: string;
    sizeAvailability: Array<{
        size: string;
        available: boolean;
        material: {
            id: string;
            name: string;
            slug: string;
        };
    }>;
}): ProductSizeAvailabilityResponse {
    // Group sizes by material
    const materialMap = new Map<string, MaterialSizeAvailability>();

    for (const sa of product.sizeAvailability) {
        const materialId = sa.material.id;

        if (!materialMap.has(materialId)) {
            materialMap.set(materialId, {
                materialId: sa.material.id,
                materialName: sa.material.name,
                materialSlug: sa.material.slug,
                sizes: [],
            });
        }

        materialMap.get(materialId)!.sizes.push({
            size: sa.size,
            available: sa.available,
        });
    }

    return {
        productId: product.id,
        productName: product.name,
        productSlug: product.slug,
        materials: Array.from(materialMap.values()),
    };
}
