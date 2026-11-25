import React from 'react';
import { ArrowRight, CalendarDays } from 'lucide-react';
import { STUDIO_INFO } from '@/data/studio';

const HERO_METRICS = [
  { value: '+40', label: 'Horários Semanais' },
  { value: 'Les Mills', label: 'Credenciado Oficial' },
  { value: '7', label: 'Modalidades Coletivas' },
  { value: '+150', label: 'Alunos no Energy Bike' },
];

export function HeroSection() {
  return (
    <section
      id="topo"
      className="relative min-h-[90svh] flex flex-col justify-between overflow-hidden bg-[#0D0F12] border-b border-white/10"
    >
      {/* Background Photography: Desktop vs Mobile */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-desktop.webp"
          alt="Studio Jonatan Camargo com bikes de ciclismo indoor e iluminação em azul ciano e laranja"
          className="hidden md:block h-full w-full object-cover object-center"
        />
        <img
          src="/images/hero-mobile.webp"
          alt="Studio Jonatan Camargo em Concórdia com bicicletas de ciclismo indoor"
          className="block md:hidden h-full w-full object-cover object-center"
        />
        {/* Sculpted editorial scrim preserving contrast on left & bottom while revealing the studio */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0D0F12]/95 via-[#0D0F12]/78 to-[#0D0F12]/35"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0D0F12] via-transparent to-[#0D0F12]/45"
          aria-hidden="true"
        />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-12 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          <div className="hero-reveal inline-flex items-center gap-2.5 rounded-full border border-[#00B5E2]/40 bg-[#0D0F12]/70 backdrop-blur-sm px-4 py-1.5 mb-6">
            <span className="h-2 w-2 rounded-full bg-[#00B5E2]" aria-hidden="true" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#00B5E2]">
              O Maior Studio de Ciclismo Indoor de Concórdia • Credenciado Les Mills
            </span>
          </div>

          <h1 className="hero-reveal font-display text-4xl sm:text-6xl lg:text-[4.5rem] font-bold uppercase tracking-tight leading-[0.96] text-white">
            Aulas coletivas para{' '}
            <span className="text-[#00B5E2]">transformar</span> sua rotina.
          </h1>

          <p className="hero-reveal mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-200">
            Estrutura renovada no Centro de Concórdia com mais de 40 horários
            semanais de Bike, BodyPump, Core, PowerJump, Funcional, Pilates e
            Step.
          </p>

          <div className="hero-reveal mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <a
              href={STUDIO_INFO.whatsappDefaultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#F37021] hover:bg-[#df6218] text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] transition-colors min-h-[48px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B5E2]"
            >
              <span>Agendar Aula Experimental</span>
              <ArrowRight className="w-4 h-4 stroke-[2]" aria-hidden="true" />
            </a>

            <a
              href="#horarios"
              className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] transition-colors min-h-[48px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B5E2]"
            >
              <CalendarDays
                className="w-4 h-4 text-[#00B5E2] stroke-[1.8]"
                aria-hidden="true"
              />
              <span>Ver Grade de Horários</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Metrics Strip */}
      <div className="relative z-10 border-t border-white/10 bg-[#0D0F12]/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {HERO_METRICS.map((metric) => (
              <div
                key={metric.label}
                className="hero-reveal border-l border-white/15 pl-4"
              >
                <dt className="text-[11px] font-medium uppercase tracking-[0.14em] text-slate-400">
                  {metric.label}
                </dt>
                <dd className="mt-1 font-display text-xl sm:text-2xl font-bold text-white tabular-nums">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
