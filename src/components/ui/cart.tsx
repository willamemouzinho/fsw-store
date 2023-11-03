import { useContext } from "react";
import { CartContext } from "@/providers/cart";
import { computeProductTotalPrice } from "@/helpers/product";
import { Badge } from "./badge";
import { SheetHeader } from "./sheet";
import CartItem from "./cart-item";

import { ShoppingCartIcon } from "lucide-react";
import { Separator } from "./separator";
import { ScrollArea } from "./scroll-area";
import { Button } from "./button";

const Cart = () => {
  const { products, subtotal, total, totalDiscount } = useContext(CartContext);

  return (
    <div className="flex h-full flex-col">
      <ScrollArea className="flex-1">
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
          {products.length > 0 ? (
            products.map((product) => (
              <CartItem
                key={product.id}
                product={computeProductTotalPrice(product as any) as any}
              />
            ))
          ) : (
            <p className="text-sm">
              Carrinho vazio.{" "}
              <span className="font-bold text-primary-text">
                Comece suas compras!
              </span>
            </p>
          )}
        </div>
      </ScrollArea>

      <div className="flex flex-col gap-3 text-xs">
        <Separator />
        <div className="flex items-center justify-between">
          <p>Subtotal</p>
          <p>R$ {subtotal.toFixed(2)}</p>
        </div>

        <Separator />
        <div className="flex items-center justify-between">
          <p>Entrega</p>
          <p className="uppercase">Grátis</p>
        </div>

        <Separator />
        <div className="flex items-center justify-between">
          <p>Descontos</p>
          <p>- R$ {totalDiscount.toFixed(2)}</p>
        </div>

        <Separator />
        <div className="flex items-center justify-between text-sm font-bold">
          <p>Total</p>
          <p>R$ {total.toFixed(2)}</p>
        </div>

        <Button className="mt-7 font-bold uppercase">Finalizar compra</Button>
      </div>
    </div>
  );
};

export default Cart;
