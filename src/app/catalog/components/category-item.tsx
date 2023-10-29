import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface CategoryItemProps {
  category: Category;
}
const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Link href={`/category/${category.slug}`}>
      <div className="flex flex-col">
        <div className="bg-category-item-gradient flex h-[150px] w-full items-center justify-center rounded-t-lg">
          <Image
            src={category.imageUrl}
            height={0}
            width={0}
            alt={category.name}
            sizes="100vw"
            className="h-auto max-h-[70%] w-full max-w-[80%]"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <p className="ro rounded-b-lg bg-accent py-3 text-center font-bold">
          {category.name}
        </p>
      </div>
    </Link>
  );
};

export default CategoryItem;
