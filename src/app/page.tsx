import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <section className="relative flex h-[600px] items-center justify-center bg-[#02022E]">
        <Navbar />
        <div className="flex flex-wrap justify-center gap-y-6">
          <h1 className="text-center text-6xl font-bold text-white">
            O SISTEMA DE GESTÃO QUE IMPULSIONA O SEU NEGÓCIO
          </h1>
          <p className="text-white">
            Deixe a complexidade para nós. Nossa plataforma oferece uma solução
            administrativa completa: desde o controle de estoque e frota até a
            gestão financeira e emissão de notas fiscais com TEF, otimizando seu
            tempo e seus resultados.
          </p>
        </div>
      </section>
    </div>
  );
}
