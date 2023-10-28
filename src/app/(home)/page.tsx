"use client";

import Image from "next/image";
import Categories from "./components/categories";

export default function Home() {
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
    </div>
  );
}
