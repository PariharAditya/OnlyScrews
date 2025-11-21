import { PrismaClient } from '@prisma/client';
import { productHierarchy } from '../lib/productHierarchy';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Starting database seed...');

    // Clear existing data
    console.log('🗑️  Clearing existing data...');
    await prisma.product.deleteMany();
    await prisma.subcategory.deleteMany();
    await prisma.category.deleteMany();
    await prisma.mainCategory.deleteMany();

    let mainCatOrder = 0;

    for (const mainCat of productHierarchy) {
        console.log(`\n📦 Creating main category: ${mainCat.mainCategory}`);

        const createdMainCategory = await prisma.mainCategory.create({
            data: {
                name: mainCat.mainCategory,
                slug: mainCat.slug,
                sortOrder: mainCatOrder++,
            },
        });

        // Check if this main category has hierarchical structure or flat items
        if (mainCat.categories) {
            // Hierarchical structure (e.g., Screws with subcategories)
            let categoryOrder = 0;
            for (const category of mainCat.categories) {
                console.log(`  📂 Creating category: ${category.name}`);

                const createdCategory = await prisma.category.create({
                    data: {
                        name: category.name,
                        slug: category.slug,
                        mainCategoryId: createdMainCategory.id,
                        sortOrder: categoryOrder++,
                    },
                });

                let itemOrder = 0;
                for (const item of category.items) {
                    console.log(`    📄 Creating item: ${item.name}`);

                    await prisma.subcategory.create({
                        data: {
                            name: item.name,
                            slug: item.slug,
                            categoryId: createdCategory.id,
                            sortOrder: itemOrder++,
                        },
                    });
                }
            }
        } else if (mainCat.items) {
            // Flat structure (e.g., Bolts, Nuts with direct items)
            const createdCategory = await prisma.category.create({
                data: {
                    name: mainCat.mainCategory,
                    slug: `${mainCat.slug}-items`,
                    mainCategoryId: createdMainCategory.id,
                    sortOrder: 0,
                },
            });

            let itemOrder = 0;
            for (const item of mainCat.items) {
                console.log(`  📄 Creating item: ${item.name}`);

                await prisma.subcategory.create({
                    data: {
                        name: item.name,
                        slug: item.slug,
                        categoryId: createdCategory.id,
                        sortOrder: itemOrder++,
                    },
                });
            }
        }
    }

    console.log('\n✅ Database seed completed successfully!');

    // Print summary
    const counts = await Promise.all([
        prisma.mainCategory.count(),
        prisma.category.count(),
        prisma.subcategory.count(),
        prisma.product.count(),
    ]);

    console.log('\n📊 Summary:');
    console.log(`   Main Categories: ${counts[0]}`);
    console.log(`   Categories: ${counts[1]}`);
    console.log(`   Subcategories (Items): ${counts[2]}`);
    console.log(`   Products: ${counts[3]}`);
}

main()
    .catch((e) => {
        console.error('❌ Error seeding database:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
