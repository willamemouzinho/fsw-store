import { Badge } from "@/components/ui/badge";
import ProductItem from "@/components/ui/product-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { prismaClient } from "@/lib/prisma";

import { PercentIcon } from "lucide-react";

const DealsPage = async () => {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  return (
    <div className="px-8 pt-8">
      <div className="mb-8">
        <Badge
          variant="outline"
          className="gap-1 rounded-full border-2 border-primary px-3 py-1 text-base font-bold uppercase"
        >
          <PercentIcon size={16} strokeWidth={2} />
          Ofertas
        </Badge>
      </div>

      <div>
        <div className="grid grid-cols-2 gap-8">
          {deals.map((product) => (
            <ProductItem
              key={product.id}
              product={computeProductTotalPrice(product)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DealsPage;

// <div className="flex flex-col gap-8 p-5">
//   <div className="mb-8">
//     <Badge
//       variant="outline"
//       className="gap-1 rounded-full border-2 border-primary px-3 py-1 text-base font-bold uppercase"
//     >
//       <PercentIcon size={16} strokeWidth={2} />
//       Catálogo
//     </Badge>
//   </div>
//   {/* <Badge variant="heading">
//     <PercentIcon size={16} />
//     Ofertas
//   </Badge> */}

//   <div className="grid grid-cols-2 gap-8">
//     {deals.map((product) => (
//       <ProductItem
//         key={product.id}
//         product={computeProductTotalPrice(product)}
//       />
//     ))}
//   </div>
// </div>
