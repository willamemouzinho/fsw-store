"use client";

import { ProductWithTotalPrice } from "@/helpers/product";
import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
  product: Pick<ProductWithTotalPrice, "name" | "imageUrls">;
}

const ProductImages = ({
  product: { name, imageUrls },
}: ProductImagesProps) => {
  const [currentImage, setCurrentImage] = useState(imageUrls[0]);

  const handleImageClick = (imagesUrl: string) => {
    setCurrentImage(imagesUrl);
  };

  return (
    <div>
      <div className="mb-8 flex h-[380px] w-full items-center justify-center bg-accent lg:h-full lg:rounded-lg">
        <Image
          src={currentImage}
          height={0}
          width={0}
          alt={name}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
        />
      </div>

      <div className="gap flex gap-4 px-8">
        {imageUrls.map((imageUrl) => (
          <button
            key={imageUrl}
            className={`flex h-[77px] w-full items-center justify-center rounded-lg bg-accent ${
              currentImage === imageUrl &&
              "border-2 border-solid border-primary"
            }`}
            onClick={() => handleImageClick(imageUrl)}
          >
            <Image
              src={imageUrl}
              height={0}
              width={0}
              alt={name}
              sizes="100vw"
              className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
