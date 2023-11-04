import { useContext } from "react";
import { CartContext } from "@/providers/cart";
import { computeProductTotalPrice } from "@/helpers/product";
import { createCheckout } from "@/actions/checkout";
import { createOrder } from "@/actions/order";
import { Badge } from "./badge";
import { SheetHeader } from "./sheet";
import CartItem from "./cart-item";
import { Separator } from "./separator";
import { ScrollArea } from "./scroll-area";
import { Button } from "./button";

import { ShoppingCartIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import { loadStripe } from "@stripe/stripe-js";
import { NextResponse } from "next/server";

const Cart = () => {
  const { data } = useSession();

  const { products, subtotal, total, totalDiscount } = useContext(CartContext);

  const handleFinishPurchaseClick = async () => {
    if (!data?.user) {
      // Redirecionar para o login
      // return;
      console.log("Oiiiiiiiiiiiiiiiii");
      return NextResponse.error();
    }

    const order = await createOrder(products, (data?.user as any).id);

    const checkout = await createCheckout(products, order.id);

    console.log(checkout);

    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

    stripe?.redirectToCheckout({
      sessionId: checkout.id,
    });
  };

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

      {products.length > 0 && (
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

          <Button
            className="mt-7 font-bold uppercase"
            onClick={handleFinishPurchaseClick}
          >
            Finalizar compra
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
