"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BotoxPage() {
  const images = [
    "/resultados/botox.jpg",
    "/resultados/botox-2.jpg",
    "/resultados/botox-3.jpg",
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <main className="min-h-screen bg-[#fcf8f6]">
      <Navbar />
      
      <section className="pt-32 md:pt-40 pb-20 px-6 max-w-5xl mx-auto">
        {/* Título Centralizado */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-brand-gold uppercase tracking-[0.4em] text-[10px] mb-4 font-sans font-bold">
            Galeria de Resultados
          </p>
          <h1 className="text-3xl md:text-5xl font-serif text-brand-dark uppercase tracking-tight">
            Metamorfose: <span className="text-brand-gold font-normal">Botox</span>
          </h1>
          
          {/* Borboleta Oficial substituindo o emoji */}
          <div className="flex justify-center mt-6">
            <div className="relative w-10 h-10 md:w-12 md:h-12 animate-float">
               <Image 
                src="/borboleta-semfundo.png" 
                alt="Borboleta Decorativa" 
                fill 
                className="object-contain grayscale-[0.2] opacity-100"
               />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          
          {/* Lado Esquerdo: Carrossel na Moldura MENOR */}
          <div className="relative group max-w-sm mx-auto lg:max-w-none w-full">
            <div className="bg-white p-3 md:p-4 rounded-[2.5rem] shadow-xl border border-brand-rose/10 relative overflow-hidden">
               
               <div className="absolute top-6 left-6 bg-brand-gold/90 backdrop-blur-sm text-white text-[8px] px-3 py-1 rounded-full uppercase font-bold z-20 tracking-widest shadow-lg">
                 Resultado Real
               </div>

               {/* Área do Carrossel - Reduzido para h-[400px] ou h-[500px] para ser mais suave */}
               <div className="aspect-[4/5] relative rounded-[1.8rem] overflow-hidden border border-brand-nude">
                  <Image 
                    src={images[currentIndex]} 
                    alt={`Resultado Botox ${currentIndex + 1}`}
                    fill 
                    className="object-cover transition-all duration-1000 ease-in-out"
                    priority
                  />

                  {/* Setas de Navegação - Mais discretas */}
                  <button 
                    onClick={prevSlide}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-1.5 rounded-full shadow-md z-30 transition-all opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
                  >
                    <ChevronLeft className="text-brand-dark" size={18} />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-1.5 rounded-full shadow-md z-30 transition-all opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
                  >
                    <ChevronRight className="text-brand-dark" size={18} />
                  </button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-30">
                    {images.map((_, idx) => (
                      <div 
                        key={idx}
                        className={`h-1 w-1 rounded-full transition-all ${currentIndex === idx ? 'bg-brand-gold w-3' : 'bg-white/60'}`}
                      />
                    ))}
                  </div>
               </div>
            </div>

            {/* Borboleta decorativa atrás da moldura - Usando imagem oficial */}
            <div className="absolute -bottom-6 -right-6 z-0 opacity-10 hidden md:block">
               <div className="relative w-32 h-32 rotate-[15deg]">
                  <Image src="/borboleta.png" alt="Fundo" fill className="object-contain" />
               </div>
            </div>
          </div>

          {/* Lado Direito: Conteúdo */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-serif text-brand-dark tracking-wide">A Ciência por trás da <br/><span className="italic text-brand-gold">Suavização</span></h2>
              <div className="h-0.5 w-10 bg-brand-gold/30"></div>
            </div>

            <p className="text-brand-dark/70 leading-relaxed font-sans text-sm md:text-base">
              O tratamento com Toxina Botulínica na clínica da Dra. Daniela Furtado não é sobre paralisar, mas sim sobre <strong>devolver o descanso</strong> à sua expressão. <br/><br/>
              Cada ponto é planejado individualmente para suavizar linhas sem apagar sua história, mantendo a naturalidade que sua essência exige.
            </p>

            <div className="bg-brand-nude/10 p-5 rounded-xl border-l-2 border-brand-gold italic text-brand-dark/80 text-sm leading-relaxed shadow-sm">
              "Buscamos uma metamorfose elegante, onde o resultado principal é a sua confiança renovada."
            </div>

            <button className="btn-gold w-full py-4 text-[10px] font-bold tracking-[0.3em] uppercase shadow-xl hover:scale-[1.01] active:scale-[0.98] transition-all">
              <a href="/#agendamento">Agendar minha Avaliação 🦋</a>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}