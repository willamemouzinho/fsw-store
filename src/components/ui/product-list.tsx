import { Product } from "@prisma/client";
import ProductItem from "./product-item";
import { computeProductTotalPrice } from "@/helpers/product";

interface ProductListProps {
  products: Product[];
}
const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="flex w-full gap-4 overflow-x-auto px-8 [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={computeProductTotalPrice(product)}
        />
      ))}
    </div>
  );
};

export default ProductList;
