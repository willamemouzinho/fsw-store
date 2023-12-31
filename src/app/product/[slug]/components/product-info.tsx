"use client";

import { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import DiscountBadge from "@/components/ui/discount-badge";
import { ProductWithTotalPrice } from "@/helpers/product";
import { CartContext } from "@/providers/cart";

import { ArrowLeft, ArrowRight, TruckIcon } from "lucide-react";

interface ProductInfoProps {
  product: ProductWithTotalPrice;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);

  const { addProductToCart } = useContext(CartContext);

  const handleDecreseQuantityClick = () => {
    setQuantity((prev) => (prev === 1 ? prev : prev - 1));
  };

  const handleIncreseQuantityClick = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleAddProductToCart = () => {
    addProductToCart({ ...product, quantity });
  };

  return (
    <div>
      <h1 className="mb-4 text-lg">{product.name}</h1>

      <div className="mb-4 flex flex-col items-start">
        <div className="flex gap-2">
          <h2 className="text-2xl font-bold">
            R$ {Number(product.totalPrice).toFixed(2)}
          </h2>
          {product.discountPercentage > 0 && (
            <span className="flex items-center">
              <DiscountBadge>{product.discountPercentage}</DiscountBadge>
            </span>
          )}
        </div>
        {product.discountPercentage > 0 && (
          <span className="text-sm line-through opacity-50">
            R$ {Number(product.basePrice).toFixed(2)}
          </span>
        )}
      </div>

      <div className="mb-8 flex items-center gap-2">
        <Button
          size="icon"
          variant="outline"
          onClick={handleDecreseQuantityClick}
        >
          <ArrowLeft />
        </Button>

        <span>{quantity}</span>

        <Button
          size="icon"
          variant="outline"
          onClick={handleIncreseQuantityClick}
        >
          <ArrowRight />
        </Button>
      </div>

      <div className="mb-8 flex flex-col gap-2">
        <h2 className="text-sm font-bold">Descrição</h2>
        <p className="text-xs opacity-75">{product.description}</p>
      </div>

      <Button
        className="mb-5 w-full text-sm font-bold uppercase"
        onClick={handleAddProductToCart}
      >
        Adicionar ao carrinho
      </Button>

      <div className="flex items-center justify-between rounded-lg bg-accent px-6 py-2 text-xs">
        <div className="flex items-center gap-3">
          <TruckIcon />
          <div className="flex flex-col gap-1">
            <p>
              Entrega via <span className="font-bold italic">FSPacket®</span>
            </p>
            <p className="text-primary">
              Envio para <span className="font-bold">todo Brasil</span>
            </p>
          </div>
        </div>
        <p className=" font-bold">Frete Grátis</p>
      </div>
    </div>
  );
};

export default ProductInfo;
