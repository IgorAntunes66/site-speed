import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Dot } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden w-full flex h-screen md:h-screen pt-28 pb-20 md:pt-0 md:pb-0 md:items-center md:justify-start bg-black bg-[url('/malha.svg')]">
        <div className="absolute md:top-[25%] md:left-[25%] md:w-[500px] md:h-[500px] bg-blue-600/40 rounded-full blur-[120px] mix-blend-screen opacity-20"></div> {/* Bola azul de fundo*/}
        <div className="absolute md:top-[35%] md:left-[50%] md:w-[500px] md:h-[500px] bg-red-600/40 rounded-full blur-[120px] mix-blend-screen opacity-20"></div> {/* Bola vermelha de fundo*/}
        <Navbar />
        <div className="relative md:left-34 md:justify-start md:w-[400px] justify-start gap-y-6 max-w-2xl px-8 md:px-0 z-10">

          <div className="flex items-center justify-center bg-[#363636]/30 border border-[#353535] w-[210px] h-[26px] pr-2 rounded-full">
            <Dot className="text-red-600 w-[38px] h-[38px]" />
            <p className="text-white text-[12px]">TECNOLOGIA & ESTRATEGIA</p>
          </div>
          <h1 className="text-start font-chakra-petch text-3xl md:text-7xl font-bold text-white pb-4 pt-4">
            MAIS QUE <br />VELOCIDADE, <span className="font-bold text-7xl text-blue-700 [text-shadow:0_0_15px_rgb(0_0_255/0.6),0_0_20px_rgb(0_0_255/0.5)]">DIREÇÃO</span>
          </h1>
          <p className="text-[#7b7b7b] text-xl text-start pb-6">
            Ecosistema de soluções em TI. Conectando tecnologia avançada, pessoas e resultados precisos.
          </p>
          <Button
            className="absolute md:bottom-[-65px] w-auto md:w-[240px] md:h-[50px] h-auto text-[16px] font-semibold text-white rounded-sm bg-linear-to-r from-[#000593] to-[#720076] hover:from-[#85005b] hover:to-[#bc1900] transition-transform duration-500 hover:-translate-y-2 hover:shadow-[#ce0064] hover:shadow-[0_0_15px_#ce0064]"
          >
            Conheça nossas soluções
          </Button>
        </div>
      </section >
    </div >
  );
}
