import { CartContext, CartProduct } from "@/providers/cart";
import Image from "next/image";
import { Button } from "./button";
import { ArrowLeft, ArrowRight, TrashIcon } from "lucide-react";
import { useContext } from "react";

interface CartItemProps {
  product: CartProduct;
}

const CartItem = ({ product }: CartItemProps) => {
  const { decreseProductQuantity, increseProductQuantity } =
    useContext(CartContext);

  const handleDecreseProductQuantityClick = () => {
    decreseProductQuantity(product.id);
  };

  const handleIncreseProductQuantityClick = () => {
    increseProductQuantity(product.id);
  };

  return (
    <div className="flex h-[77px] items-center gap-4">
      <div className="flex h-full w-[77px] items-center justify-center rounded-lg bg-accent">
        <Image
          src={product.imageUrls[0]}
          height={0}
          width={0}
          alt={product.name}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[70%] object-contain"
        />
      </div>

      <div className="flex h-full flex-1 flex-col justify-between">
        <div className="flex flex-col gap-0.5">
          <h2 className="text-xs">{product.name}</h2>
          <h3 className="text-sm font-bold">
            R$ {Number(product.totalPrice).toFixed(2)}{" "}
            {product.discountPercentage > 0 && (
              <span className="text-xs line-through opacity-50">
                R$ {Number(product.basePrice).toFixed(2)}
              </span>
            )}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <Button
            size="icon"
            variant="outline"
            className="h-8 w-8"
            onClick={handleDecreseProductQuantityClick}
          >
            <ArrowLeft size={16} />
          </Button>

          <span className="text-sm">{product.quantity}</span>

          <Button
            size="icon"
            variant="outline"
            className="h-8 w-8"
            onClick={handleIncreseProductQuantityClick}
          >
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>

      <Button size="icon" variant="outline">
        <TrashIcon size={18} />
      </Button>
    </div>
  );
};

export default CartItem;
