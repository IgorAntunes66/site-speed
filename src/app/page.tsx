import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import HeroBubbles from "@/components/heroBubbles"
import Waves from "@/components/waves";

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden flex h-auto md:h-[600px] pt-28 pb-12 md:pt-0 md:pb-0 md:items-center md:justify-center bg-radial from-[#272727] to-[#060606]">
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
      <section id="sobre" className="relative h-auto md:h-[600px] pl-6 pr-6 mt-[-70px] z-50">
        <Waves/>
        <div className="flex flex-col h-[600px] pb-18 pt-20">
          <h1 className="text-sm text-center scroll-m-20 border-b pb-2 font-semibold tracking-tight first:mt-0">
            GESTÃO INTELIGENTE QUE GERA RESULTADOS REAIS
          </h1>
          <p className="text-sm pt-6 text-center">Somos a Speed System e, desde 1994, transformamos dados em resultados. Nosso principal produto,
            o SiFrA (Sistema Financeiro Administrativo), é uma solução de gestão completa (ERP) que atende todas as pontas do seu negócio. 
            Ele centraliza suas operações mais importantes, permitindo o gerenciamento do caixa diário, a emissão de notas fiscais, o controle total do estoque,
              a geração do EFD contábil, além de ter integração para recebimentos com o TEF (Transferencia eletronica de fundos). Com mais de 50 relatórios, o SiFrA coloca o poder 
              de decisão nas suas mãos, com a confiança de um sistema validado por décadas de mercado.</p>
        </div>
      </section>
    </div>
  );
}
