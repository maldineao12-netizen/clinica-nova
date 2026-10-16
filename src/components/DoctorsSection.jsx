import React, { useState } from 'react';
import { Star, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';

export default function DoctorsSection({ onOpenBooking }) {
  const [selectedSpecialty, setSelectedSpecialty] = useState('Todas');

  const doctors = [
    {
      id: 1,
      name: "Dra. Beatriz Santos",
      role: "Clínica Geral & Medicina Preventiva",
      specialty: "Clínica Geral",
      crm: "CRM/SP 148.920",
      rating: "4.9",
      reviews: "142 avaliações",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
      experience: "12 anos de experiência",
      unit: "Unidade Jardins & Pinheiros",
    },
    {
      id: 2,
      name: "Dr. Rafael Mendes",
      role: "Cardiologia & Medicina Cardiovascular",
      specialty: "Cardiologia",
      crm: "CRM/SP 132.810",
      rating: "5.0",
      reviews: "198 avaliações",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
      experience: "15 anos de experiência",
      unit: "Unidade Jardins",
    },
    {
      id: 3,
      name: "Dra. Camilla Oliveira",
      role: "Dermatologia Clínica e Estética Avançada",
      specialty: "Dermatologia",
      crm: "CRM/SP 165.402",
      rating: "4.9",
      reviews: "167 avaliações",
      image: "https://images.unsplash.com/photo-1594824813570-78a33562633d?auto=format&fit=crop&w=600&q=80",
      experience: "10 anos de experiência",
      unit: "Unidade Moema",
    },
    {
      id: 4,
      name: "Dr. Lucas Almeida",
      role: "Ortopedia & Traumatologia Esportiva",
      specialty: "Ortopedia",
      crm: "CRM/SP 121.309",
      rating: "4.8",
      reviews: "115 avaliações",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80",
      experience: "14 anos de experiência",
      unit: "Unidade Pinheiros",
    },
  ];

  const categories = ['Todas', 'Clínica Geral', 'Cardiologia', 'Dermatologia', 'Ortopedia'];

  const filteredDoctors = selectedSpecialty === 'Todas'
    ? doctors
    : doctors.filter(doc => doc.specialty === selectedSpecialty);

  return (
    <section id="medicos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-full">
            Corpo Clínico
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900">
            Conheça nossos médicos especialistas
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Profissionais dedicados, formados nas melhores instituições do país e alinhados aos valores de empatia e inovação da Vita Natural.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedSpecialty(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  selectedSpecialty === cat
                    ? 'bg-stone-900 text-white shadow-sm'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Doctor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDoctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-stone-50/70 rounded-2xl overflow-hidden border border-stone-200/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-stone-800 flex items-center gap-1 shadow-xs">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{doctor.rating}</span>
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <div className="text-[11px] font-semibold text-emerald-800 tracking-wider uppercase">
                    {doctor.crm}
                  </div>
                  <h3 className="font-bold text-stone-900 text-lg group-hover:text-emerald-900 transition-colors">
                    {doctor.name}
                  </h3>
                  <p className="text-xs font-medium text-stone-600 leading-snug">
                    {doctor.role}
                  </p>

                  <div className="pt-2 border-t border-stone-200/60 space-y-1.5 text-xs text-stone-500">
                    <div className="flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-emerald-700" />
                      <span>{doctor.experience}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-stone-600" />
                      <span>{doctor.unit}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={onOpenBooking}
                  className="w-full bg-stone-900 hover:bg-emerald-900 text-white font-medium text-xs py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Agendar Consulta</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
