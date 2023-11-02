import { prismaClient } from "@/lib/prisma";
import ProductList from "@/components/ui/product-list";
import SectionTitle from "@/components/ui/section-title";
import PromoBanner from "./components/promo-banner";
import Categories from "./components/categories";

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

      <div>
        <div className="px-8">
          <SectionTitle>Ofertas</SectionTitle>
        </div>
        <div className="ps-8">
          <ProductList products={deals} />
        </div>
      </div>

      <PromoBanner
        src="/banner-home-02.png"
        alt="Atè 55% de desconto em mouses"
      />

      <div>
        <div className="px-8">
          <SectionTitle>Teclados</SectionTitle>
        </div>
        <div className="ps-8">
          <ProductList products={keyboards} />
        </div>
      </div>

      <PromoBanner
        src="/banner-home-03.png"
        alt="Atè 20% de desconto em fones"
      />

      <div className="mb-16">
        <div className="px-8">
          <SectionTitle>Mouses</SectionTitle>
        </div>
        <div className="ps-8">
          <ProductList products={mouses} />
        </div>
      </div>
    </div>
  );
}
