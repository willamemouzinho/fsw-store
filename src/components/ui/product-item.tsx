import { ProductWithTotalPrice } from "@/helpers/product";
import Image from "next/image";
import { Badge } from "./badge";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import DiscountBadge from "./discount-badge";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}
const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Link href={`/product/${product.slug}`}>
      <div className="flex min-w-[156px] flex-col gap-4 rounded-lg">
        <div className="relative flex h-[170px] w-full items-center justify-center rounded-lg bg-accent">
          <Image
            src={product.imageUrls[0]}
            height={0}
            width={0}
            alt={product.name}
            sizes="100vw"
            className="h-auto max-h-[70%] w-full max-w-[80%]"
            style={{
              objectFit: "contain",
            }}
          />
          {product.discountPercentage > 0 && (
            <DiscountBadge className="absolute left-2 top-2">
              {product.discountPercentage}
            </DiscountBadge>
          )}
        </div>
        <div className="">
          <h2 className="overflow-hidden text-ellipsis whitespace-nowrap text-xs">
            {product.name}
          </h2>
          <h3 className="font-bold">
            R$ {Number(product.totalPrice).toFixed(2)}{" "}
            {product.discountPercentage > 0 && (
              <span className="text-xs line-through opacity-50">
                R$ {Number(product.basePrice).toFixed(2)}
              </span>
            )}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
