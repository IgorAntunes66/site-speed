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

const headerStyles = cva("flex items-center justify-around px-56 py-2");
const navLinkStyle = cva(
  "transition-transform duration-200 text-[14px] font-medium hover:scale-115 text-gray-300 hover:font-bold hover:text-white inline-block",
);
const buttonStyle = cva(
  "bg-white text-gray-900 shadow-2xl transition-transform duration-200 hover:scale-105 hover:bg-gray-100",
);

export default function Navbar() {
  return (
    <div className="bg-[#02022E]">
      <header className={headerStyles()}>
        <div className="">
          <Image
            src="/logo_completa_branca.svg"
            alt="Logo"
            className="w-58 h-auto"
            width={500}
            height={500}
          />
        </div>
        <NavigationMenu>
          <NavigationMenuList className="gap-x-16">
            <NavigationMenuItem>
              <NavigationMenuLink href="/" className={navLinkStyle()}>
                INÍCIO
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#sobre" className={navLinkStyle()}>
                SOBRE
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#aplicativos"
                className={navLinkStyle()}
              >
                APLICATIVOS
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#servicos" className={navLinkStyle()}>
                SERVIÇOS
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#clientes" className={navLinkStyle()}>
                CLIENTES
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#contato" className={navLinkStyle()}>
                CONTATO
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
