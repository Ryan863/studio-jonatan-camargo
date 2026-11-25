import React from 'react';
import {
  Camera,
  Clock,
  CreditCard,
  Mail,
  MapPin,
  Navigation,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import { OPENING_HOURS, STUDIO_INFO } from '@/data/studio';
import { StudioLogo } from './StudioLogo';

export function LocationFooterSection() {
  return (
    <>
      {/* Localização & Mapa Interativo */}
      <section
        id="contato"
        className="bg-[#F5F7F9] text-[#0D0F12] py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00B5E2]">
              Localização & Atendimento
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight leading-[0.98] text-[#0D0F12]">
              Estrutura renovada no Centro de Concórdia.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-xl border border-slate-900/10 bg-white overflow-hidden">
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between gap-8">
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#00B5E2]/12 text-[#00B5E2] shrink-0">
                    <MapPin className="w-5 h-5 stroke-[1.8]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold uppercase tracking-wide text-[#0D0F12]">
                      Endereço Oficial
                    </h3>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                      {STUDIO_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#F37021]/12 text-[#F37021] shrink-0">
                    <Clock className="w-5 h-5 stroke-[1.8]" aria-hidden="true" />
                  </div>
                  <div className="w-full">
                    <h3 className="font-display text-base font-bold uppercase tracking-wide text-[#0D0F12]">
                      Horários de Atendimento
                    </h3>
                    <dl className="mt-2.5 space-y-2 text-xs sm:text-sm">
                      {OPENING_HOURS.map((item) => (
                        <div
                          key={item.day}
                          className="flex flex-col sm:flex-row sm:justify-between gap-0.5 border-b border-slate-900/10 pb-1.5"
                        >
                          <dt className="font-semibold text-[#0D0F12]">
                            {item.day}
                          </dt>
                          <dd className="text-slate-600 tabular-nums sm:text-right">
                            {item.hours}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>

                {/* Infrastructure Badges */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#F5F7F9] border border-slate-900/10 px-3 py-1.5 text-xs font-medium text-slate-700">
                    <ShieldCheck
                      className="w-3.5 h-3.5 text-[#00B5E2] stroke-[1.8]"
                      aria-hidden="true"
                    />
                    Banheiros & Vestiários
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#F5F7F9] border border-slate-900/10 px-3 py-1.5 text-xs font-medium text-slate-700">
                    <CreditCard
                      className="w-3.5 h-3.5 text-[#F37021] stroke-[1.8]"
                      aria-hidden="true"
                    />
                    Crédito, Débito & NFC
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={STUDIO_INFO.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#0D0F12] hover:bg-[#1d2229] text-white px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] transition-colors min-h-[46px]"
                >
                  <Navigation className="w-4 h-4 stroke-[1.8]" aria-hidden="true" />
                  <span>Traçar Rota GPS</span>
                </a>
                <a
                  href={STUDIO_INFO.whatsappDefaultUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#F37021] hover:bg-[#df6218] text-white px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] transition-colors min-h-[46px]"
                >
                  <Phone className="w-4 h-4 stroke-[1.8]" aria-hidden="true" />
                  <span>Chamar no WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Maps */}
            <div className="lg:col-span-7 min-h-[340px] sm:min-h-[420px] bg-slate-200 border-t lg:border-t-0 lg:border-l border-slate-900/10">
              <iframe
                title="Mapa de localização do Studio Jonatan Camargo no Centro de Concórdia - SC"
                src={STUDIO_INFO.mapsEmbedUrl}
                className="w-full h-full min-h-[340px] sm:min-h-[420px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Dark Footer */}
      <footer className="bg-[#0D0F12] text-slate-300 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-white/10">
            <div className="md:col-span-5 space-y-4">
              <StudioLogo variant="footer" />
              <p className="max-w-sm text-sm leading-relaxed text-slate-400">
                O maior studio de ciclismo indoor de Concórdia e centro de aulas
                coletivas credenciado oficialmente pela Les Mills.
              </p>
            </div>

            <div className="md:col-span-3 space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
                Navegação
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#modalidades"
                    className="hover:text-[#00B5E2] transition-colors"
                  >
                    Modalidades
                  </a>
                </li>
                <li>
                  <a
                    href="#horarios"
                    className="hover:text-[#00B5E2] transition-colors"
                  >
                    Grade de Horários
                  </a>
                </li>
                <li>
                  <a
                    href="#planos"
                    className="hover:text-[#00B5E2] transition-colors"
                  >
                    Aulas Avulsas & Pacotes
                  </a>
                </li>
                <li>
                  <a
                    href="#experiencias"
                    className="hover:text-[#00B5E2] transition-colors"
                  >
                    Energy Bike & Depoimentos
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-4 space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
                Contato & Redes
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a
                    href={STUDIO_INFO.whatsappDefaultUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-[#00B5E2] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#00B5E2]" aria-hidden="true" />
                    <span>WhatsApp: {STUDIO_INFO.whatsappDisplay}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${STUDIO_INFO.email}`}
                    className="inline-flex items-center gap-2 hover:text-[#00B5E2] transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#00B5E2]" aria-hidden="true" />
                    <span>{STUDIO_INFO.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={STUDIO_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-[#00B5E2] transition-colors"
                  >
                    <Camera
                      className="w-4 h-4 text-[#F37021]"
                      aria-hidden="true"
                    />
                    <span>
                      {STUDIO_INFO.instagramHandle} • Fundador:{' '}
                      {STUDIO_INFO.founderHandle}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={STUDIO_INFO.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    Facebook: {STUDIO_INFO.facebookLabel}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
            <p>
              {STUDIO_INFO.legalName} • CNPJ: {STUDIO_INFO.cnpj}
            </p>
            <p>{STUDIO_INFO.address}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
