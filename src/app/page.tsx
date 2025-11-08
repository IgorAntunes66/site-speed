import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <section className="relative flex h-[600px] items-center justify-center bg-gradient-to-r from-[#020246] to-[#080868]">
        <Navbar />
        <div className="flex flex-wrap justify-center gap-y-6 max-w-5xl">
          <h1 className="text-center font-serif text-6xl  font-bold text-white">
            O SISTEMA DE GESTÃO QUE IMPULSIONA O SEU NEGÓCIO
          </h1>
          <p className="text-white text-center">
            Deixe a complexidade para nós. Nossa plataforma oferece uma solução
            administrativa completa: desde o controle de estoque e frota até a
            gestão financeira e emissão de notas fiscais com TEF, otimizando seu
            tempo e seus resultados.
          </p>
          <Button className="transition-transform duration-200 bg-white text-[#080868] h-15 w-40 rounded-full hover:bg-[#02022E] hover:text-white hover:border-2 hover:scale-105">Quero conhecer</Button>
        </div>
      </section>
    </div>
  );
}
