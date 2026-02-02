import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center bg-[#fcf8f6] pt-24 pb-12 md:pt-20 overflow-hidden">

            {/* Borboleta Principal - Ajuste de Z-INDEX para z-[40] */}
            <div className="absolute top-[10%] right-[-5%] md:top-[20%] md:right-[2%] opacity-100 animate-float z-[40]">
                <Image
                    src="/borboleta-semfundo.png"
                    alt="Borboleta Decorativa"
                    width={150}
                    height={150}
                    className="md:w-[280px] md:h-[280px] rotate-[15deg] drop-shadow-md"
                />
            </div>

            {/* SEGUNDA BORBOLETA - Esquerda Superior */}
            <div className="absolute bottom-1  -top-10 left-[-%] md:top-10 md:-left-9 z-[40] animate-float opacity-100" style={{ animationDelay: '1s' }}>
                <Image
                    src="/borboleta-semfundo.png"
                    alt="Borboleta Decorativa Menor"
                    width={90}
                    height={90}
                    className="md:w-[150px] md:h-[150px] rotate-[-25deg] filter blur-[0.3px]"
                />
            </div>

            {/* Container Principal com Grid Responsivo */}
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">

                {/* Lado da Imagem (Aparece primeiro no mobile: order-1) */}
                <div className="relative flex justify-center order-1 md:order-2">
                    <div className="relative w-full max-w-[280px] md:max-w-[380px]">

                        {/* Moldura de Arco */}
                        <div className="relative z-10 aspect-[4/5] rounded-t-full border-[6px] md:border-[8px] border-brand-rose/30 p-2 shadow-inner bg-white/10">
                            <div className="relative w-full h-full rounded-t-full overflow-hidden">
                                <Image
                                    src="/dani-hero.jpg"
                                    alt="Dra Daniela Furtado"
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Card Flutuante Ajustado para Mobile */}
                        <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 z-20 bg-white/95 backdrop-blur-sm p-4 md:p-5 shadow-xl rounded-2xl border border-brand-nude max-w-[140px] md:max-w-[180px]">
                            <p className="text-brand-dark font-serif italic text-[10px] md:text-xs leading-relaxed">
                                "Cuidar da beleza é um ato de amor-próprio."
                            </p>
                        </div>

                        {/* Terceira Borboleta (Invertida abaixo da moldura) */}
                        <div className="absolute -bottom-10 -left-10 md:-bottom-12 md:-left-20 z-[40] animate-float opacity-70" style={{ animationDelay: '2s' }}>
                            <Image
                                src="/borboleta-semfundo.png"
                                alt="Borboleta Decorativa Inferior"
                                width={120}
                                height={120}
                                className="md:w-[190px] md:h-[190px] rotate-[-100deg] filter blur-[0.3px]"
                            />
                        </div>
                    </div>
                </div>

                {/* Lado do Texto (Aparece depois no mobile: order-2) */}
                <div className="order-2 md:order-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-4 md:mb-6">
                        <div className="h-[1px] w-8 bg-brand-gold"></div>
                        <span className="text-brand-gold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[9px] md:text-[10px] font-sans">
                            Beleza Autêntica e Planejada
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-serif text-brand-dark leading-tight mb-4 md:mb-6">
                        Sua essência em sua melhor <br className="hidden md:block" />
                        <span className="italic text-brand-gold font-normal">Metamorfose </span>
                    </h1>

                    <p className="text-brand-dark/70 font-sans text-xs md:text-sm mb-8 md:mb-10 max-w-sm mx-auto md:mx-0 leading-relaxed tracking-wide">
                        Especialista em cuidar de você com carinho e dedicação, realçando o que você tem de mais bonito: sua essência.
                    </p>

                    <button className="btn-gold w-full md:w-auto">
                        Agendar Experiência
                    </button>
                </div>

            </div>
        </section>
    );
}