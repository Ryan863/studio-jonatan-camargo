import React from 'react';
import { ArrowRight, Camera, Quote, Sparkles } from 'lucide-react';
import { STUDIO_INFO, TESTIMONIALS, buildWhatsAppUrl } from '@/data/studio';

export function ExperiencesSection() {
  const eventWaUrl = buildWhatsAppUrl(
    'Olá, Studio Jonatan Camargo! Quero saber sobre os próximos aulões temáticos e eventos como o Energy Bike.'
  );

  return (
    <section
      id="experiencias"
      className="bg-[#0D0F12] text-white py-20 sm:py-24 border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Energy Bike Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 relative overflow-hidden rounded-xl border border-white/10 bg-[#14171C]">
            <img
              src="/images/evento-energy-bike.jpg"
              alt="Evento Energy Bike do Studio Jonatan Camargo reunindo pelotão de ciclismo indoor"
              className="w-full h-[300px] sm:h-[420px] object-cover object-center"
              loading="lazy"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#0D0F12] via-[#0D0F12]/25 to-transparent"
              aria-hidden="true"
            />
            <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#F37021] text-white px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em]">
                <Sparkles className="w-3.5 h-3.5 stroke-[2]" aria-hidden="true" />
                Energy Bike • Aeroporto de Concórdia
              </span>
              <span className="font-display text-sm sm:text-base font-bold uppercase tracking-wider text-white tabular-nums">
                +150 Alunos em Pelotão
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00B5E2]">
              Comunidade & Eventos Exclusivos
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight leading-[1.0] text-white">
              Muito além de uma sala de treino.
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300">
              No Studio Jonatan Camargo, a energia coletiva sai das paredes do
              Centro para tomar conta da cidade — como no histórico{' '}
              <strong className="text-white">
                Energy Bike no Aeroporto de Concórdia
              </strong>
              , reunindo mais de 150 alunos em uma noite inesquecível de música,
              luz e superação.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href={eventWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F37021] hover:bg-[#df6218] text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] transition-colors min-h-[46px]"
              >
                <span>Próximos Aulões</span>
                <ArrowRight className="w-4 h-4 stroke-[2]" aria-hidden="true" />
              </a>
              <a
                href={STUDIO_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] transition-colors min-h-[46px]"
              >
                <Camera
                  className="w-4 h-4 text-[#00B5E2] stroke-[1.8]"
                  aria-hidden="true"
                />
                <span>{STUDIO_INFO.instagramHandle}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Social Proof from Instagram */}
        <div className="mt-16 pt-14 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F37021]">
                Prova Social Real • {STUDIO_INFO.instagramFollowers}
              </p>
              <h3 className="mt-1.5 font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">
                Quem treina aqui sente a diferença.
              </h3>
            </div>
            <a
              href={STUDIO_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-[#00B5E2] hover:underline"
            >
              Ver mais no Instagram →
            </a>
          </div>

          <div className="reveal-group grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t) => (
              <blockquote
                key={t.handle}
                className="reveal-card rounded-xl border border-white/10 bg-[#14171C] p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <Quote
                    className="w-7 h-7 text-[#00B5E2] mb-4 stroke-[1.8]"
                    aria-hidden="true"
                  />
                  <p className="font-display text-lg sm:text-xl font-medium leading-snug text-white">
                    “{t.quote}”
                  </p>
                </div>
                <footer className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="font-bold text-[#00B5E2]">{t.handle}</span>
                  <span className="text-slate-400">{t.context}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
