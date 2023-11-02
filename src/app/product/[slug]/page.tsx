import { prismaClient } from "@/lib/prisma";
import SectionTitle from "@/components/ui/section-title";
import ProductList from "@/components/ui/product-list";
import { computeProductTotalPrice } from "@/helpers/product";
import ProductImages from "./components/product-images";
import ProductInfo from "./components/product-info";

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
    include: {
      category: {
        include: {
          products: {
            where: {
              slug: {
                not: slug,
              },
            },
          },
        },
      },
    },
  });

  if (!product) return null;

  return (
    <div>
      <div className="mb-8">
        <ProductImages product={product} />
      </div>

      <div className="mb-16 px-8">
        <ProductInfo product={computeProductTotalPrice(product)} />
      </div>

      <div className="mb-16">
        <div className="px-8">
          <SectionTitle>Relacionados</SectionTitle>
        </div>

        <div className="ps-8">
          <ProductList products={product.category.products} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
