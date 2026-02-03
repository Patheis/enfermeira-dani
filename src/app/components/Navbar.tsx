"use client";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const procedimentosList = [
    { name: "Botox", slug: "botox" },
    { name: "Bioestimuladores", slug: "bioestimuladores" },
    { name: "Preenchimento", slug: "preenchimento" },
    { name: "Lipo Enzimática", slug: "lipo-enzimatica" },
    { name: "Skinbooster", slug: "skinbooster" },
    { name: "Peelings", slug: "peeling-quimico" },
  ];

  return (
    <nav className="fixed w-full z-[100] bg-white/95 backdrop-blur-sm border-b border-brand-rose/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="relative w-36 h-10 md:w-40 md:h-12 shrink-0">
          <Image 
            src="/enfermeira-dani/logo-daniela.png" 
            alt="Logo Dra Daniela Furtado" 
            fill 
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-dark hover:text-brand-gold transition-all">Início</Link>
          
          {/* Dropdown Desktop */}
          <div className="relative group h-20 flex items-center" 
               onMouseEnter={() => setIsDropdownOpen(true)} 
               onMouseLeave={() => setIsDropdownOpen(false)}>
            <button className="flex items-center gap-1 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-dark group-hover:text-brand-gold transition-all">
              Procedimentos
              <ChevronDown size={12} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`absolute top-full left-0 pt-2 transition-all duration-300 ${isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
              <div className="bg-white border border-brand-rose/10 shadow-2xl rounded-2xl p-2 min-w-[220px] flex flex-col">
                {procedimentosList.map((item) => (
                  <Link key={item.slug} href={`/procedimentos/${item.slug}`} className="text-[10px] uppercase tracking-[0.15em] font-bold text-brand-dark/60 hover:text-brand-gold hover:bg-[#fcf8f6] px-5 py-3 rounded-xl transition-all">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/#sobre" className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-dark hover:text-brand-gold transition-all">Sobre</Link>
          <Link href="/#localizacao" className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-dark hover:text-brand-gold transition-all">Localização</Link>
          <Link href="/#agendamento" className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-dark hover:text-brand-gold transition-all font-sans bg-brand-gold text-white px-4 py-2 rounded-full">Agendar 🦋</Link>
        </div>

        {/* Botão Mobile */}
        <button className="md:hidden p-2 text-brand-dark relative z-[101]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Painel Menu Mobile (Estilo 4U) */}
      <div className={`fixed inset-0 bg-[#fcf8f6] z-[99] md:hidden transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Indicador de Scroll (Bounce) */}
        <div className="absolute bottom-6 left-0 w-full flex justify-center pointer-events-none z-[102] animate-bounce">
            <ChevronDown size={32} className="text-brand-gold opacity-50" />
        </div>

        {/* Conteúdo Mobile com Scroll permitido */}
        <div className="flex flex-col p-8 pt-24 gap-6 overflow-y-auto h-full bg-[#fcf8f6]">
          <Link onClick={() => setIsMobileMenuOpen(false)} href="/" className="text-2xl font-serif italic text-brand-dark border-b border-brand-rose/10 pb-2">Início</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} href="/#sobre" className="text-2xl font-serif italic text-brand-dark border-b border-brand-rose/10 pb-2">A Clínica</Link>

          {/* Lista de Procedimentos Mobile */}
          <div className="flex flex-col gap-4">
            <p className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold border-b border-brand-rose/10 pb-2">Nossos Procedimentos</p>
            {procedimentosList.map((item) => (
              <Link key={item.slug} onClick={() => setIsMobileMenuOpen(false)} href={`/procedimentos/${item.slug}`} className="text-lg font-serif italic text-brand-dark/70 pl-4 border-l-2 border-brand-gold/30 py-1">
                {item.name}
              </Link>
            ))}
          </div>

          <Link onClick={() => setIsMobileMenuOpen(false)} href="/#localizacao" className="text-2xl font-serif italic text-brand-dark border-b border-brand-rose/10 pb-2">Localização</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} href="/#agendamento" className="text-2xl font-serif italic text-brand-dark border-b border-brand-rose/10 pb-2 mb-20">Agendamento 🦋</Link>
        </div>
      </div>
    </nav>
  );
}