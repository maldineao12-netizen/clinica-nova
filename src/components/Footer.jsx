import React from 'react';
import { Heart, Shield, ArrowUpRight } from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="bg-stone-950 text-stone-400 text-sm border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-stone-950 font-bold">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17 8C11 8 8 11 8 17c6 0 9-3 9-9z" />
                </svg>
              </div>
              <span className="font-extrabold text-lg tracking-wider text-white uppercase font-sans">
                VITA <span className="text-emerald-400 font-medium">NATURAL</span>
              </span>
            </a>

            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Cuidado médico multidisciplinar desenhado para você e sua família. Excelência diagnóstica, corpo clínico qualificado e atendimento humano em São Paulo.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 uppercase tracking-wider"
              >
                <span>Agendar Consulta Online</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Links 1: Especialidades */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase">Especialidades</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#especialidades" className="hover:text-white transition-colors">Clínica Geral</a></li>
              <li><a href="#especialidades" className="hover:text-white transition-colors">Cardiologia</a></li>
              <li><a href="#especialidades" className="hover:text-white transition-colors">Dermatologia</a></li>
              <li><a href="#especialidades" className="hover:text-white transition-colors">Ortopedia</a></li>
              <li><a href="#especialidades" className="hover:text-white transition-colors">Ginecologia</a></li>
              <li><a href="#especialidades" className="hover:text-white transition-colors">Neurologia</a></li>
            </ul>
          </div>

          {/* Links 2: Institucional */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase">Institucional</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre a Clínica</a></li>
              <li><a href="#medicos" className="hover:text-white transition-colors">Corpo Médico</a></li>
              <li><a href="#unidades" className="hover:text-white transition-colors">Unidades Atendimento</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Convênios Atendidos</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Trabalhe Conosco</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>

          {/* Links 3: Unidades */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase">Unidades</h4>
            <div className="space-y-2.5 text-xs">
              <div>
                <strong className="text-stone-200 font-medium block">Unidade Jardins</strong>
                <span className="text-stone-400">Alameda Santos, 1470</span>
              </div>
              <div>
                <strong className="text-stone-200 font-medium block">Unidade Pinheiros</strong>
                <span className="text-stone-400">Rua Pedroso de Morais, 850</span>
              </div>
              <div>
                <strong className="text-stone-200 font-medium block">Unidade Moema</strong>
                <span className="text-stone-400">Av. Agami, 320</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} Vita Natural Clínica Médica. Todos os direitos reservados.</p>
          <div className="flex items-center gap-1">
            <span>Desenvolvido com</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>para sua saúde e bem-estar.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
