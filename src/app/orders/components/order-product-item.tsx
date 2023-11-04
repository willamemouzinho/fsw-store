import { computeProductTotalPrice } from "@/helpers/product";
import { Prisma } from "@prisma/client";
import Image from "next/image";

interface OrderProductItemProps {
  orderProduct: Prisma.OrderProductGetPayload<{
    include: {
      product: true;
    };
  }>;
}

const OrderProductItem = ({ orderProduct }: OrderProductItemProps) => {
  const productWithTotalPrice = computeProductTotalPrice(orderProduct.product);

  return (
    <div className="flex h-[77px] items-center gap-4">
      <div className="flex h-full w-[77px] items-center justify-center rounded-lg bg-accent">
        <Image
          src={orderProduct.product.imageUrls[0]}
          height={0}
          width={0}
          alt={orderProduct.product.name}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[70%] object-contain"
        />
      </div>

      <div className="flex h-full flex-1 flex-col justify-between">
        <div className="flex flex-col gap-2">
          <p className="flex w-fit rounded-md bg-accent px-3 text-[10px] lg:text-xs">
            Vendido e entregue por
            <span className="ml-1 font-bold"> FSW Store</span>
          </p>
          <h2 className="text-xs">{orderProduct.product.name}</h2>
        </div>

        <div className="flex items-end justify-between gap-2">
          <h3 className=" text-sm font-bold">
            R$ {productWithTotalPrice.totalPrice.toFixed(2)}{" "}
            {productWithTotalPrice.discountPercentage > 0 && (
              <span className="text-xs line-through opacity-50">
                R$ {Number(productWithTotalPrice.basePrice).toFixed(2)}
              </span>
            )}
          </h3>

          <div>
            <p className="text-xs opacity-60 lg:hidden">
              Qntd: {orderProduct.quantity}
            </p>
            <p className="hidden text-sm opacity-60 lg:block">
              Quantidade: {orderProduct.quantity}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderProductItem;
