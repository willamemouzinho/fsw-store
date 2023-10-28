import Image from "next/image";
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "@/components/ui/product-list";
import Title from "@/components/ui/title";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  return (
    <div className="">
      <Image
        src="/banner-home-01.png"
        height={0}
        width={0}
        alt="Atè 55% de desconto só esse mês"
        sizes="100vw"
        className="h-auto w-full px-8"
      />

      <div className="mt-8 px-8">
        <Categories />
      </div>

      <div className="mt-8 px-8">
        <Title title="ofertas" />
      </div>

      <div className="">
        <ProductList products={deals} />
      </div>

      <div className="mt-8 px-8">
        <Title title="teclados" />
      </div>

      <div className="">
        <ProductList products={keyboards} />
      </div>
    </div>
  );
}
