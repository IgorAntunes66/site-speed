import {
  NavigationMenu,
  //NavigationMenuContent,
  //NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  //NavigationMenuTrigger,
  //NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import {Button} from "@/components/ui/button"
import Image from "next/image"

export default function Navbar() {
  const navLinkStyle = "transition-transform duration-200 text-[14px] hover:scale-115 text-gray-300 hover:font-medium hover:text-white inline-block"
  return (
    <div className="bg-[#02022E]">
      <header className="flex justify-around items-center px-56 py-2">
        <div className="">
          <Image src="/logo_completa_branca.svg" alt="Logo" className="w-58 h-auto " width={0} height={0}/>
        </div>
        <NavigationMenu>
          <NavigationMenuList className="gap-x-16">
            <NavigationMenuItem>
              <NavigationMenuLink href="/" className={navLinkStyle}>INÍCIO</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#sobre" className={navLinkStyle}>SOBRE</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#aplicativos" className={navLinkStyle}>APLICATIVOS</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#servicos" className={navLinkStyle}>SERVIÇOS</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#clientes" className={navLinkStyle}>CLIENTES</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#contato" className={navLinkStyle}>CONTATO</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div>
          <Button className="transition-transform duration-200 hover:scale-105 bg-white text-gray-900 shadow-2xl hover:bg-gray-100">Login</Button>
        </div>
      </header>
    </div>
  )
}