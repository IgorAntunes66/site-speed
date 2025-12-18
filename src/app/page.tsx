import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import { Compass, Dot, Link } from 'lucide-react';
import { ChevronDown } from "lucide-react";
import { Zap } from 'lucide-react';
import Card from "@/components/card";
import LogoInterativo from "@/components/logoInterativo";

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden w-full flex h-screen pt-28 pb-20 md:pt-0 md:pb-0 md:items-center md:justify-start bg-black bg-[url('/malha.svg')]">
        <div className="absolute md:top-[25%] md:left-[25%] md:w-[500px] md:h-[500px] bg-blue-600/40 rounded-full blur-[120px] mix-blend-screen opacity-20"></div> {/* Bola azul de fundo*/}
        <div className="absolute md:top-[35%] md:left-[50%] md:w-[500px] md:h-[500px] bg-red-600/40 rounded-full blur-[120px] mix-blend-screen opacity-20"></div> {/* Bola vermelha de fundo*/}
        <Navbar />
        <div className="relative md:left-34 md:justify-start md:w-[400px] justify-start gap-y-6 max-w-2xl px-8 md:px-0 z-10">
          <div className="flex items-center justify-center bg-[#363636]/30 border border-[#353535] w-[210px] h-[26px] pr-2 rounded-full">
            <Dot className="text-red-600 w-[38px] h-[38px]" />
            <p className="text-[#717171] text-[12px]">TECNOLOGIA & ESTRATEGIA</p>
          </div>
          <h1 className="text-start font-chakra-petch text-3xl md:text-7xl font-bold text-white pb-4 pt-4">
            MAIS QUE <br />VELOCIDADE, <span className="font-bold text-7xl text-[#0319FE] [text-shadow:0_0_15px_rgb(0_0_255/0.6),0_0_20px_rgb(0_0_255/0.5)]">DIREÇÃO</span>
          </h1>
          <p className="text-[#7b7b7b] text-xl text-start pb-6">
            Ecosistema de soluções em TI. Conectando tecnologia avançada, pessoas e resultados precisos.
          </p>
          <Button
            className="absolute md:bottom-[-55px] w-auto md:w-[240px] md:h-[50px] h-auto text-[16px] font-semibold text-white rounded-sm bg-linear-to-r from-[#000593] to-[#720076] hover:from-[#85005b] hover:to-[#bc1900] transition-transform duration-200 hover:-translate-y-2 hover:shadow-[#ce0064] hover:shadow-[0_0_15px_#ce0064]"
          >
            Conheça nossas soluções
          </Button>
        </div>
        <ChevronDown className="absolute left-1/2 w-[30px] h-[30px] bottom-8 text-[#747474] animate-bounce" />
        {/* <div className="opacity-20">
          <img src="/rosadosventos.svg" className="blur-md" alt="" className="absolute right-86 bottom-26 w-[800px] h-[800px] opacity-40 z-0" />
          <LogoInterativo className="absolute right-160 bottom-76 w-[200px] h-[400px] opacity-80 z-10" />
        </div> */}
      </section >
      <section className="flex flex-col items-center bg-[#eeeeee] h-full">
        <div className="flex flex-col items-center mt-20 h-full w-[700px]">
          <p className="flex text-[#ff0000] font-bold text-sm tracking-widest mb-2">EVOLUÇÃO DA MARCA</p>
          <p className="flex font-bold text-4xl font-chakra-petch mb-6">O clássico raio agora é uma corrente.</p>
          <p className="flex text-center font-semibold text-gray-600 text-lg">Unimos a agilidade que você ja conhece com a segurança que sua empresa precisa. O novo símbolo representa a fusão entre velocidade e direção estratégica.</p>
        </div>
        <div className="flex flex-row gap-10">
          <Card icon={Zap} title="Agilidade (Speed)" description="Respostas rápidas e performance otimizada. A energia que move o seu negócio para frente sem interrupções." iconColor="#8b0000" borderColor="#d10000" iconBgColor="#f7aaa3" hoverIconBgColor="#ff0008" />
          <Card icon={Compass} title="Direção (Estratégia)" description="Tecnologia com propósito. Guiamos sua infraestrutura com a precisão de uma bússola corporativa." iconColor="#000593" borderColor="#000593" iconBgColor="#cfd9fa" hoverIconBgColor="#0d00ff" />
          <Card icon={Link} title="Conexão (Elos)" description="Parceria sólida. Tornamo-nos um elo vital do seu negócio, integrando pessoas e tecnologia." iconColor="#000000" borderColor="#000000" iconBgColor="#cccdcf" hoverIconBgColor="#000000" />
        </div>
      </section >
    </div >
  );
}
