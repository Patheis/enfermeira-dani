"use client";
import Image from "next/image";
import { MapPin, Phone, Award, Heart } from "lucide-react";

export default function Map() {
  return (
    <section id="localizacao" className="py-24 bg-[#fcf8f6] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Lado Esquerdo: Identidade e Contato */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-brand-gold">
                <Heart size={16} className="fill-brand-gold" />
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Cuidado & Dedicação</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-dark uppercase leading-tight">
                Sua Essência em <br/>
                <span className="italic text-brand-gold font-normal">Boas Mãos</span>
              </h2>
              <p className="text-brand-dark/70 font-sans text-sm leading-relaxed max-w-md">
                Especialista em cuidar de você com carinho, técnica e dedicação! Cuidar da beleza é, antes de tudo, um ato de amor-próprio. Aqui, cada paciente é único e recebe um atendimento personalizado e humanizado.
              </p>
            </div>

            {/* Cards de Informação Práticos */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm border border-brand-rose/20 shrink-0">
                  <MapPin className="text-brand-gold w-5 h-5" />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest font-bold text-brand-gold mb-1">Localização</p>
                  <p className="text-brand-dark text-[13px] leading-tight">
                    Rua Antônio Cristovam, 490<br/>
                    Centro, Mococa - SP
                  </p>
                </div>
              </div>

            </div>

            {/* Card Profissional com Logo Coren */}
            <div className="bg-white p-6 rounded-[2.5rem] border border-brand-rose/10 shadow-xl max-w-sm flex items-center gap-5 group hover:border-brand-gold/30 transition-all">
              <div className="w-16 h-16 relative shrink-0">
                <Image 
                  src="/enfermeira-dani/coren-logo.png" 
                  alt="Logo Coren" 
                  fill 
                  className="object-contain"
                />
              </div>
              <div>
                <h4 className="font-serif text-brand-dark text-lg leading-tight italic">Dra. Daniela Furtado</h4>
                <div className="flex flex-col gap-0.5 mt-1">
                  <div className="flex items-center gap-2 text-brand-gold">
                    <Award size={12} />
                    <p className="text-[10px] uppercase tracking-widest font-bold font-sans">Enfermeira Esteta</p>
                  </div>
                  <p className="text-[10px] text-brand-dark/40 font-bold uppercase tracking-tighter">COREN-SP 228367</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito: Mapa com Estilo Limpo */}
          <div className="relative">
            <div className="bg-white p-3 md:p-4 rounded-[3rem] shadow-2xl border border-brand-rose/5 overflow-hidden">
              <div className="aspect-square w-full rounded-[2.2rem] overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-1000">
                <iframe 
                  src="https://www.google.com/maps/place/4U+For+You+-+Language+School/@-21.4649873,-47.0073173,19.56z/data=!4m6!3m5!1s0x94b7b9a75852175d:0xd1a807533b79b450!8m2!3d-21.4650202!4d-47.0074161!16s%2Fg%2F11qg45tt8q?hl=pt-PT&entry=ttu&g_ep=EgoyMDI2MDIwMS4wIKXMDSoASAFQAw%3D%3D" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                />
              </div>
            </div>
            
            {/* Borboleta flutuando atrás do mapa */}
            <div className="absolute -bottom-8 -left-8 w-24 h-24 opacity-10 -z-10 rotate-[-15deg]">
              <Image src="/enfermeira-dani/borboleta.png" alt="decor" fill className="object-contain" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}