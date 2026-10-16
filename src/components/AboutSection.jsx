import React from 'react';
import { ShieldCheck, HeartHandshake, Microchip, Clock, Calendar } from 'lucide-react';

export default function AboutSection({ onOpenBooking }) {
  const values = [
    {
      icon: HeartHandshake,
      title: "Cuidado Humano & Empático",
      description: "Tratamos pessoas, não apenas sintomas. Cada atendimento é individualizado e atencioso.",
    },
    {
      icon: Microchip,
      title: "Tecnologia de Ponta",
      description: "Equipamentos modernos e relatórios integrados para diagnósticos rápidos e precisos.",
    },
    {
      icon: ShieldCheck,
      title: "Segurança e Excelência",
      description: "Acreditação médica contínua e protocolos de higiene de padrão internacional.",
    },
    {
      icon: Clock,
      title: "Respeito ao seu Tempo",
      description: "Pontualidade nas consultas, agendamento ágil e integração de histórico de saúde.",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Visual Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
                alt="Instalações modernas e acolhedoras da Vita Natural"
                className="w-full h-[420px] sm:h-[480px] object-cover"
              />
            </div>

            {/* Small Overlay Image */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 w-48 sm:w-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80"
                alt="Consulta Médica Colaborativa"
                className="w-full h-36 object-cover"
              />
            </div>

            {/* Experience Pill */}
            <div className="absolute top-6 left-6 bg-emerald-900 text-white p-4 rounded-2xl shadow-lg max-w-[180px]">
              <div className="text-3xl font-extrabold">12+</div>
              <div className="text-xs font-medium text-emerald-100 mt-1">Anos promovendo saúde natural e preventiva.</div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-full">
              Sobre a Vita Natural
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 leading-tight">
              Acreditamos que cuidar da saúde deve ser uma experiência tranquila e inspiradora.
            </h2>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Fundada com o propósito de unir o rigor da medicina tradicional ao acolhimento e escuta atenta, a <strong className="text-stone-800">Vita Natural</strong> redefiniu o conceito de clínica médica multi-especialidade. Nosso ecossistema de saúde conecta diagnósticos avançados, prevenção e bem-estar integral em um ambiente leve e acolhedor.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {values.map((val, idx) => {
                const IconComponent = val.icon;
                return (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-50 border border-stone-100">
                    <div className="p-2 rounded-lg bg-emerald-100 text-emerald-800 shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900 text-sm">{val.title}</h4>
                      <p className="text-xs text-stone-500 mt-0.5 leading-snug">{val.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenBooking}
                className="bg-stone-950 hover:bg-emerald-900 text-white font-semibold text-sm px-8 py-3.5 rounded-full shadow-md transition-all flex items-center gap-2 uppercase tracking-wider"
              >
                <Calendar className="w-4 h-4" />
                <span>Conheça Nossos Serviços</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
