import React from 'react';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

export default function UnitsSection({ onOpenBooking }) {
  const units = [
    {
      id: 1,
      name: "Unidade Jardins",
      address: "Alameda Santos, 1470 - Jardins, São Paulo",
      hours: "Seg a Sex: 07h às 21h | Sáb: 08h às 16h",
      phone: "(11) 3100-2020",
      highlights: "Atendimento emergencial leve, laboratório próprio e espaço bem-estar.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      name: "Unidade Pinheiros",
      address: "Rua Pedroso de Morais, 850 - Pinheiros, São Paulo",
      hours: "Seg a Sex: 07h às 20h | Sáb: 08h às 14h",
      phone: "(11) 3100-2030",
      highlights: "Centro integrado de ortopedia, reabilitação e diagnósticos por imagem.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      name: "Unidade Moema",
      address: "Av. Agami, 320 - Moema, São Paulo",
      hours: "Seg a Sex: 07h às 20h | Sáb: 08h às 14h",
      phone: "(11) 3100-2040",
      highlights: "Especializada em saúde da mulher, pediatria e medicina preventivo-integrativa.",
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section id="unidades" className="py-20 bg-stone-50/70 border-y border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-full">
              Nossas Clínicas
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 mt-3">
              Unidades preparadas para o seu conforto
            </h2>
            <p className="mt-2 text-stone-600 text-sm sm:text-base">
              Espaços modernos, arborizados e projetados para oferecer uma experiência acolhedora e eficiente perto de você.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {units.map((unit) => (
            <div
              key={unit.id}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={unit.image}
                    alt={unit.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3 bg-stone-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {unit.name}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-2.5 text-stone-700 text-xs sm:text-sm">
                    <MapPin className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{unit.address}</span>
                  </div>

                  <div className="flex items-start gap-2.5 text-stone-600 text-xs">
                    <Clock className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                    <span>{unit.hours}</span>
                  </div>

                  <div className="flex items-center gap-2.5 text-stone-600 text-xs">
                    <Phone className="w-4 h-4 text-stone-400 shrink-0" />
                    <span>{unit.phone}</span>
                  </div>

                  <p className="text-xs text-stone-500 bg-stone-50 p-3 rounded-xl border border-stone-100 italic">
                    "{unit.highlights}"
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex gap-2">
                <button
                  onClick={onOpenBooking}
                  className="flex-1 bg-stone-950 hover:bg-emerald-900 text-white font-medium text-xs py-2.5 rounded-xl transition-colors text-center"
                >
                  Agendar na Unidade
                </button>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(unit.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2.5 rounded-xl border border-stone-200 text-stone-700 hover:bg-stone-100 transition-colors flex items-center justify-center"
                  title="Ver no Mapa"
                >
                  <Navigation className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
