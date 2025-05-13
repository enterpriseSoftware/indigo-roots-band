'use server';

import { LATEST_PRODUCTS_LIMIT } from '../constants';
import { prisma } from '@/db/prisma';
import { convertToPlainObject } from '../utils';


// Get latest products
export async function getLatestProducts(){
    const data = await prisma.product.findMany({
        take: LATEST_PRODUCTS_LIMIT,
        orderBy: {
            createdAt: 'desc'
        }
    });
    // Explicitly convert price and rating to strings
    return data.map((product) => ({
      ...product,
      price: product.price.toString(),
      rating: product.rating.toString(),
    }));
}

// Get single product by its slug
export async function getProductBySlug(slug: string){
    const product = await prisma.product.findUnique({
        where: {
            slug: slug, 
        }
    });
    
    if (!product) {
        return null;
    }

    // Convert to plain object and ensure price and rating are strings
    return {
        ...convertToPlainObject(product),
        price: product.price.toString(),
        rating: product.rating.toString(),
    };
}