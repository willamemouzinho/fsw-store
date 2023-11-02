import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { SheetHeader } from "./sheet";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";
import CartItem from "./cart-item";
import { computeProductTotalPrice } from "@/helpers/product";

const Cart = () => {
  const { products } = useContext(CartContext);

  return (
    <>
      <SheetHeader>
        <div className="mb-8 text-left">
          <Badge
            variant="outline"
            className="gap-1 rounded-full border-2 border-primary px-3 py-1 text-base font-bold uppercase"
          >
            <ShoppingCartIcon size={16} />
            Carrinho
          </Badge>
        </div>
      </SheetHeader>

      <div className="flex flex-col gap-5">
        {products.map((product) => (
          <CartItem
            key={product.id}
            product={computeProductTotalPrice(product as any) as any}
          />
        ))}
      </div>
    </>
  );
};

export default Cart;
