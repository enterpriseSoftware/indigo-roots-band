import { getProductBySlug } from "@/lib/actions/product.actions";
import { notFound } from "next/navigation";
import Image from "next/image";
import ProductPrice from "@/components/shared/product/product-price";

interface Props {
  params: {
    slug: string;
  };
}

const ProductPage = async ({ params }: Props) => {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square w-full overflow-hidden rounded-lg">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-4">
              {product.images.slice(1).map((image, index) => (
                <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={image}
                    alt={`${product.name} - Image ${index + 2}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-sm text-gray-500">{product.brand}</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <span className="text-yellow-400">★</span>
              <span className="ml-1">{product.rating} Stars</span>
            </div>
            <span className="text-gray-300">|</span>
            <span>{product.numReviews} Reviews</span>
          </div>

          <div className="text-2xl font-bold">
            <ProductPrice value={Number(product.price)} />
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Description</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Details</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Category: {product.category}</li>
              <li>Stock: {product.stock} units</li>
              {product.isFeatured && <li>Featured Product</li>}
            </ul>
          </div>

          <div className="pt-6">
            <button
              className={`w-full rounded-lg px-6 py-3 text-white font-medium ${
                product.stock > 0
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={product.stock === 0}
            >
              {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage; 