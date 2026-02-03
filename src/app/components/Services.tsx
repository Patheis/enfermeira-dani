"use client";
import Image from "next/image";
import Link from "next/link";

const procedimentos = [
  { title: "Botox", slug: "botox", desc: "Suavização de linhas de expressão para um olhar descansado.", icon: "/icones/botox.png" },
  { title: "Bioestimulador de Colágeno", slug: "bioestimuladores", desc: "Recupere a firmeza e sustentação natural da sua pele.", icon: "/icones/colageno.png" },
  { title: "Preenchimento Labial & Facial", slug: "preenchimento", desc: "Harmonização e volume com naturalidade absoluta.", icon: "/icones/preenchimento.png" },
  { title: "Hidrolipoclasia", slug: "hidrolipoclasia", desc: "Tratamento focado na redução de gordura localizada.", icon: "/icones/corpo.png" },
  { title: "Lipo Enzimática", slug: "lipo-enzimatica", desc: "Contorno corporal através de enzimas específicas.", icon: "/icones/enzimas.png" },
  { title: "Enzima Capilar", slug: "enzima-capilar", desc: "Estímulo ao crescimento e fortalecimento dos fios.", icon: "/icones/capilar.png" },
  { title: "Skinbooster", slug: "skinbooster", desc: "Hidratação profunda que devolve o viço e brilho à pele.", icon: "/icones/skin.png" },
  { title: "Microagulhamento", slug: "microagulhamento", desc: "Indução de colágeno para tratar cicatrizes e poros.", icon: "/icones/micro.png" },
  { title: "Peeling Ultrassônico", slug: "peeling-ultrassonico", desc: "Limpeza profunda e renovação da textura da pele.", icon: "/icones/peeling1.png" },
  { title: "Peeling Químico", slug: "peeling-quimico", desc: "Tratamento para manchas e rejuvenescimento facial.", icon: "/icones/peeling2.png" },
  { title: "Peeling de Diamante", slug: "peeling-diamante", desc: "Esfoliação mecânica para uma pele macia e uniforme.", icon: "/icones/diamante.png" },
  { title: "Led Terapia", slug: "led-terapia", desc: "Luzes terapêuticas para cicatrização e rejuvenescimento.", icon: "/icones/led.png" },
  { title: "Alta Frequência", slug: "alta-frequencia", desc: "Ação bactericida e oxigenante para a saúde da pele.", icon: "/icones/frequencia.png" },
  { title: "Ultrassom", slug: "ultrassom", desc: "Tecnologia para redução de medidas e celulite.", icon: "/icones/ultrassom.png" },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-4">
            Rituais de <span className="italic text-brand-gold">Metamorfose</span>
          </h2>
          <p className="text-brand-gold font-sans text-[10px] tracking-[0.4em] uppercase font-bold">
            Tratamentos Personalizados e Individualizados
          </p>
        </div>

        {/* --- FILA DE CARDS COM SCROLL HORIZONTAL --- */}
        <div className="flex overflow-x-auto pb-12 gap-6 snap-x snap-mandatory scrollbar-hide">
          {procedimentos.map((item, index) => (
            <div key={index} className="snap-center shrink-0 w-[280px] md:w-[320px]">
               <CardService item={item} />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="btn-gold px-12 py-5 text-[10px] font-bold tracking-[0.3em] uppercase shadow-2xl hover:scale-105 transition-all">
            <a href="/#agendamento">Agendar minha Avaliação 🦋</a>
          </button>
        </div>
      </div>
    </section>
  );
}

function CardService({ item }: { item: any }) {
  return (
    <Link 
      href={`/procedimentos/${item.slug}`}
      className="group flex flex-col bg-[#fcf8f6] p-8 rounded-[2.5rem] border border-brand-rose/10 hover:border-brand-gold/40 transition-all duration-500 hover:shadow-xl h-full min-h-[400px]"
    >
      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-brand-gold transition-all duration-500">
        <div className="relative w-7 h-7">
          <Image 
            src={item.icon} 
            alt={item.title} 
            fill 
            className="object-contain group-hover:brightness-0 group-hover:invert transition-all duration-500"
          />
        </div>
      </div>
      
      <h3 className="font-serif text-xl text-brand-dark mb-4 group-hover:text-brand-gold transition-colors leading-tight">
        {item.title}
      </h3>
      
      <p className="text-brand-dark/60 text-xs leading-relaxed mb-8 flex-grow">
        {item.desc}
      </p>
      
      <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-brand-gold mt-auto">
        <span>Explorar Metamorfose</span>
        <div className="relative w-19 h-19 group-hover:translate-x-1 transition-transform">
          <Image src="/borboleta-semfundo.png" alt="seta" fill className="object-contain" />
        </div>
      </div>
    </Link>
  );
}