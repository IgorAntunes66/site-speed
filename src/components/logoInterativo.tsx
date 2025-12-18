"use client";

import { useEffect, useState, useRef } from "react";

export default function LogoInterativo({ className }: { className?: string }) {
    const [rotation, setRotation] = useState(0);
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (!svgRef.current) return;

            const rect = svgRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const deltaX = event.clientX - centerX;
            const deltaY = event.clientY - centerY;

            // 1. Calcula o ângulo cru (-180 a 180)
            const rawAngle = Math.atan2(deltaY, deltaX) * (180 / Math.PI) + 90;

            // 2. A MÁGICA ACONTECE AQUI (Set State com callback)
            setRotation((prevRotation) => {
                // Calculamos a diferença entre o ângulo novo e o que já está na tela
                let delta = rawAngle - prevRotation;

                // Ajuste de "volta ao mundo":
                // O while garante que a diferença nunca seja maior que 180 nem menor que -180.
                // Isso remove o "salto" que causava a sambada.

                // Se a diferença for muito grande positiva (ex: 350 graus), subtrai 360
                while (delta > 180) delta -= 360;

                // Se a diferença for muito grande negativa (ex: -350 graus), soma 360
                while (delta < -180) delta += 360;

                // O novo ângulo é o anterior + a pequena diferença
                return prevRotation + delta;
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <svg
            ref={svgRef}
            id="Camada_2"
            data-name="Camada 2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 93.48 240.74"
            className={className}
            style={{ overflow: "visible" }}
        >
            <defs>
                <linearGradient
                    id="gradienteRed"
                    x1="66.25"
                    y1="129.66"
                    x2="4.88"
                    y2="23.37"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#5a0300" />
                    <stop offset=".03" stopColor="#610200" />
                    <stop offset=".25" stopColor="#8a0100" />
                    <stop offset=".45" stopColor="#aa0100" />
                    <stop offset=".65" stopColor="#c10000" />
                    <stop offset=".84" stopColor="#cf0000" />
                    <stop offset="1" stopColor="#d40000" />
                </linearGradient>

                <linearGradient
                    id="gradienteBlue"
                    x1="84.18"
                    y1="103.37"
                    x2="13.97"
                    y2="224.98"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#00006f" />
                    <stop offset=".12" stopColor="#00048c" />
                    <stop offset=".31" stopColor="#000bb5" />
                    <stop offset=".5" stopColor="#0010d5" />
                    <stop offset=".68" stopColor="#0014ec" />
                    <stop offset=".85" stopColor="#0016fa" />
                    <stop offset="1" stopColor="#0017ff" />
                </linearGradient>
            </defs>

            {/* Grupo Pai com Rotação Corrigida */}
            <g
                id="Camada_1-2"
                data-name="Camada 1"
                style={{
                    transform: `rotate(${rotation}deg)`,
                    transformBox: "fill-box",
                    transformOrigin: "center center",
                    transition: "transform 0.1s ease-out",
                    // willChange avisa o navegador para otimizar a renderização dessa propriedade
                    willChange: "transform"
                }}
            >
                <path
                    fill="url(#gradienteRed)"
                    d="M48.87,137.77H13.36c-4.12,0-7.94-2.01-10.49-5.51-2.85-3.93-3.64-9.1-2.1-13.82L36.28,9.65C38.81,1.9,45.39-.7,50.78.16c5.51.88,11.44,5.74,11.44,14.34v108.79c0,7.99-5.99,14.49-13.35,14.49ZM48.76,6.35c-2.44,0-5.16,1.36-6.43,5.27L6.82,120.42c-.91,2.79-.46,5.82,1.2,8.11.78,1.08,2.52,2.89,5.34,2.89h35.51c3.86,0,7-3.65,7-8.13V14.49c0-4.9-3.05-7.58-6.08-8.06-.33-.05-.68-.08-1.03-.08Z"
                />
                <path
                    fill="url(#gradienteBlue)"
                    d="M90.61,108.48c-2.54-3.5-6.36-5.51-10.49-5.51h-17.9v6.35h17.9c2.82,0,4.56,1.81,5.34,2.89,1.66,2.29,2.11,5.32,1.2,8.11l-35.51,108.79c-1.46,4.47-4.82,5.61-7.46,5.19-3.03-.48-6.08-3.16-6.08-8.06v-108.79c0-4.48,3.14-8.13,7-8.13h11.25v-6.35h-11.25c-7.36,0-13.35,6.5-13.35,14.49v108.79c0,8.6,5.93,13.46,11.44,14.34.65.1,1.32.16,1.99.16,4.93,0,10.29-2.83,12.51-9.65l35.51-108.79c1.54-4.72.76-9.88-2.1-13.82Z"
                />
            </g>
        </svg>
    );
}