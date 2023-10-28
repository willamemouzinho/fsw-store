import CategoryItem from "./category-item";
import { prismaClient } from "@/lib/prisma";

const CategoryList = async () => {
  const categories = await prismaClient.category.findMany({});

  return (
    <div className="grid grid-cols-2 gap-8">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;
