import { z } from 'zod';
import { formatNumberWithDecimal } from '../utils';

const currency = z
.string()
.refine((value)=> /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),'Price must have exactly 2 decimal places')
//Schema for inserting a product specificly.
export const insertProductSchema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters long'),
    slug: z.string().min(3, 'Slug must be at least 3 characters long'),
    category: z.string().min(3, 'Category must be at least 3 characters long'),
    brand: z.string().min(3, 'Brand must be at least 3 characters long'),
    description: z.string().min(10, 'Description must be at least 10 characters long'),
    stock: z.number().min(0, 'Stock must be at least 0'),
    images: z.array(z.string()).min(1, 'At least one image is required'),
    isFeatured: z.boolean().optional(),
    banner: z.string().nullable(),
    price: currency,
})


