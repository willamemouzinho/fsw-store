import { prismaClient } from "@/lib/prisma";

interface ProductDetailsPageProps {
  params: { slug: string };
}

const ProductDetailsPage = async ({
  params: { slug },
}: ProductDetailsPageProps) => {
  const products = await prismaClient.product.findFirst({
    where: {
      slug: slug,
    },
  });

  if (!products) return null;

  return <div>{products.name}</div>;
};

export default ProductDetailsPage;
