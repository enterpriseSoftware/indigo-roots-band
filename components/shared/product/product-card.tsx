import {Card, CardContent, CardHeader} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import ProductPrice from "./product-price";
import { Product } from "@/types";

const ProductCard = ({product}:{product:Product}) => {
    return ( 
        <Card className="w-full">
            <Link href={`/product/${product.slug}`}>
                <Image 
                    src={product.images[0]}
                    alt={product.name}
                    width={300} 
                    height={300}
                    priority={true}
                    className="w-full h-auto object-cover rounded-t-xl"
                />
            </Link>
            <CardContent className="p-4 grid gap-4">
                <div className="text-xs">{product.brand}</div>
                <Link href={`/product/${product.slug}`}>
                    <h2 className="text-sm font-medium">{product.name}</h2>
                </Link>
                <div className="flex justify-between items-center gap-4">
                    <p>{product.rating} Stars</p> 
                    {product.stock > 0 ? (
                        <ProductPrice value={Number(product.price)} />
                    ):(
                        <p className="font-bold text-red-500">Out of Stock</p>
                    )}
                </div>
            </CardContent>
        </Card>
     );
}
 
export default ProductCard;