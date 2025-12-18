import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CardProps {
    icon: LucideIcon;
    title: string;
    description: string;

    // Cores Normais
    borderColor?: string;
    iconColor?: string;
    iconBgColor?: string; // Nova prop para o fundo do ícone normal

    // Cores no Hover
    hoverIconColor?: string;   // Cor do ícone ao passar o mouse
    hoverIconBgColor?: string; // Cor do fundo do ícone ao passar o mouse
}

export default function Card({
    icon: Icon,
    title,
    description,
    // Valores padrão (Default)
    borderColor = "#d10000",
    iconColor = "#8b0000",
    iconBgColor = "#fdcfcf",
    hoverIconColor = "#ffffff", // Padrão: ícone fica branco no hover
    hoverIconBgColor = "#d10000" // Padrão: fundo fica da cor da borda no hover
}: CardProps) {

    // Criamos um objeto de estilo estendendo CSSProperties para aceitar variáveis
    const dynamicStyles = {
        borderColor: borderColor,
        '--icon-color': iconColor,
        '--icon-bg': iconBgColor,
        '--hover-icon-color': hoverIconColor,
        '--hover-icon-bg': hoverIconBgColor,
    } as React.CSSProperties;

    return (
        <div className="mt-14 mb-16">
            <div className="group bg-white p-2 w-[450px] h-[250px] shadow-lg/50 rounded-xl hover:-translate-y-2 transition-all duration-300 border-b-4 cursor-pointer" style={dynamicStyles}>
                <div className="flex flex-col items-center justify-center border w-[55px] h-[55px] rounded-md mt-6 ml-6 transition-colors duration-300 bg-[var(--icon-bg)] group-hover:bg-[var(--hover-icon-bg)]">
                    <Icon className="transition-colors duration-300 text-[var(--icon-color)] group-hover:text-[var(--hover-icon-color)]" />
                </div>
                <div className="ml-6 mt-6">
                    <h1 className="font-chakra-petch font-bold text-2xl group-hover:text-gray-900 transition-colors">
                        {title}
                    </h1>
                    <p className="text-gray-600 text-[16px] mt-4">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}