'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  // Verifica se o usuário já aceitou os cookies anteriormente
  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[120] p-4 md:p-6"
        >
          {/* Fundo escuro luxuoso com borda dourada */}
          <div className="max-w-7xl mx-auto bg-brand-dark/95 backdrop-blur-md border border-brand-gold/30 p-6 md:p-8 rounded-[2.5rem] shadow-[0_-10px_40px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            
            {/* Detalhe da Borboleta sutil no fundo do banner */}
            <div className="absolute -left-4 -bottom-4 w-20 h-20 opacity-10 rotate-12 pointer-events-none">
                <Image src="/borboleta-semfundo.png" alt="Decor" fill className="object-contain" />
            </div>

            <div className="space-y-2 text-center md:text-left relative z-10">
              <p className="text-white/80 text-sm md:text-base leading-relaxed font-sans">
                Utilizamos cookies para melhorar sua experiência e oferecer conteúdos personalizados de acordo com a nossa 
                <a href="#" className="text-brand-gold hover:text-white underline ml-1 font-bold transition-colors">Política de Privacidade</a>. 
                Ao continuar navegando, você concorda com sua melhor <span className="italic font-serif text-brand-gold">Metamorfose</span>.
              </p>
            </div>

            <button
              onClick={acceptCookies}
              className="btn-gold whitespace-nowrap px-10 py-4 shadow-xl relative z-10"
            >
              Aceitar Cookies 🦋
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}