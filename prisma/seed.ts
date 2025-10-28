import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    try {
        // Create categories
        const categories = [
            {
                name: 'Screws',
                description: 'Various types of screws for different applications',
                image: 'https://example.com/screws.jpg',
            },
            {
                name: 'Bolts',
                description: 'Durable bolts for construction and assembly',
                image: 'https://example.com/bolts.jpg',
            },
            {
                name: 'Nuts',
                description: 'Matching nuts for bolts and threaded rods',
                image: 'https://example.com/nuts.jpg',
            },
            {
                name: 'Washers',
                description: 'Flat discs to distribute load of threaded fasteners',
                image: 'https://example.com/washers.jpg',
            },
            {
                name: 'Special Fasteners',
                description: 'Unique fasteners for specific applications',
                image: 'https://example.com/special.jpg',
            },
        ];

        for (const category of categories) {
            await prisma.category.upsert({
                where: { name: category.name },
                update: {},
                create: category,
            });
        }

        console.log('Categories seeded successfully');

        // Get the categories
        const screwsCategory = await prisma.category.findUnique({
            where: { name: 'Screws' },
        });

        const boltsCategory = await prisma.category.findUnique({
            where: { name: 'Bolts' },
        });

        if (screwsCategory && boltsCategory) {
            // Create sample products
            const products = [
                {
                    name: 'Wood Screws 8x1-1/2"',
                    description: 'Self-tapping wood screws ideal for general woodworking',
                    price: 12.99,
                    stock: 200,
                    categoryId: screwsCategory.id,
                    images: ['https://example.com/wood-screws-1.jpg', 'https://example.com/wood-screws-2.jpg'],
                },
                {
                    name: 'Drywall Screws 6x1"',
                    description: 'Self-drilling screws designed for attaching drywall to wood or metal studs',
                    price: 9.99,
                    stock: 300,
                    categoryId: screwsCategory.id,
                    images: ['https://example.com/drywall-screws-1.jpg'],
                },
                {
                    name: 'Hex Bolts 3/8x2"',
                    description: 'Standard hex head bolts for general purpose fastening',
                    price: 15.99,
                    stock: 150,
                    categoryId: boltsCategory.id,
                    images: ['https://example.com/hex-bolts-1.jpg', 'https://example.com/hex-bolts-2.jpg'],
                },
            ];

            for (const product of products) {
                // Use create instead of upsert since we don't have a unique constraint to use
                await prisma.product.create({
                    data: product,
                });
            }

            console.log('Products sample data attempted to seed');
        }

    } catch (error) {
        console.error('Error seeding data:', error);
    } finally {
        await prisma.$disconnect();
    }
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    });