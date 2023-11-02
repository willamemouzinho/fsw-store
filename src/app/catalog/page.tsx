import { Badge } from "@/components/ui/badge";
import CategoryList from "./components/category-list";

import { ShapesIcon } from "lucide-react";

const CatologPage = () => {
  return (
    <div className="p-8">
      <div className="mb-8">
        <Badge
          variant="outline"
          className="gap-1 rounded-full border-2 border-primary px-3 py-1 text-base font-bold uppercase"
        >
          <ShapesIcon size={16} strokeWidth={2} />
          Catálogo
        </Badge>
      </div>

      <div>
        <CategoryList />
      </div>
    </div>
  );
};

export default CatologPage;
