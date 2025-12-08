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
import {
  Sheet,
  SheetTrigger,
  SheetContent
} from "./ui/sheet";

import ButtonGradient from "./buttonGradient";
import { Menu } from 'lucide-react';
import MobileNavLinks from "./mobileNavLinks";
import { ReactNode } from "react";

interface MenuItemProps {
  href: string;
  children: ReactNode; //children é qualquer coisa renderizavel pelo react (texto, imagem, etc)
}

const headerStyles = cva("absolute md:fixed flex items-center justify-between px-22 fixed left-0 right-0 top-0 z-50 bg-black backdrop-blur-md border-b border-white/5 h-20 tracking-wide");
const navLinkStyle = cva(
  "group/link relative text-[16px] font-medium text-gray-300 inline-block",
);

const MenuItem = ({ href, children }: MenuItemProps) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink href={href} className={navLinkStyle()}>
        {children}
        <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#670200] transition-all duration-300 group-hover/link:w-full"></span>
      </NavigationMenuLink>
    </NavigationMenuItem>
  )
}

export default function Navbar() {
  return (
    <header className={headerStyles()}>
      <div className="md:hidden relative right-14"> {/* Div para poder ocultar o menu mobile para o desktop*/}
        <Sheet>
          <SheetTrigger>
            <Menu className="text-white" />
          </SheetTrigger>
          <SheetContent side={"left"}>
            <MobileNavLinks />
          </SheetContent>
        </Sheet>
      </div>
      <div className="relative right-6">
        <Image
          src="/logo_completa_branca.svg"
          alt="Logo Speed System"
          className="w-44 h-auto p-4"
          width={500}
          height={500}
        />
      </div>
      <div className="hidden md:flex md:items-center md:justify-center">
        <NavigationMenu>
          <NavigationMenuList className="gap-x-8">
            <MenuItem href="/">Início</MenuItem>
            <MenuItem href="#sobre">Sobre</MenuItem>
            <MenuItem href="#aplicativos">Aplicativos</MenuItem>
            <MenuItem href="#servicos">Suporte</MenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="hidden md:flex">
        <ButtonGradient />
      </div>
    </header >
  );
}