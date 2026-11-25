'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { StudioLogo } from './StudioLogo';
import { STUDIO_INFO } from '@/data/studio';

const NAV_LINKS = [
  { href: '#modalidades', label: 'Modalidades' },
  { href: '#horarios', label: 'Horários' },
  { href: '#planos', label: 'Planos' },
  { href: '#experiencias', label: 'Experiências' },
  { href: '#contato', label: 'Contato' },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0D0F12]/90 backdrop-blur-md border-b border-white/10">
      {/* Topbar discreta */}
      <div className="border-b border-white/10 bg-[#0D0F12] px-4 py-1.5 text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-300">
          Credenciado Oficial Les Mills{' '}
          <span className="text-[#00B5E2] mx-1.5">•</span> +40 Horários
          Semanais <span className="text-[#F37021] mx-1.5">•</span> Centro,
          Concórdia - SC
        </p>
      </div>

      {/* Navbar editorial */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16 sm:h-[72px]">
        <a
          href="#topo"
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B5E2] rounded-lg"
          aria-label="Ir para o topo - Studio Jonatan Camargo"
        >
          <StudioLogo variant="navbar" />
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden lg:flex items-center gap-7"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-300 hover:text-white transition-colors py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B5E2] rounded"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={STUDIO_INFO.whatsappDefaultUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-[#F37021] hover:bg-[#df6218] text-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B5E2]"
          >
            <span>Agendar Aula</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2]" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center min-w-[44px] min-h-[44px] rounded-xl border border-white/15 bg-white/5 text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B5E2]"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X className="w-5 h-5 stroke-[1.8]" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5 stroke-[1.8]" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Fullscreen Mobile Drawer */}
      {menuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu móvel"
          className="fixed inset-0 top-[97px] z-50 flex flex-col justify-between bg-[#0D0F12] px-6 py-8 lg:hidden overflow-y-auto"
        >
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between min-h-[52px] border-b border-white/10 font-display text-2xl font-bold uppercase tracking-tight text-white hover:text-[#00B5E2] transition-colors"
              >
                <span>{link.label}</span>
                <ArrowRight
                  className="w-5 h-5 text-[#00B5E2] stroke-[1.8]"
                  aria-hidden="true"
                />
              </a>
            ))}
          </nav>

          <div className="pt-8 space-y-4">
            <a
              href={STUDIO_INFO.whatsappDefaultUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#F37021] hover:bg-[#df6218] text-white px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] transition-colors min-h-[48px]"
            >
              <span>Agendar Aula Experimental</span>
              <ArrowRight className="w-4 h-4 stroke-[2]" aria-hidden="true" />
            </a>
            <p className="text-center text-xs text-slate-400">
              {STUDIO_INFO.shortAddress} • {STUDIO_INFO.whatsappDisplay}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
