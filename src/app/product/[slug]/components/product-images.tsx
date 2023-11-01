"use client";

import { Product } from "@prisma/client";
import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
  product: Product;
}

const ProductImages = ({ product }: ProductImagesProps) => {
  const [currentImage, setCurrentImage] = useState(product.imageUrls[0]);

  const handleImageClick = (imagesUrl: string) => {
    setCurrentImage(imagesUrl);
  };

  return (
    <div>
      <div className="h[380px] mb-8 flex w-full items-center justify-center bg-accent">
        <Image
          src={currentImage}
          height={0}
          width={0}
          alt={product.name}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{
            objectFit: "contain",
          }}
        />
      </div>

      <div className="gap flex gap-4 px-8">
        {product.imageUrls.map((imageUrl) => (
          <button
            key={imageUrl}
            className={`flex min-h-[77px] items-center justify-center rounded-lg bg-accent ${
              currentImage === imageUrl &&
              "border-2 border-solid border-primary"
            }`}
            onClick={() => handleImageClick(imageUrl)}
          >
            <Image
              src={imageUrl}
              height={0}
              width={0}
              alt={product.name}
              sizes="100vw"
              className="h-auto max-h-[70%] w-auto max-w-[80%]"
              style={{
                objectFit: "contain",
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
