"use client";

import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  PercentIcon,
  ShoppingCart,
} from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./button";
import { Card } from "./card";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./sheet";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Separator } from "./separator";
import Link from "next/link";

const Header = () => {
  const { status, data } = useSession();

  const handleLoginClick = async () => {
    await signIn();
  };

  const handleLogoutClick = async () => {
    await signOut();
  };

  return (
    <Card className="flex items-center justify-between rounded-none p-8">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader className="text-left font-bold">Menu</SheetHeader>

          <div className="mt-8 flex flex-col gap-4">
            {status === "authenticated" && data.user && (
              <div>
                <div className="flex gap-2 pb-4">
                  <Avatar>
                    <AvatarFallback>
                      {data.user.name?.[0].toLowerCase()}
                    </AvatarFallback>
                    {data.user.image && <AvatarImage src={data.user.image} />}
                  </Avatar>
                  <div className="gap 2 flex flex-col">
                    <p className="font-semibold">{data.user.name}</p>
                    <span className="text-sm font-bold text-[#8162FF]">
                      Boas compras!
                    </span>
                  </div>
                </div>
                <Separator />
              </div>
            )}

            {status === "unauthenticated" ? (
              <Button
                className="w-full justify-start gap-2"
                variant="outline"
                onClick={handleLoginClick}
              >
                <LogInIcon size={16} />
                Fazer Login
              </Button>
            ) : (
              <Button
                className="w-full justify-start gap-2 text-red-400"
                variant="outline"
                onClick={handleLogoutClick}
              >
                <LogOutIcon size={16} />
                Fazer Logout
              </Button>
            )}

            <SheetClose asChild>
              <Link href="/">
                <Button
                  className="w-full justify-start gap-2"
                  variant="outline"
                >
                  <HomeIcon size={16} />
                  Início
                </Button>
              </Link>
            </SheetClose>

            <Button className="w-full justify-start gap-2" variant="outline">
              <PercentIcon size={16} />
              Ofertas
            </Button>

            <SheetClose asChild>
              <Link href="/catalog">
                <Button
                  className="w-full justify-start gap-2"
                  variant="outline"
                >
                  <ListOrderedIcon size={16} />
                  Catálogo
                </Button>
              </Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>

      <Link href="/">
        <h1 className="text-lg font-semibold">
          <span className="text-[#8162FF]">Full Stack Week</span> Store
        </h1>
      </Link>

      <Button size="icon" variant="outline">
        <ShoppingCart />
      </Button>
    </Card>
  );
};

export default Header;
