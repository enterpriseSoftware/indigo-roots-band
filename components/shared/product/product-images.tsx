"use client";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
const ProductImages = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  const handleImageClick = (index: number) => {
    setCurrent(index);
    console.log('Current state after update:', index);
  };

  console.log('Rendering with current:', current, 'images:', images);

  return (
    <div className="space-y-4">
      <Image
        src={images[current]}
        alt="product image"
        className="min-h-[300px] object-cover object-center"
        width={1000}
        height={1000}
      />
      <div className="flex gap-2">
        {images.map((image,index)=>(
          <div 
            key={image} 
            onClick={() => handleImageClick(index)}
            className={cn(
              "cursor-pointer border-2 p-1 transition-all",
              current === index ? "border-blue-500" : "border-transparent hover:border-gray-300"
            )}
          >
            <Image
              src={image}
              alt="product image"
              width={100}
              height={100}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
