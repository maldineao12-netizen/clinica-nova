import React, { useState } from 'react';
import { Menu, X, Calendar, Search, Phone } from 'lucide-react';

export default function Header({ onOpenBooking, onOpenSearch }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-stone-100 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-emerald-900 flex items-center justify-center text-emerald-100 font-bold text-lg group-hover:scale-105 transition-transform">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-5l6 2.5-6 2.5zm0-8V4.5l6 2.5-6 2.5z" opacity="0.3"/>
                <path d="M17 8C11 8 8 11 8 17c6 0 9-3 9-9z" />
                <path d="M7 17c0-6 3-9 9-9-6 0-9 3-9 9z" opacity="0.6"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-wider text-stone-900 uppercase font-sans">
                VITA <span className="text-emerald-800 font-medium">NATURAL</span>
              </span>
              <span className="text-[10px] tracking-widest text-stone-600 uppercase font-medium -mt-1">
                Clínica Médica
              </span>
            </div>
          </a>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-stone-800">
            <a href="#inicio" className="hover:text-emerald-800 transition-colors py-1">Início</a>
            <a href="#especialidades" className="hover:text-emerald-800 transition-colors py-1">Especialidades</a>
            <a href="#medicos" className="hover:text-emerald-800 transition-colors py-1">Médicos</a>
            <a href="#unidades" className="hover:text-emerald-800 transition-colors py-1">Unidades</a>
            <a href="#sobre" className="hover:text-emerald-800 transition-colors py-1">Sobre</a>
            <a href="#contato" className="hover:text-emerald-800 transition-colors py-1">Contato</a>
          </nav>

          {/* Header Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenSearch}
              className="p-2.5 rounded-full text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors"
              title="Buscar Médico"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={onOpenBooking}
              className="bg-stone-950 hover:bg-emerald-950 text-white font-medium text-xs sm:text-sm px-6 py-3 rounded-full transition-all duration-200 shadow-sm hover:shadow active:scale-98 flex items-center gap-2 uppercase tracking-wide"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Consulta</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="bg-stone-900 text-white font-medium text-xs px-3.5 py-2 rounded-full"
            >
              Agendar
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-700 hover:bg-stone-100 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 px-4 pt-2 pb-6 space-y-3">
          <a
            href="#inicio"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-stone-800 hover:bg-stone-50"
          >
            Início
          </a>
          <a
            href="#especialidades"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-stone-800 hover:bg-stone-50"
          >
            Especialidades
          </a>
          <a
            href="#medicos"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-stone-800 hover:bg-stone-50"
          >
            Médicos
          </a>
          <a
            href="#unidades"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-stone-800 hover:bg-stone-50"
          >
            Unidades
          </a>
          <a
            href="#sobre"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-stone-800 hover:bg-stone-50"
          >
            Sobre
          </a>
          <a
            href="#contato"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-stone-800 hover:bg-stone-50"
          >
            Contato
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
              className="w-full bg-stone-900 text-white font-semibold py-3 rounded-full text-center text-sm"
            >
              Agendar Consulta
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenSearch(); }}
              className="w-full border border-stone-300 text-stone-800 font-semibold py-3 rounded-full text-center text-sm flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4" /> Encontrar Médico
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
