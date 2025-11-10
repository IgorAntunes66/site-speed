import {
  NavigationMenu,
  //NavigationMenuContent,
  //NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  //NavigationMenuTrigger,
  //NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";
import { cva } from "class-variance-authority";
import Image from "next/image";

const headerStyles = cva("flex items-center justify-between px-22 py-2");
const navLinkStyle = cva(
  "transition-transform duration-200 text-[18px] font-medium hover:scale-115 text-gray-300 hover:font-bold hover:text-white inline-block",
);
const buttonStyle = cva(
  "bg-[] border-2 rounded-full border-white text-gray-200 shadow-2xl transition-transform duration-200 hover:scale-105 hover:bg-gray-100 hover:text-[#020246]",
);

export default function Navbar() {
  return (
    <div className="absolute left-0 right-0 top-0 z-9">
      <header className={headerStyles()}>
        <div>
          <Image
            src="/logo_completa_branca.svg"
            alt="Logo"
            className="w-58 h-auto p-4"
            width={500}
            height={500}
          />
        </div>
        <NavigationMenu>
          <NavigationMenuList className="gap-x-8">
            <NavigationMenuItem>
              <NavigationMenuLink href="/" className={navLinkStyle()}>
                Início
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#sobre" className={navLinkStyle()}>
                Sobre
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#aplicativos"
                className={navLinkStyle()}
              >
                Aplicativos
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#servicos" className={navLinkStyle()}>
                Serviços
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#clientes" className={navLinkStyle()}>
                Clientes
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#contato" className={navLinkStyle()}>
                Contato
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div>
          <Button className={buttonStyle()}>Login</Button>
        </div>
      </header>
    </div>
  );
}
