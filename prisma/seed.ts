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

        let catOrder = 0;

        for (const cat of mainCat.categories) {
            console.log(`  📁 Creating category: ${cat.name}`);

            const createdCategory = await prisma.category.create({
                data: {
                    name: cat.name,
                    slug: cat.slug,
                    mainCategoryId: createdMainCategory.id,
                    sortOrder: catOrder++,
                },
            });

            let subcatOrder = 0;

            for (const subcat of cat.subcategories) {
                console.log(`    📄 Creating subcategory: ${subcat.name}`);

                const createdSubcategory = await prisma.subcategory.create({
                    data: {
                        name: subcat.name,
                        slug: subcat.slug,
                        categoryId: createdCategory.id,
                        sortOrder: subcatOrder++,
                    },
                });

                // If there are types, create them as products
                if (subcat.types && subcat.types.length > 0) {
                    let typeOrder = 0;
                    for (const type of subcat.types) {
                        const typeSlug = type.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '-');
                        console.log(`      🔩 Creating product: ${type}`);

                        await prisma.product.create({
                            data: {
                                name: type,
                                slug: typeSlug,
                                subcategoryId: createdSubcategory.id,
                                sortOrder: typeOrder++,
                            },
                        });
                    }
                }
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
    console.log(`   Subcategories: ${counts[2]}`);
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
