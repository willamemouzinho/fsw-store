import { CarTaxiFrontIcon, MenuIcon, ShoppingCart } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";

const Header = () => {
  return (
    <Card className="flex items-center justify-between rounded-none p-8">
      <Button size="icon" variant="outline">
        <MenuIcon />
      </Button>
      <h1 className="text-lg font-semibold text-primary">Full Stack Week</h1>
      <Button size="icon" variant="outline">
        <ShoppingCart />
      </Button>
    </Card>
  );
};

export default Header;
