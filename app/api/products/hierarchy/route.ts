import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { ProductHierarchy } from '@/types/product';

// GET /api/products/hierarchy - Get complete product hierarchy from database
export async function GET() {
    try {
        // Fetch all main categories with their nested relations
        const mainCategories = await prisma.mainCategory.findMany({
            where: { isActive: true },
            orderBy: { sortOrder: 'asc' },
            include: {
                categories: {
                    where: { isActive: true },
                    orderBy: { sortOrder: 'asc' },
                    include: {
                        subcategories: {
                            where: { isActive: true },
                            orderBy: { sortOrder: 'asc' },
                            include: {
                                products: {
                                    where: { isActive: true },
                                    orderBy: { sortOrder: 'asc' },
                                    select: {
                                        name: true,
                                        slug: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });

        // Transform database data to match ProductHierarchy interface
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const hierarchy: ProductHierarchy[] = mainCategories.map((mainCat: any) => ({
            mainCategory: mainCat.name,
            slug: mainCat.slug,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            categories: mainCat.categories.map((cat: any) => ({
                name: cat.name,
                slug: cat.slug,
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                subcategories: cat.subcategories.map((subcat: any) => ({
                    name: subcat.name,
                    slug: subcat.slug,
                    types: subcat.products.length > 0
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        ? subcat.products.map((p: any) => p.name)
                        : undefined,
                })),
            })),
        }));

        return NextResponse.json({
            success: true,
            data: hierarchy,
        });
    } catch (error) {
        console.error('Error fetching product hierarchy:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to fetch product hierarchy' },
            { status: 500 }
        );
    }
}
