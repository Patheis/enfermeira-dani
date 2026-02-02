"use client";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const procedimentosList = [
    { name: "Botox", slug: "botox" },
    { name: "Bioestimuladores", slug: "bioestimuladores" },
    { name: "Preenchimento", slug: "preenchimento" },
    { name: "Lipo Enzimática", slug: "lipo-enzimatica" },
    { name: "Skinbooster", slug: "skinbooster" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm border-b border-brand-rose/30">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* Logo */}
        <div className="relative w-40 h-12">
          <Image 
            src="/logo-daniela.png" 
            alt="Logo Dra Daniela Furtado" 
            fill 
            className="object-contain"
          />
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-10 items-center">
          <a href="/" className="text-[10px] uppercase tracking-[0.2em] font-sans hover:text-brand-gold transition-colors text-brand-dark">
            Início
          </a>
          <a href="#sobre" className="text-[10px] uppercase tracking-[0.2em] font-sans hover:text-brand-gold transition-colors text-brand-dark">
            A Clínica
          </a>

          {/* Dropdown / Leque de Procedimentos */}
          <div 
            className="relative" 
            onMouseEnter={() => setIsDropdownOpen(true)} 
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-[10px] uppercase tracking-[0.2em] font-sans hover:text-brand-gold transition-colors text-brand-dark cursor-pointer">
              Procedimentos <ChevronDown size={12} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* O Leque que abre para baixo */}
            <div className={`absolute top-full -left-4 w-64 bg-white shadow-2xl border-t-2 border-brand-gold transition-all duration-300 ${isDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
              <ul className="py-4">
                {procedimentosList.map((item) => (
                  <li key={item.slug}>
                    <a href={`/procedimentos/${item.slug}`} className="block px-6 py-3 text-[10px] uppercase tracking-wider text-brand-dark hover:bg-brand-nude hover:text-brand-gold transition-colors">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <a href="#contato" className="text-[10px] uppercase tracking-[0.2em] font-sans hover:text-brand-gold transition-colors text-brand-dark">
            Contato
          </a>
        </div>

        {/* Botão Mobile */}
        <button className="md:hidden text-brand-dark" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Cascata Mobile */}
      <div 
        className={`absolute top-20 left-0 w-full bg-brand-nude transition-all duration-500 ease-in-out overflow-hidden shadow-xl ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center py-10 gap-6">
          <a href="/" onClick={() => setIsOpen(false)} className="text-xl font-serif italic text-brand-dark">Início</a>
          <a href="#sobre" onClick={() => setIsOpen(false)} className="text-xl font-serif italic text-brand-dark">A Clínica</a>
          
          {/* No mobile, listamos os procedimentos direto para facilitar o toque */}
          <div className="text-center bg-brand-rose/10 w-full py-4 space-y-4">
             <p className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">Nossos Procedimentos</p>
             {procedimentosList.map((item) => (
               <a 
                key={item.slug} 
                href={`/procedimentos/${item.slug}`} 
                className="block text-lg font-serif italic text-brand-dark"
                onClick={() => setIsOpen(false)}
               >
                 {item.name}
               </a>
             ))}
          </div>

          <a href="#contato" onClick={() => setIsOpen(false)} className="text-xl font-serif italic text-brand-dark">Contato</a>
          
          <div className="mt-4 animate-bounce">
             <span className="text-2xl">🦋</span>
          </div>
        </div>
      </div>
    </nav>
  );
}