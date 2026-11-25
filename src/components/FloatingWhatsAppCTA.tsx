'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { STUDIO_INFO } from '@/data/studio';

export function FloatingWhatsAppCTA() {
  return (
    <aside
      aria-label="Atendimento rápido via WhatsApp"
      className="fixed bottom-5 right-5 z-40"
    >
      <a
        href={STUDIO_INFO.whatsappDefaultUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-auto sm:px-5 sm:h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/25 transition-transform active:scale-95 duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B5E2]"
        aria-label="Agendar aula pelo WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-200" />
        </span>
        <MessageCircle
          className="w-6 h-6 sm:w-5 sm:h-5 sm:mr-2 stroke-[2.2]"
          aria-hidden="true"
        />
        <span className="hidden sm:inline text-xs font-semibold uppercase tracking-[0.14em]">
          WhatsApp
        </span>
      </a>
    </aside>
  );
}
