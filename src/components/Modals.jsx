import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, CheckCircle2, Search } from 'lucide-react';

export function BookingModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    specialty: 'Clínica Geral',
    doctor: 'Dra. Beatriz Santos',
    unit: 'Unidade Jardins',
    date: '',
    time: '',
    patientName: '',
    phone: '',
  });

  if (!isOpen) return null;

  const handleNext = (e) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
    else setStep(4); // Success step
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-stone-100 transition-all">

        {/* Header Modal */}
        <div className="bg-stone-900 text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-emerald-400" />
            <h3 className="font-bold text-lg">Agendamento de Consulta</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {step === 4 ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-stone-900">Consulta Confirmada!</h4>
              <p className="text-stone-600 text-sm max-w-sm mx-auto">
                Enviamos os detalhes da sua consulta para o seu WhatsApp e e-mail.
              </p>

              <div className="bg-stone-50 p-4 rounded-2xl text-left text-xs text-stone-700 space-y-2 border border-stone-200/80 my-4">
                <div><strong>Especialidade:</strong> {bookingData.specialty}</div>
                <div><strong>Médico:</strong> {bookingData.doctor}</div>
                <div><strong>Unidade:</strong> {bookingData.unit}</div>
                <div><strong>Data & Hora:</strong> {bookingData.date || 'Próxima data disponível'} às {bookingData.time || '10:00'}</div>
                <div><strong>Paciente:</strong> {bookingData.patientName}</div>
              </div>

              <button
                onClick={() => { setStep(1); onClose(); }}
                className="w-full bg-stone-900 hover:bg-emerald-900 text-white font-semibold py-3 rounded-xl transition-colors text-sm uppercase tracking-wider"
              >
                Concluir
              </button>
            </div>
          ) : (
            <form onSubmit={handleNext} className="space-y-4">

              {/* Step indicator */}
              <div className="flex items-center justify-between text-xs font-semibold text-stone-500 mb-2">
                <span className={step >= 1 ? "text-emerald-800 font-bold" : ""}>1. Serviço</span>
                <span className={step >= 2 ? "text-emerald-800 font-bold" : ""}>2. Horário</span>
                <span className={step >= 3 ? "text-emerald-800 font-bold" : ""}>3. Dados</span>
              </div>

              {step === 1 && (
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Especialidade</label>
                    <select
                      value={bookingData.specialty}
                      onChange={(e) => setBookingData({...bookingData, specialty: e.target.value})}
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-stone-900 focus:outline-none focus:border-emerald-600"
                    >
                      <option value="Clínica Geral">Clínica Geral</option>
                      <option value="Cardiologia">Cardiologia</option>
                      <option value="Dermatologia">Dermatologia</option>
                      <option value="Ortopedia">Ortopedia</option>
                      <option value="Ginecologia">Ginecologia</option>
                      <option value="Pediatria">Pediatria</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Médico Preferencial</label>
                    <select
                      value={bookingData.doctor}
                      onChange={(e) => setBookingData({...bookingData, doctor: e.target.value})}
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-stone-900 focus:outline-none focus:border-emerald-600"
                    >
                      <option value="Dra. Beatriz Santos">Dra. Beatriz Santos (Clínica Geral)</option>
                      <option value="Dr. Rafael Mendes">Dr. Rafael Mendes (Cardiologia)</option>
                      <option value="Dra. Camilla Oliveira">Dra. Camilla Oliveira (Dermatologia)</option>
                      <option value="Dr. Lucas Almeida">Dr. Lucas Almeida (Ortopedia)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Unidade</label>
                    <select
                      value={bookingData.unit}
                      onChange={(e) => setBookingData({...bookingData, unit: e.target.value})}
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-stone-900 focus:outline-none focus:border-emerald-600"
                    >
                      <option value="Unidade Jardins">Unidade Jardins - Alameda Santos, 1470</option>
                      <option value="Unidade Pinheiros">Unidade Pinheiros - Rua Pedroso de Morais, 850</option>
                      <option value="Unidade Moema">Unidade Moema - Av. Agami, 320</option>
                    </select>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Data Desejada</label>
                    <input
                      type="date"
                      required
                      value={bookingData.date}
                      onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-sm text-stone-900 focus:outline-none focus:border-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Horário Disponível</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['08:30', '10:00', '11:30', '14:00', '15:30', '17:00'].map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setBookingData({...bookingData, time})}
                          className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                            bookingData.time === time
                              ? 'bg-emerald-900 text-white border-emerald-900'
                              : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Nome Completo do Paciente</label>
                    <input
                      type="text"
                      required
                      placeholder="Nome do paciente"
                      value={bookingData.patientName}
                      onChange={(e) => setBookingData({...bookingData, patientName: e.target.value})}
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-sm text-stone-900 focus:outline-none focus:border-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Celular / WhatsApp</label>
                    <input
                      type="tel"
                      required
                      placeholder="(11) 99999-9999"
                      value={bookingData.phone}
                      onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-sm text-stone-900 focus:outline-none focus:border-emerald-600"
                    />
                  </div>
                </div>
              )}

              <div className="flex gap-2 pt-4">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="flex-1 bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold py-3 rounded-xl transition-colors text-xs uppercase tracking-wider"
                  >
                    Voltar
                  </button>
                )}
                <button
                  type="submit"
                  className="flex-1 bg-stone-950 hover:bg-emerald-900 text-white font-semibold py-3 rounded-xl transition-colors text-xs uppercase tracking-wider"
                >
                  {step === 3 ? 'Confirmar Agendamento' : 'Próximo Passos'}
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}

export function SearchModal({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const doctors = [
    { name: "Dra. Beatriz Santos", spec: "Clínica Geral & Medicina Preventiva", unit: "Jardins" },
    { name: "Dr. Rafael Mendes", spec: "Cardiologia Cardiovascular", unit: "Jardins" },
    { name: "Dra. Camilla Oliveira", spec: "Dermatologia Clínica & Estética", unit: "Moema" },
    { name: "Dr. Lucas Almeida", spec: "Ortopedia Esportiva", unit: "Pinheiros" },
  ];

  const filtered = doctors.filter(
    d => d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
         d.spec.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-stone-100 p-6 space-y-4">

        <div className="flex items-center justify-between border-b border-stone-100 pb-3">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-emerald-700" />
            <h3 className="font-bold text-stone-900 text-lg">Encontrar Médico ou Especialidade</h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-full text-stone-400 hover:text-stone-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        <input
          type="text"
          placeholder="Busque por nome do médico ou especialidade..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-600"
          autoFocus
        />

        <div className="space-y-2 max-h-60 overflow-y-auto">
          {filtered.length > 0 ? (
            filtered.map((doc, idx) => (
              <div key={idx} className="p-3 bg-stone-50 rounded-xl hover:bg-emerald-50 transition-colors flex items-center justify-between cursor-pointer">
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">{doc.name}</h4>
                  <p className="text-xs text-stone-500">{doc.spec} • {doc.unit}</p>
                </div>
                <button onClick={onClose} className="text-xs font-semibold bg-stone-900 text-white px-3 py-1.5 rounded-lg">
                  Ver
                </button>
              </div>
            ))
          ) : (
            <p className="text-xs text-stone-400 text-center py-4">Nenhum resultado encontrado.</p>
          )}
        </div>

      </div>
    </div>
  );
}
