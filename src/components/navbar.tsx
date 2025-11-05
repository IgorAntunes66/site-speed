import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import {Button} from "@/components/ui/button"

export default function Navbar() {
  const navLinkStyle = "transition-transform duration-200 hover:scale-110 text-gray-300 hover:font-medium hover:text-white inline-block"
  return (
    <div className="bg-[#02022E]">
      <header className="flex justify-between items-center px-16 py-6">
        <div>
          <img src="/logo_completa_branca.svg" alt="Logo" className="w-56 h-auto" />
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
              <NavigationMenuLink href="#servicos" className={navLinkStyle}>SERVICOS</NavigationMenuLink>
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
          <Button className="bg-white text-gray-900 shadow-2xl hover:bg-gray-300">Login</Button>
        </div>
      </header>
    </div>
  )
}