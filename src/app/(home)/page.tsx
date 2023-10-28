import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "@/components/ui/product-list";
import SectionTitle from "@/components/ui/section-title";
import PromoBanner from "./components/promo-banner";

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

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });

  return (
    <div className="">
      <PromoBanner
        src="/banner-home-01.png"
        alt="Atè 55% de desconto só esse mês"
      />

      <div className="mb-8 px-8">
        <Categories />
      </div>

      <div className="px-8">
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>

      <PromoBanner
        src="/banner-home-02.png"
        alt="Atè 55% de desconto em mouses"
      />

      <div className="px-8">
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards} />
      </div>

      <PromoBanner
        src="/banner-home-03.png"
        alt="Atè 20% de desconto em fones"
      />

      <div className="mb-16 px-8">
        <SectionTitle>Mouses</SectionTitle>
        <ProductList products={mouses} />
      </div>
    </div>
  );
}
