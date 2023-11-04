import { useMemo } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Prisma } from "@prisma/client";
import { Separator } from "@/components/ui/separator";
import { computeProductTotalPrice } from "@/helpers/product";
import OrderProductItem from "./order-product-item";
import { getOrderStatus } from "../helpers/status";

import { format } from "date-fns";

interface OrderItemProps {
  order: Prisma.OrderGetPayload<{
    include: {
      orderProducts: {
        include: { product: true };
      };
    };
  }>;
}

const OrderItem = ({ order }: OrderItemProps) => {
  const subtotal = useMemo(() => {
    return order.orderProducts.reduce((acc, orderProduct) => {
      return (
        acc + Number(orderProduct.product.basePrice) * orderProduct.quantity
      );
    }, 0);
  }, [order.orderProducts]);

  const total = useMemo(() => {
    return order.orderProducts.reduce((acc, product) => {
      const productWithTotalPrice = computeProductTotalPrice(product.product);

      return acc + productWithTotalPrice.totalPrice * product.quantity;
    }, 0);
  }, [order.orderProducts]);

  const totalDiscount = subtotal - total;

  return (
    <Card className="px-5">
      <Accordion type="single" className="w-full" collapsible>
        <AccordionItem value={order.id}>
          <AccordionTrigger>
            <div className="flex w-full text-left">
              <div className="flex flex-1 flex-col gap-1 text-left">
                <p className="text-sm font-bold uppercase lg:text-base">
                  Pedido com {order.orderProducts.length} produto(s)
                </p>
                <span className="text-xs opacity-60">
                  Feito em {format(order.createdAt, "d/MM/y 'às' HH:mm")}
                </span>
              </div>

              {/* <div className="hidden flex-1 font-bold lg:block">
                <p className="mb-1 text-xs uppercase lg:text-sm">Status</p>
                <p className="text-xs text-primary lg:text-sm">
                  {getOrderStatus(order.status)}
                </p>
              </div>

              <div className="hidden flex-1 lg:block">
                <p className="mb-1 text-xs font-bold uppercase lg:text-sm ">
                  Data
                </p>
                <p className="text-xs opacity-60 lg:text-sm">
                  {format(order.createdAt, "d/MM/y")}
                </p>
              </div>

              <div className="hidden flex-1 lg:block">
                <p className="text-xs font-bold uppercase lg:text-sm">
                  Pagamento
                </p>
                <p className="text-xs opacity-60 lg:text-sm">Cartão</p>
              </div> */}
            </div>
          </AccordionTrigger>

          <AccordionContent>
            <div className="flex flex-col gap-8">
              <div className="flex items-center justify-between lg:hidden">
                <div className="">
                  <p className="mb-1 text-xs uppercase lg:text-sm">Status</p>
                  <p className="text-xs text-primary lg:text-sm">
                    {getOrderStatus(order.status)}
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-xs font-bold uppercase lg:text-sm">
                    Data
                  </p>
                  <p className="text-xs opacity-60 lg:text-sm">
                    {format(order.createdAt, "d/MM/y")}
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-xs font-bold uppercase lg:text-sm">
                    Pagamento
                  </p>
                  <p className="text-xs opacity-60 lg:text-sm">Cartão</p>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                {order.orderProducts.map((orderProduct) => (
                  <OrderProductItem
                    key={orderProduct.id}
                    orderProduct={orderProduct}
                  />
                ))}
              </div>

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
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default OrderItem;
