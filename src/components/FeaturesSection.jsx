import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function FeaturesSection({ onOpenBooking }) {
  const scrollContainerRef = useRef(null);

  const cards = [
    {
      id: 1,
      title: "Cuidado Completo",
      description: "Da medicina preventiva às consultas avançadas de especialista, cuidamos de você em todas as fases da vida.",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Médicos Colaborativos",
      description: "Especialistas multidisciplinares trabalham em conjunto para construir planos de tratamento integrados.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Diagnósticos Modernos",
      description: "Exames de imagem digital e análises laboratoriais rápidas com relatórios detalhados no mesmo dia.",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Agendamento Fácil",
      description: "Agende online em instantes, escolha seu médico de preferência e gerencie suas consultas sem burocracia.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section with Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 leading-tight">
              Tudo o que você precisa para uma saúde melhor — <span className="text-stone-800">em um só lugar.</span>
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base">
              A saúde não deve exigir navegar por múltiplas clínicas desconectadas. Na Vita Natural, conectamos especialistas, diagnósticos e acompanhamento em uma experiência coordenada e acolhedora.
            </p>
          </div>

          {/* Navigation Arrows matching visual reference */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={() => handleScroll('left')}
              className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-700 hover:bg-stone-100 hover:border-stone-400 transition-all active:scale-95"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-700 hover:bg-stone-100 hover:border-stone-400 transition-all active:scale-95"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 4 Cards Grid / Carousel */}
        <div
          ref={scrollContainerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto scrollbar-none pb-4"
        >
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={onOpenBooking}
              className="group relative h-[380px] sm:h-[420px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-end p-6 border border-stone-100"
            >
              {/* Background Photo */}
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Bottom Gradient Blur Overlay matching reference Synora cards */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-900/40 to-transparent" />

              {/* Text Content */}
              <div className="relative z-10 text-white space-y-2">
                <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-emerald-200 transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-normal opacity-90 line-clamp-3">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
