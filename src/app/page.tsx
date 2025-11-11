import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import HeroBubbles from "@/components/heroBubbles"

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden flex h-auto md:h-[600px] pt-28 pb-12 md:pt-0 md:pb-0 md:items-center md:justify-center bg-linear-to-r from-[#020246] to-[#080868]">
        <Navbar />
        <HeroBubbles/>
        <div className="flex flex-wrap justify-center gap-y-6 max-w-4xl px-8 md:px-0 relative z-10">
          <h1 className="text-center font-serif text-3xl md:text-6xl font-bold text-white">
            O SISTEMA DE GESTÃO QUE IMPULSIONA O SEU NEGÓCIO
          </h1>
          <p className="text-white text-center">
            Deixe a complexidade para nós. Nossa plataforma oferece uma solução
            administrativa completa: desde o controle de estoque e frota até a
            gestão financeira e emissão de notas fiscais com TEF, otimizando seu
            tempo e seus resultados.
          </p>
          <Button className="transition-transform duration-200 text-white bg-transparent border-2 h-15 w-40 rounded-full shadow-md shadow-indigo-500/30 hover:scale-102 hover:bg-white hover:text-[#020246]">Quero conhecer</Button>
        </div>
      </section>
      <section id="sobre">

      </section>
    </div>
  );
}
