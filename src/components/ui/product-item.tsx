import { ProductWithTotalPrice } from "@/helpers/product";
import Image from "next/image";
import { Badge } from "./badge";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

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
            <Badge className="absolute left-2 top-2 flex items-center justify-center gap-1 rounded-full px-2">
              <ArrowDown size={12} strokeWidth={3} />
              <span className="text-xs font-bold">
                {product.discountPercentage}%
              </span>
            </Badge>
          )}
        </div>
        <div className="">
          <h3 className="overflow-hidden text-ellipsis whitespace-nowrap text-xs">
            {product.name}
          </h3>
          <p className="font-bold">
            R$ {Number(product.totalPrice).toFixed(2)}{" "}
            {product.discountPercentage > 0 && (
              <span className="text-xs line-through opacity-50">
                R$ {Number(product.basePrice).toFixed(2)}
              </span>
            )}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
