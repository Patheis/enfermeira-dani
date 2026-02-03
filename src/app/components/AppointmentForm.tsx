"use client";
import { useState } from "react";
import Image from "next/image";
import { Send, Calendar, User, MessageSquare, Sparkles } from "lucide-react";

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    nome: "",
    procedimento: "Botox",
    periodo: "Manhã",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // O número da Dra Daniela
    const phone = "5519993794260"; 
    
    const text = `*Pré-Agendamento - Metamorfose* 🦋%0A%0A` +
                  `*Nome:* ${formData.nome}%0A` +
                  `*Procedimento:* ${formData.procedimento}%0A` +
                  `*Período de preferência:* ${formData.periodo}%0A` +
                  `*Dúvida/Descrição:* ${formData.mensagem}`;

    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${text}`;
    window.open(url, "_blank");
  };

  return (
    <section id="agendamento" className="py-24 bg-white relative overflow-hidden">
      
      {/* --- BORBOLETAS DECORATIVAS --- */}
      
      {/* Borboleta Superior Direita */}
      <div className="absolute top-[5%] right-[-5%] md:top-[10%] md:right-[2%] opacity-100 animate-float z-[40]">
        <Image
          src="/enfermeira-dani/borboleta-semfundo.png"
          alt="Borboleta Decorativa"
          width={150}
          height={150}
          className="w-[120px] h-[120px] md:w-[280px] md:h-[280px] rotate-[15deg] drop-shadow-md"
        />
      </div>

      {/* Borboleta Inferior Esquerda */}
      <div className="absolute bottom-[5%] left-[-5%] md:bottom-[10%] md:left-[2%] opacity-100 animate-float z-[40]" style={{ animationDelay: '1.5s' }}>
        <Image
          src="/enfermeira-dani/borboleta-semfundo.png"
          alt="Borboleta Decorativa"
          width={120}
          height={120}
          className="w-[100px] h-[100px] md:w-[220px] md:h-[220px] rotate-[-25deg] drop-shadow-md"
        />
      </div>

      {/* Borboleta Superior Esquerda (Menor/Sutil) */}
      <div className="absolute top-[15%] left-[5%] opacity-40 animate-float z-[40]" style={{ animationDelay: '3s' }}>
        <Image
          src="/enfermeira-dani/borboleta-semfundo.png"
          alt="Borboleta Decorativa"
          width={80}
          height={80}
          className="w-[60px] h-[60px] md:w-[150px] md:h-[150px] rotate-[-15deg] blur-[1px]"
        />
      </div>

      <div className="container mx-auto px-6 max-w-3xl relative z-20">
        <div className="bg-[#fcf8f6] p-8 md:p-12 rounded-[3rem] border border-brand-rose/20 shadow-2xl relative overflow-hidden">
          
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif text-brand-dark mb-2 italic">Pré-Agendamento</h2>
            <p className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">Solicite seu horário de forma simples</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gold" size={18} />
              <input 
                type="text" 
                placeholder="Seu nome completo"
                required
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-brand-rose/20 focus:border-brand-gold outline-none font-sans text-sm transition-all"
                onChange={(e) => setFormData({...formData, nome: e.target.value})}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <Sparkles className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gold" size={18} />
                <select 
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-brand-rose/20 focus:border-brand-gold outline-none font-sans text-sm appearance-none bg-white transition-all"
                  onChange={(e) => setFormData({...formData, procedimento: e.target.value})}
                >
                  <option>Botox</option>
                  <option>Bioestimuladores</option>
                  <option>Preenchimento</option>
                  <option>Lipo Enzimática</option>
                  <option>Skinbooster</option>
                  <option>Outros</option>
                </select>
              </div>

              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gold" size={18} />
                <select 
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-brand-rose/20 focus:border-brand-gold outline-none font-sans text-sm appearance-none bg-white transition-all"
                  onChange={(e) => setFormData({...formData, periodo: e.target.value})}
                >
                  <option>Manhã</option>
                  <option>Tarde</option>
                  <option>Noite</option>
                </select>
              </div>
            </div>

            <div className="relative">
              <MessageSquare className="absolute left-4 top-6 text-brand-gold" size={18} />
              <textarea 
                placeholder="Conte-nos brevemente o que deseja..."
                rows={4}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-brand-rose/20 focus:border-brand-gold outline-none font-sans text-sm transition-all resize-none"
                onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
              />
            </div>

            <button type="submit" className="btn-gold w-full py-5 flex items-center justify-center gap-3 shadow-xl">
              Solicitar Horário no WhatsApp <Send size={16} />
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}