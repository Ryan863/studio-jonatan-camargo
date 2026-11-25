'use client';

import React, { useState, useMemo } from 'react';
import { ArrowRight, Calendar, Clock, Info } from 'lucide-react';
import {
  WEEKLY_SCHEDULE,
  MODALITY_COLORS,
  ModalityId,
  buildWhatsAppUrl,
} from '@/data/studio';

const LEGEND_ITEMS: { label: string; color: string }[] = [
  { label: 'Bike', color: '#00B5E2' },
  { label: 'BodyPump / PowerJump', color: '#E0483E' },
  { label: 'Les Mills Core', color: '#3F4652' },
  { label: 'Treino Funcional', color: '#65A30D' },
  { label: 'Pilates', color: '#D98A2B' },
];

export function ScheduleSection() {
  const [selectedDayId, setSelectedDayId] = useState<string>('segunda');
  const [selectedModality, setSelectedModality] = useState<
    ModalityId | 'all'
  >('all');

  const activeDay = useMemo(
    () =>
      WEEKLY_SCHEDULE.find((d) => d.id === selectedDayId) ?? WEEKLY_SCHEDULE[0],
    [selectedDayId]
  );

  const dayModalities = useMemo(() => {
    const seen = new Map<ModalityId, string>();
    for (const slot of activeDay.slots) {
      if (!seen.has(slot.modalityId)) {
        seen.set(slot.modalityId, slot.modalityLabel);
      }
    }
    return Array.from(seen.entries()).map(([id, label]) => ({ id, label }));
  }, [activeDay]);

  const filteredSlots = useMemo(() => {
    if (selectedModality === 'all') return activeDay.slots;
    return activeDay.slots.filter((s) => s.modalityId === selectedModality);
  }, [activeDay, selectedModality]);

  const handleDayChange = (dayId: string) => {
    setSelectedDayId(dayId);
    setSelectedModality('all');
  };

  return (
    <section
      id="horarios"
      className="bg-white text-[#0D0F12] py-20 sm:py-24 border-b border-slate-900/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F37021]">
              Grade Oficial • +40 Horários Semanais
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight leading-[0.98] text-[#0D0F12]">
              Escolha o seu horário na semana.
            </h2>
          </div>

          {/* Color Legend */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {LEGEND_ITEMS.map((item) => (
              <div key={item.label} className="inline-flex items-center gap-2">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: item.color }}
                  aria-hidden="true"
                />
                <span className="text-xs font-medium text-slate-600">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Day of Week Tabs */}
        <div
          role="tablist"
          aria-label="Dias da semana"
          className="flex gap-2 overflow-x-auto pb-3 mb-6"
        >
          {WEEKLY_SCHEDULE.map((day) => {
            const isSelected = day.id === activeDay.id;
            return (
              <button
                key={day.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => handleDayChange(day.id)}
                className={`inline-flex items-center gap-2 shrink-0 min-h-[44px] px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-[0.14em] transition-colors border focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B5E2] ${
                  isSelected
                    ? 'bg-[#0D0F12] text-white border-[#0D0F12]'
                    : 'bg-[#F5F7F9] text-slate-700 border-slate-900/10 hover:bg-slate-200/70'
                }`}
              >
                <span className="hidden sm:inline">{day.label}</span>
                <span className="sm:hidden">{day.shortLabel}</span>
                <span
                  className={`tabular-nums rounded-full px-2 py-0.5 text-[10px] font-bold ${
                    isSelected
                      ? 'bg-[#00B5E2] text-[#0D0F12]'
                      : 'bg-white text-slate-600'
                  }`}
                >
                  {day.slots.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Modality Filter Pills for Selected Day */}
        {dayModalities.length > 1 && (
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <button
              type="button"
              onClick={() => setSelectedModality('all')}
              className={`min-h-[36px] px-3.5 py-1.5 rounded-lg text-[11px] font-semibold uppercase tracking-[0.12em] border transition-colors ${
                selectedModality === 'all'
                  ? 'bg-[#00B5E2] text-[#0D0F12] border-[#00B5E2]'
                  : 'bg-white text-slate-600 border-slate-900/10 hover:border-slate-900/30'
              }`}
            >
              Todas ({activeDay.slots.length})
            </button>
            {dayModalities.map((mod) => (
              <button
                key={mod.id}
                type="button"
                onClick={() => setSelectedModality(mod.id)}
                className={`min-h-[36px] px-3.5 py-1.5 rounded-lg text-[11px] font-semibold uppercase tracking-[0.12em] border transition-colors ${
                  selectedModality === mod.id
                    ? 'bg-[#0D0F12] text-white border-[#0D0F12]'
                    : 'bg-white text-slate-600 border-slate-900/10 hover:border-slate-900/30'
                }`}
              >
                {mod.label}
              </button>
            ))}
          </div>
        )}

        {/* Weekend Special Notice */}
        {activeDay.isWeekend && (
          <div className="mb-6 flex items-start gap-3 rounded-xl border border-[#F37021]/30 bg-[#F37021]/8 px-4 py-3.5 text-sm text-[#0D0F12]">
            <Info
              className="w-5 h-5 text-[#F37021] shrink-0 mt-0.5 stroke-[1.8]"
              aria-hidden="true"
            />
            <p>
              <strong>Horário especial de fim de semana:</strong> as aulas de{' '}
              {activeDay.label} possuem contratação separada (plano/aula avulsa
              de fim de semana — R$ 39,90).
            </p>
          </div>
        )}

        {/* Timetable List */}
        <div
          role="tabpanel"
          aria-label={`Horários de ${activeDay.label}`}
          className="divide-y divide-slate-900/10 rounded-xl border border-slate-900/10 bg-[#F5F7F9]/60 overflow-hidden"
        >
          {filteredSlots.map((slot, index) => {
            const color = MODALITY_COLORS[slot.modalityId];
            const waUrl = buildWhatsAppUrl(
              `Olá, Studio Jonatan Camargo! Gostaria de reservar o horário de ${slot.time} (${slot.modalityLabel}) na ${activeDay.label}.`
            );

            return (
              <div
                key={`${activeDay.id}-${slot.time}-${slot.modalityId}-${index}`}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-5 sm:px-7 py-4 bg-white hover:bg-[#F5F7F9]/70 transition-colors"
              >
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="inline-flex items-center gap-2 min-w-[84px]">
                    <Clock
                      className="w-4 h-4 text-slate-400 stroke-[1.8]"
                      aria-hidden="true"
                    />
                    <span className="font-display text-lg sm:text-xl font-bold text-[#0D0F12] tabular-nums">
                      {slot.time}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5">
                    <span
                      className="inline-flex items-center rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-[0.12em] text-white"
                      style={{ backgroundColor: color }}
                    >
                      {slot.modalityLabel}
                    </span>
                    {activeDay.isWeekend && (
                      <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#F37021]">
                        Fim de Semana
                      </span>
                    )}
                  </div>
                </div>

                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-900/15 bg-white hover:bg-[#0D0F12] hover:text-white hover:border-[#0D0F12] text-[#0D0F12] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] transition-colors min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B5E2]"
                >
                  <span>Reservar este horário</span>
                  <ArrowRight
                    className="w-3.5 h-3.5 stroke-[2]"
                    aria-hidden="true"
                  />
                </a>
              </div>
            );
          })}
        </div>

        <p className="mt-4 flex items-center gap-2 text-xs text-slate-500">
          <Calendar className="w-3.5 h-3.5 stroke-[1.8]" aria-hidden="true" />
          <span>
            Observação: aulas de Sábado e Domingo seguem contratação em
            plano/avulso específico de fim de semana.
          </span>
        </p>
      </div>
    </section>
  );
}
