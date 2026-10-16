import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Agendamento',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contato" className="py-20 bg-stone-900 text-white relative overflow-hidden">

      {/* Subtle ambient blur */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-900/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-rose-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left Column: Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-300 bg-emerald-950/80 border border-emerald-800/60 px-3 py-1 rounded-full">
                Fale Conosco
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-4">
                Estamos prontos para atender você
              </h2>
              <p className="mt-3 text-stone-300 text-sm sm:text-base leading-relaxed">
                Tire suas dúvidas, solicite informações sobre convênios ou agende sua consulta com nossa equipe de atendimento.
              </p>
            </div>

            <div className="space-y-6 text-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-stone-800 rounded-xl text-emerald-400 border border-stone-700">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-white">Central de Atendimento</div>
                  <div className="text-stone-300 font-medium">(11) 3100-2000</div>
                  <div className="text-xs text-stone-400 mt-0.5">WhatsApp: (11) 99100-2000</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-stone-800 rounded-xl text-emerald-400 border border-stone-700">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-white">E-mail</div>
                  <div className="text-stone-300">contato@vitanatural.com.br</div>
                  <div className="text-xs text-stone-400 mt-0.5">atendimento@vitanatural.com.br</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-stone-800 rounded-xl text-emerald-400 border border-stone-700">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-white">Horário de Atendimento</div>
                  <div className="text-stone-300">Segunda a Sexta: 07h às 21h</div>
                  <div className="text-stone-300">Sábados: 08h às 16h</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 bg-stone-800/80 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-stone-700/80 shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Mensagem Enviada!</h3>
                <p className="text-stone-300 text-sm max-w-md mx-auto">
                  Agradecemos seu contato. Nossa equipe entrará em contato com você o mais breve possível.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 bg-emerald-700 hover:bg-emerald-600 text-white font-medium text-xs px-6 py-2.5 rounded-full transition-colors"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-white mb-2">Envie uma Mensagem</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">Nome Completo</label>
                    <input
                      type="text"
                      required
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">E-mail</label>
                    <input
                      type="email"
                      required
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">Telefone / WhatsApp</label>
                    <input
                      type="tel"
                      required
                      placeholder="(11) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">Assunto</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500"
                    >
                      <option value="Agendamento">Agendamento de Consulta</option>
                      <option value="Exames">Informações sobre Exames</option>
                      <option value="Convenios">Convênios Atendidos</option>
                      <option value="Outros">Outros Assuntos</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">Mensagem</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Como podemos te ajudar?"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-sm py-3.5 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 uppercase tracking-wider"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Mensagem</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
