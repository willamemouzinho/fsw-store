import { prismaClient } from "@/lib/prisma";
import ProductImages from "./components/product-images";
import ProductInfo from "./components/product-info";
import { computeProductTotalPrice } from "@/helpers/product";

interface ProductDetailsPageProps {
  params: { slug: string };
}

const ProductDetailsPage = async ({
  params: { slug },
}: ProductDetailsPageProps) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug: slug,
    },
  });

  if (!product) return null;

  return (
    <div>
      <div className="mb-8">
        <ProductImages product={product} />
      </div>

      <div className="px-8">
        <ProductInfo product={computeProductTotalPrice(product)} />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
