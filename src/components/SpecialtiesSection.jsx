import React, { useState } from 'react';
import {
  Stethoscope,
  Users,
  Heart,
  Bone,
  Sparkles,
  Baby,
  Brain,
  Eye,
  Activity,
  Search,
  Calendar,
  ArrowRight
} from 'lucide-react';

export default function SpecialtiesSection({ onOpenBooking, onOpenSearch }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const specialties = [
    {
      id: 'interna',
      name: 'Clínica Geral',
      englishTag: 'Internal Medicine',
      category: 'Geral',
      icon: Stethoscope,
      description: 'Atendimento global e diagnóstico preventivo contínuo para adultos.',
      bgColor: 'bg-emerald-50/70',
      iconColor: 'text-emerald-700',
    },
    {
      id: 'familia',
      name: 'Medicina de Família',
      englishTag: 'Family Medicine',
      category: 'Geral',
      icon: Users,
      description: 'Cuidado contínuo e acolhedor para pacientes de todas as idades.',
      bgColor: 'bg-teal-50/70',
      iconColor: 'text-teal-700',
    },
    {
      id: 'cardio',
      name: 'Cardiologia',
      englishTag: 'Cardiology',
      category: 'Especializada',
      icon: Heart,
      description: 'Prevenção, diagnóstico e tratamento de doenças do coração.',
      bgColor: 'bg-rose-50/70',
      iconColor: 'text-rose-600',
    },
    {
      id: 'orto',
      name: 'Ortopedia',
      englishTag: 'Orthopedics',
      category: 'Especializada',
      icon: Bone,
      description: 'Cuidado com ossos, articulações, músculos e coluna vertebral.',
      bgColor: 'bg-stone-100/80',
      iconColor: 'text-stone-700',
    },
    {
      id: 'derma',
      name: 'Dermatologia',
      englishTag: 'Dermatology',
      category: 'Especializada',
      icon: Sparkles,
      description: 'Tratamentos avançados para a saúde e estética da pele e cabelos.',
      bgColor: 'bg-amber-50/70',
      iconColor: 'text-amber-700',
    },
    {
      id: 'gineco',
      name: 'Ginecologia e Obstetrícia',
      englishTag: 'Gynecology',
      category: 'Especializada',
      icon: Baby,
      description: 'Saúde integral da mulher em todas as fases e acompanhamento pré-natal.',
      bgColor: 'bg-pink-50/70',
      iconColor: 'text-pink-600',
    },
    {
      id: 'neuro',
      name: 'Neurologia',
      englishTag: 'Neurology',
      category: 'Especializada',
      icon: Brain,
      description: 'Avaliação e tratamento do sistema nervoso central e periférico.',
      bgColor: 'bg-indigo-50/70',
      iconColor: 'text-indigo-600',
    },
    {
      id: 'oftalmo',
      name: 'Oftalmologia',
      englishTag: 'Ophthalmology',
      category: 'Especializada',
      icon: Eye,
      description: 'Exames de vista, cirurgias refrativas e saúde ocular completa.',
      bgColor: 'bg-sky-50/70',
      iconColor: 'text-sky-700',
    },
  ];

  return (
    <section id="especialidades" className="py-20 bg-stone-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section Header with CTAs matching Synora */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full">
              Especialidades Médicas
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 mt-3">
              Cuidado especializado em todas as áreas
            </h2>
            <p className="mt-2 text-stone-600 text-sm sm:text-base max-w-xl">
              Acesse médicos experientes em uma ampla gama de disciplinas sem a complicação de coordenar consultas em diferentes clínicas.
            </p>
          </div>

          {/* Action Buttons Top Right */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="bg-stone-950 hover:bg-emerald-900 text-white text-xs sm:text-sm font-medium px-6 py-3 rounded-full transition-all duration-200 shadow-sm flex items-center gap-2 uppercase tracking-wide"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Consulta</span>
            </button>
            <button
              onClick={onOpenSearch}
              className="bg-white hover:bg-stone-100 text-stone-900 text-xs sm:text-sm font-medium px-5 py-3 rounded-full border border-stone-200 transition-all duration-200 shadow-sm flex items-center gap-2 uppercase tracking-wide"
            >
              <Search className="w-4 h-4 text-stone-700" />
              <span>Encontrar Médico</span>
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {specialties.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                onClick={onOpenSearch}
                className="bg-white hover:bg-emerald-900 hover:text-white p-6 rounded-2xl border border-stone-200/80 shadow-xs hover:shadow-lg transition-all duration-300 group cursor-pointer flex flex-col justify-between h-[210px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center group-hover:bg-white/20 transition-colors`}>
                      <IconComponent className={`w-6 h-6 ${item.iconColor} group-hover:text-white transition-colors`} />
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-emerald-200 group-hover:translate-x-1 transition-all" />
                  </div>

                  <h3 className="font-bold text-lg text-stone-900 group-hover:text-white transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-stone-500 group-hover:text-emerald-100 transition-colors mt-1.5 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="text-[11px] font-medium text-stone-600 uppercase tracking-wider group-hover:text-emerald-200 transition-colors">
                  {item.englishTag}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
