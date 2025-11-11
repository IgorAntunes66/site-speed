import { cva } from "class-variance-authority";

const aStyle = cva(
  "text-white"
)

export default function MobileNavLinks() {
  return (
    <div className="flex flex-col gap-y-5">
      <a href="./" className={aStyle()}>Inicio</a>
      <a href="#sobre" className={aStyle()}>Sobre</a>
      <a href="#aplicativos" className={aStyle()}>Aplicativos</a>
      <a href="#servicos" className={aStyle()}>Serviços</a>
      <a href="#clientes" className={aStyle()}>Clientes</a>
      <a href="#contato" className={aStyle()}>Contato</a>
    </div>
  )
}