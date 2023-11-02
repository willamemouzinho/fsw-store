import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { SheetHeader } from "./sheet";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";

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

      {products.map((product) => (
        <h1 key={product.id}>{product.name}1</h1>
      ))}
    </>
  );
};

export default Cart;
