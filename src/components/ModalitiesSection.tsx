import React from 'react';
import { ArrowRight } from 'lucide-react';
import { MODALITIES, buildWhatsAppUrl } from '@/data/studio';

export function ModalitiesSection() {
  return (
    <section
      id="modalidades"
      className="bg-[#F5F7F9] text-[#0D0F12] py-20 sm:py-24 border-b border-slate-900/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00B5E2]">
              7 Modalidades Oficiais
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight leading-[0.98] text-[#0D0F12]">
              Ritmo, força e energia coletiva em cada treino.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-slate-600 leading-relaxed">
            Do pelotão intenso de Ciclismo Indoor ao controle corporal do
            Pilates e treinos licenciados Les Mills — escolha a modalidade que
            combina com seu objetivo.
          </p>
        </div>

        {/* Asymmetric Editorial Bento Grid */}
        <div className="reveal-group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MODALITIES.map((item) => {
            const waUrl = buildWhatsAppUrl(
              `Olá, Studio Jonatan Camargo! Gostaria de agendar uma aula de ${item.name}.`
            );

            return (
              <article
                key={item.id}
                className={`reveal-card group overflow-hidden rounded-xl border border-slate-900/10 bg-white flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 ${
                  item.featured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div
                  className={`relative overflow-hidden bg-[#0D0F12] ${
                    item.featured ? 'h-64 sm:h-80' : 'h-56'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#0D0F12]/80 via-[#0D0F12]/15 to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white shadow-sm"
                      style={{ backgroundColor: item.badgeColor }}
                    >
                      {item.tag}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#0D0F12]">
                        {item.name}
                      </h3>
                      <span
                        className="h-2.5 w-2.5 rounded-full shrink-0"
                        style={{ backgroundColor: item.badgeColor }}
                        aria-hidden="true"
                      />
                    </div>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-900/10 flex items-center justify-between gap-4">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                      {item.focus}
                    </span>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#0D0F12] hover:text-[#F37021] transition-colors py-1 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B5E2] rounded"
                    >
                      <span>Agendar</span>
                      <ArrowRight
                        className="w-3.5 h-3.5 stroke-[2]"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
