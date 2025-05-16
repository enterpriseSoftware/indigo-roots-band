"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ProductImages = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    console.log('Images array:', images);
    console.log('Current image:', images[current]);
  }, [current, images]);

  const handleImageClick = (index: number) => {
    console.log('Clicking image at index:', index);
    console.log('Image URL:', images[index]);
    setCurrent(index);
  };

  if (!images || images.length === 0) {
    console.error('No images provided to ProductImages component');
    return null;
  }

  return (
    <div className="space-y-4">
      <Image
        src={images[current]}
        alt="product image"
        className="min-h-[300px] object-cover object-center"
        width={1000}
        height={1000}
        priority
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
