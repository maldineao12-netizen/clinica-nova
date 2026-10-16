import React from 'react';
import { Search, Calendar, SlidersHorizontal, Star } from 'lucide-react';

export default function HeroSection({ onOpenBooking, onOpenSearch }) {
  return (
    <section id="inicio" className="relative overflow-hidden bg-hero-gradient pt-8 pb-16 lg:pt-12 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Grid Layout matching Synora Hero Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-6 space-y-6 lg:space-y-8 z-10">

            {/* Top Tag Subtitle Badge */}
            <div>
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-stone-600 uppercase">
                CLÍNICA MULTI-ESPECIALIDADE
              </span>
            </div>

            {/* Main Title Header with Small Photo Accent Badge */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-900 leading-[1.08]">
              CUIDADO MÉDICO<br />
              <span className="inline-flex items-center gap-2">
                <span className="inline-block w-10 h-7 sm:w-14 sm:h-9 rounded-md overflow-hidden align-middle shadow-sm border border-white">
                  <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=200&q=80"
                    alt="Cuidado humanizado"
                    className="w-full h-full object-cover"
                  />
                </span>
                DESENHADO
              </span><br />
              PARA VOCÊ
            </h1>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenBooking}
                className="bg-stone-950 hover:bg-emerald-900 text-white font-medium text-xs sm:text-sm px-7 py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2 uppercase tracking-wide"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Consulta</span>
              </button>

              <button
                onClick={onOpenSearch}
                className="bg-white/90 hover:bg-white text-stone-900 font-medium text-xs sm:text-sm px-6 py-3.5 rounded-full border border-stone-200 hover:border-stone-400 transition-all duration-200 shadow-sm flex items-center gap-2 uppercase tracking-wide"
              >
                <Search className="w-4 h-4 text-stone-700" />
                <span>Encontrar Médico</span>
              </button>
            </div>

            {/* Bottom Descriptive Paragraph */}
            <div className="pt-4 max-w-lg">
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-normal">
                Da consulta de rotina ao tratamento especializado, a <strong className="text-stone-800 font-semibold">Vita Natural</strong> reúne médicos experientes de diversas especialidades no mesmo lugar — tornando a medicina preventiva e curativa mais simples, rápida e acolhedora.
              </p>
            </div>

          </div>

          {/* Right Column: Hero Physician Image + Stats Badges */}
          <div className="lg:col-span-6 relative mt-8 lg:mt-0 flex justify-center lg:justify-end">

            {/* Main Female Doctor Photo Container */}
            <div className="relative w-full max-w-lg lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border-4 border-white/60 group">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=80"
                alt="Médica especialista Vita Natural em laboratório"
                className="w-full h-[450px] sm:h-[540px] lg:h-[580px] object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
              />

              {/* Gradient Overlay for subtle bottom contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

              {/* Floating Filter Button Overlay Icon at Bottom Right */}
              <div className="absolute bottom-6 right-6">
                <button
                  onClick={onOpenSearch}
                  className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-md border border-white/80 shadow-lg flex items-center justify-center text-stone-800 hover:bg-white hover:scale-105 transition-all"
                  title="Ajustar Filtros de Busca"
                >
                  <SlidersHorizontal className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Floating Stats Badge Column matching exact layout of Synora */}
            <div className="absolute top-4 right-2 sm:right-6 lg:-right-4 space-y-3 z-20 pointer-events-none">

              {/* Stat Card 1 */}
              <div className="bg-white/85 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-white/90 text-right min-w-[150px] sm:min-w-[170px]">
                <div className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">20K+</div>
                <div className="text-[11px] sm:text-xs text-stone-600 font-medium">Pacientes Atendidos</div>
              </div>

              {/* Stat Card 2 */}
              <div className="bg-white/85 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-white/90 text-right min-w-[150px] sm:min-w-[170px]">
                <div className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">30+</div>
                <div className="text-[11px] sm:text-xs text-stone-600 font-medium">Médicos Especialistas</div>
              </div>

              {/* Stat Card 3 */}
              <div className="bg-white/85 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-white/90 text-right min-w-[150px] sm:min-w-[170px]">
                <div className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">18</div>
                <div className="text-[11px] sm:text-xs text-stone-600 font-medium">Especialidades Médicas</div>
              </div>

              {/* Stat Card 4 */}
              <div className="bg-white/85 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-white/90 text-right min-w-[150px] sm:min-w-[170px]">
                <div className="flex items-center justify-end gap-1 text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>4.9/5</span>
                </div>
                <div className="text-[11px] sm:text-xs text-stone-600 font-medium">Satisfação Média</div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
