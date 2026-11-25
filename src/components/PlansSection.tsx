import React from 'react';
import { ArrowRight, CheckCircle2, CreditCard } from 'lucide-react';
import { PACKAGES, buildWhatsAppUrl } from '@/data/studio';

export function PlansSection() {
  return (
    <section
      id="planos"
      className="bg-[#F5F7F9] text-[#0D0F12] py-20 sm:py-24 border-b border-slate-900/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00B5E2]">
              Aulas Avulsas & Pacotes
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight leading-[0.98] text-[#0D0F12]">
              Transparência total para começar hoje.
            </h2>
          </div>

          <div className="inline-flex items-center gap-2.5 rounded-xl border border-slate-900/10 bg-white px-4 py-3 text-xs font-medium text-slate-700">
            <CreditCard
              className="w-4 h-4 text-[#00B5E2] stroke-[1.8]"
              aria-hidden="true"
            />
            <span>Crédito, Débito e Aproximação (NFC) no Studio</span>
          </div>
        </div>

        <div className="reveal-group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PACKAGES.map((pkg) => {
            const waUrl = buildWhatsAppUrl(pkg.whatsappMessage);
            const isFeatured = Boolean(pkg.featured);

            return (
              <article
                key={pkg.id}
                className={`reveal-card relative rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 ${
                  isFeatured
                    ? 'bg-[#0D0F12] text-white border-2 border-[#00B5E2]'
                    : 'bg-white text-[#0D0F12] border border-slate-900/10'
                }`}
              >
                {pkg.badge && (
                  <span className="absolute -top-3 left-6 inline-flex items-center rounded-full bg-[#00B5E2] text-[#0D0F12] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em]">
                    {pkg.badge}
                  </span>
                )}

                <div>
                  <p
                    className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${
                      isFeatured ? 'text-[#00B5E2]' : 'text-slate-500'
                    }`}
                  >
                    {pkg.totalClasses}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold uppercase tracking-tight leading-snug">
                    {pkg.name}
                  </h3>
                  <p
                    className={`mt-2 text-xs leading-relaxed ${
                      isFeatured ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {pkg.subtitle}
                  </p>

                  <div className="mt-6 pt-6 border-t border-current/10">
                    <div className="font-display text-3xl sm:text-4xl font-bold tabular-nums tracking-tight">
                      {pkg.price}
                    </div>
                    <p
                      className={`mt-1.5 text-xs tabular-nums ${
                        isFeatured ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {pkg.perClassNote}
                    </p>
                  </div>

                  <ul className="mt-5 space-y-2.5 text-xs">
                    <li className="flex items-center gap-2">
                      <CheckCircle2
                        className="w-4 h-4 shrink-0 text-[#00B5E2] stroke-[1.8]"
                        aria-hidden="true"
                      />
                      <span>{pkg.validity}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2
                        className="w-4 h-4 shrink-0 text-[#00B5E2] stroke-[1.8]"
                        aria-hidden="true"
                      />
                      <span>Reserva rápida via WhatsApp</span>
                    </li>
                  </ul>
                </div>

                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] transition-colors min-h-[46px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B5E2] ${
                    isFeatured
                      ? 'bg-[#F37021] hover:bg-[#df6218] text-white'
                      : 'bg-[#0D0F12] hover:bg-[#1e232b] text-white'
                  }`}
                >
                  <span>{pkg.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4 stroke-[2]" aria-hidden="true" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
