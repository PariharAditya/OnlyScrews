// Seed script for Product Size Availability
// Run with: npx ts-node prisma/seedSizeAvailability.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Test data for Hex SEM - based on user's Excel data
const hexSemSizeData = {
    productSlug: 'hex-sem',
    productName: 'Hex SEM Screws',
    materials: [
        {
            name: 'Stainless Steel 304',
            slug: 'stainless-steel-304',
            sizes: [
                // Available sizes (green)
                { size: 'M-4 X 8', available: true },
                { size: 'M-4 X 10', available: true },
                { size: 'M-4 X 12', available: true },
                { size: 'M-4 X 16', available: true },
                { size: 'M-4 X 20', available: true },
                { size: 'M-5 X 10', available: true },
                { size: 'M-5 X 12', available: true },
                { size: 'M-5 X 16', available: true },
                { size: 'M-5 X 16 OD WSR', available: true },
                { size: 'M-5 X 20', available: true },
                { size: 'M-6 X 10', available: true },
                { size: 'M-6 X 12', available: true },
                { size: 'M-6 X 16', available: true },
                { size: 'M-6 X 20', available: true },
                { size: 'M-6 X 20 OD WSR', available: true },
                { size: 'M-6 X 25', available: true },
                // Not available sizes (red)
                { size: 'M-8 X 15', available: false },
                { size: 'M-8 X 20', available: false },
                { size: 'M-8 X 25', available: false },
                { size: 'M-8 X 30', available: false },
                { size: 'M-10 X 20', available: false },
                { size: 'M-10 X 40', available: false },
            ],
        },
        {
            name: 'Mild Steel',
            slug: 'mild-steel',
            sizes: [
                // Available sizes (green)
                { size: 'M-4 X 8', available: true },
                { size: 'M-4 X 10', available: false },
                { size: 'M-4 X 12', available: false },
                { size: 'M-4 X 16', available: false },
                { size: 'M-4 X 20', available: false },
                { size: 'M-5 X 10', available: false },
                { size: 'M-5 X 12', available: false },
                { size: 'M-5 X 16', available: false },
                { size: 'M-5 X 16 OD WSR', available: false },
                { size: 'M-5 X 20', available: false },
                { size: 'M-6 X 10', available: false },
                { size: 'M-6 X 12', available: false },
                { size: 'M-6 X 16', available: false },
                { size: 'M-6 X 20', available: true },
                { size: 'M-6 X 20 OD WSR', available: false },
                { size: 'M-6 X 25', available: true },
                // Not available sizes (red)
                { size: 'M-8 X 15', available: true },
                { size: 'M-8 X 20', available: true },
                { size: 'M-8 X 25', available: true },
                { size: 'M-8 X 30', available: true },
                { size: 'M-10 X 20', available: true },
                { size: 'M-10 X 40', available: true },
            ],
        }
    ],
};

async function seedSizeAvailability() {
    console.log('🌱 Starting size availability seed...\n');

    try {
        // 1. Create Materials if they don't exist
        console.log('📦 Creating materials...');
        const materialRecords: Record<string, string> = {};

        for (let i = 0; i < hexSemSizeData.materials.length; i++) {
            const mat = hexSemSizeData.materials[i];
            const material = await prisma.material.upsert({
                where: { slug: mat.slug },
                update: { name: mat.name },
                create: {
                    name: mat.name,
                    slug: mat.slug,
                    sortOrder: i,
                    isActive: true,
                },
            });
            materialRecords[mat.slug] = material.id;
            console.log(`  ✅ Material: ${mat.name} (${material.id})`);
        }

        // 2. Find or create the product
        console.log('\n📦 Finding/creating product...');

        // First, ensure we have the category structure
        let mainCategory = await prisma.mainCategory.findUnique({
            where: { slug: 'screws' },
        });

        if (!mainCategory) {
            mainCategory = await prisma.mainCategory.create({
                data: {
                    name: 'Screws',
                    slug: 'screws',
                    sortOrder: 0,
                    isActive: true,
                },
            });
            console.log('  ✅ Created MainCategory: Screws');
        }

        let category = await prisma.category.findFirst({
            where: {
                slug: 'machine-screws',
                mainCategoryId: mainCategory.id,
            },
        });

        if (!category) {
            category = await prisma.category.create({
                data: {
                    name: 'Machine Screws',
                    slug: 'machine-screws',
                    mainCategoryId: mainCategory.id,
                    sortOrder: 0,
                    isActive: true,
                },
            });
            console.log('  ✅ Created Category: Machine Screws');
        }

        let subcategory = await prisma.subcategory.findFirst({
            where: {
                slug: 'sems-screws',
                categoryId: category.id,
            },
        });

        if (!subcategory) {
            subcategory = await prisma.subcategory.create({
                data: {
                    name: 'SEMS Screws',
                    slug: 'sems-screws',
                    categoryId: category.id,
                    sortOrder: 0,
                    isActive: true,
                },
            });
            console.log('  ✅ Created Subcategory: SEMS Screws');
        }

        // Find or create the product
        let product = await prisma.product.findFirst({
            where: {
                slug: hexSemSizeData.productSlug,
                subcategoryId: subcategory.id,
            },
        });

        if (!product) {
            product = await prisma.product.create({
                data: {
                    name: hexSemSizeData.productName,
                    slug: hexSemSizeData.productSlug,
                    subcategoryId: subcategory.id,
                    description: 'Hex Head SEMS Screws with pre-assembled washer',
                    isActive: true,
                    isFeatured: false,
                    sortOrder: 0,
                },
            });
            console.log(`  ✅ Created Product: ${hexSemSizeData.productName} (${product.id})`);
        } else {
            console.log(`  ✅ Found existing Product: ${hexSemSizeData.productName} (${product.id})`);
        }

        // 3. Delete existing size availability for this product (clean slate)
        console.log('\n🧹 Cleaning existing size availability data...');
        const deleted = await prisma.productSizeAvailability.deleteMany({
            where: { productId: product.id },
        });
        console.log(`  ✅ Deleted ${deleted.count} existing records`);

        // 4. Create size availability records
        console.log('\n📊 Creating size availability records...');
        let totalCreated = 0;

        for (const mat of hexSemSizeData.materials) {
            const materialId = materialRecords[mat.slug];

            for (let i = 0; i < mat.sizes.length; i++) {
                const sizeData = mat.sizes[i];
                await prisma.productSizeAvailability.create({
                    data: {
                        productId: product.id,
                        materialId: materialId,
                        size: sizeData.size,
                        available: sizeData.available,
                        sortOrder: i,
                    },
                });
                totalCreated++;
            }
            console.log(`  ✅ ${mat.name}: ${mat.sizes.length} sizes`);
        }

        console.log(`\n🎉 Success! Created ${totalCreated} size availability records for ${hexSemSizeData.productName}`);
        console.log('\n📝 Test the API at: GET /api/products/hex-sem/availability');

    } catch (error) {
        console.error('❌ Error seeding size availability:', error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}

// Run the seed
seedSizeAvailability()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    });
