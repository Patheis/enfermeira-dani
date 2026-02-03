"use client";
import Image from "next/image";
import { Stethoscope, Heart, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Lado Esquerdo: Imagem da Dra. Daniela com Moldura Elegante */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[320px] md:max-w-[400px]">
              {/* Moldura de Círculo Incompleto ou Retângulo Arredondado */}
              <div className="relative z-10 aspect-[5/6] rounded-[3rem] border-[6px] md:border-[8px] border-brand-rose/20 p-2 shadow-xl bg-white/10 overflow-hidden">
                <Image
                  src="/dani-about.jpg"
                  alt="Dra. Daniela Furtado em sua Clínica"
                  fill
                  className="object-cover rounded-[2.5rem] transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>

              {/* Detalhe da Borboleta Flutuante */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 md:w-32 md:h-32 opacity-15 animate-float-slow -z-10 rotate-[20deg]">
                <Image src="/borboleta.png" alt="Borboleta Decorativa" fill className="object-contain" />
              </div>

              {/* Selo de Experiência SUS */}
              <div className="absolute -top-6 -left-6 md:-top-8 md:-left-8 bg-brand-gold p-4 rounded-full shadow-lg z-20 animate-pulse-subtle">
                  <Stethoscope className="text-white w-6 h-6 md:w-8 md:h-8" />
              </div>

            </div>
          </div>

          {/* Lado Direito: Texto de Apresentação */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <div className="h-[1px] w-8 bg-brand-gold"></div>
              <span className="text-brand-gold uppercase tracking-[0.2em] text-[10px] font-bold">
                Sobre a Dra. Daniela Furtado
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-brand-dark leading-tight mb-6">
              Experiência que Transforma, <br />
              <span className="italic text-brand-gold font-normal">Cuidado que Renova</span>
            </h2>

            <p className="text-brand-dark/70 font-sans text-sm md:text-base leading-relaxed mb-6 max-w-xl lg:max-w-none mx-auto lg:mx-0">
              Com uma sólida trajetória na área da saúde, Dra. Daniela Furtado traz em sua bagagem a experiência e a humanidade adquiridas em anos de dedicação ao Sistema Único de Saúde (SUS). Essa vivência profunda aprimorou seu olhar clínico e sua capacidade de cuidar de cada paciente de forma integral e personalizada.
            </p>

            <p className="text-brand-dark/70 font-sans text-sm md:text-base leading-relaxed mb-8 max-w-xl lg:max-w-none mx-auto lg:mx-0">
              Hoje, como Enfermeira Esteta, ela une a excelência técnica à sensibilidade para realçar a beleza natural de cada pessoa. Não se trata apenas de procedimentos, mas de um acolhimento que reflete sua paixão pela saúde e bem-estar. Confie em uma profissional de peso, cujo cuidado é tão autêntico quanto os resultados que você busca.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}