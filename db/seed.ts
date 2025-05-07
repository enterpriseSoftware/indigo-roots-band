import { PrismaClient } from '../lib/generated/prisma';
import { sampleProducts } from './sample-data';

async function main(){
    const prisma = new PrismaClient();

    try {
        await prisma.product.deleteMany();

        const result = await prisma.product.createMany({
            data: sampleProducts.products
        });

        console.log(`Database seeded with ${result.count} products`);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

main();


