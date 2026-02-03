"use client";
import Image from "next/image";
import { Stethoscope, Heart, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white relative overflow-hidden">
      
      {/* --- BORBOLETAS DECORATIVAS DE FUNDO MAIS VISÍVEIS --- */}
      
      {/* Borboleta Superior Esquerda - Aumentada opacidade e removido blur */}
      <div className="absolute top-[5%] left-[-2%] opacity-40 animate-float z-0">
        <Image 
          src="/borboleta-semfundo.png" 
          alt="Decor" 
          width={250} // Aumentada um pouco
          height={250} 
          className="rotate-[-15deg] drop-shadow-sm" 
        />
      </div>

      {/* Borboleta Inferior Direita - Mais nítida e vibrante */}
      <div className="absolute bottom-[10%] right-[2%] opacity-30 animate-float z-0" style={{ animationDelay: '2.5s' }}>
        <Image 
          src="/borboleta-semfundo.png" 
          alt="Decor" 
          width={220} 
          height={220} 
          className="rotate-[25deg] drop-shadow-md" 
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Lado Esquerdo: Imagem da Dra. Daniela */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[320px] md:max-w-[400px]">
              
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

              {/* Borboleta que "pousa" na foto - Opacidade total para destaque */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 md:w-36 md:h-36 opacity-100 animate-float-slow z-20 rotate-[20deg] drop-shadow-xl">
                <Image src="/borboleta-semfundo.png" alt="Borboleta Decorativa" fill className="object-contain" />
              </div>

              {/* Selo de Experiência SUS */}
              <div className="absolute -top-6 -left-6 md:-top-8 md:-left-8 bg-brand-gold p-4 rounded-full shadow-lg z-20 animate-pulse-subtle">
                  <Stethoscope className="text-white w-6 h-6 md:w-8 md:h-8" />
              </div>

            </div>
          </div>

          {/* Lado Direito: Texto */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <div className="h-[1px] w-8 bg-brand-gold"></div>
              <span className="text-brand-gold uppercase tracking-[0.2em] text-[10px] font-bold font-sans">
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

            <div className="flex justify-center lg:justify-start">
               <div className="w-10 h-10 opacity-60 rotate-12 animate-pulse">
                  <Image src="/borboleta-semfundo.png" alt="icon" width={40} height={40} />
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}