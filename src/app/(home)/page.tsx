"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="px-8">
      <Image
        src="/banner-home-01.png"
        height={0}
        width={0}
        alt="Atè 55% de desconto só esse mês"
        sizes="100vw"
        className="h-auto w-full"
      />
    </div>
  );
}
