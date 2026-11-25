import React from 'react';
import { Award, Clock, MapPin, Sparkles } from 'lucide-react';
import { DIFFERENTIALS } from '@/data/studio';

const ICONS = [Award, Clock, MapPin, Sparkles];

export function DifferentialsStrip() {
  return (
    <section
      aria-label="Diferenciais do Studio Jonatan Camargo"
      className="bg-[#14171C] border-b border-white/10 py-14 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal-group grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIFFERENTIALS.map((item, idx) => {
            const Icon = ICONS[idx];
            return (
              <article
                key={item.title}
                className="reveal-card rounded-xl border border-white/10 bg-[#0D0F12]/60 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#00B5E2]/10 text-[#00B5E2] border border-[#00B5E2]/20 mb-4">
                    <Icon className="w-5 h-5 stroke-[1.8]" aria-hidden="true" />
                  </div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#F37021]">
                    {item.eyebrow}
                  </p>
                  <h2 className="mt-1.5 font-display text-lg font-bold text-white">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
