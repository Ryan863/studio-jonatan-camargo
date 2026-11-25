import React from 'react';

interface StudioLogoProps {
  variant?: 'navbar' | 'footer';
}

export function StudioLogo({ variant = 'navbar' }: StudioLogoProps) {
  const isFooter = variant === 'footer';

  return (
    <div className="inline-flex items-center gap-3 select-none">
      {/* Remastered crisp vector emblem matching the original cyan identity */}
      <div
        className={`relative flex flex-col justify-center bg-[#00B5E2] text-white shrink-0 overflow-hidden border border-white/15 ${
          isFooter ? 'w-12 h-12 rounded-xl px-1.5' : 'w-10 h-10 rounded-lg px-1'
        }`}
        aria-hidden="true"
      >
        <span
          className={`font-brand uppercase tracking-[0.14em] leading-none font-normal text-white/95 ${
            isFooter ? 'text-[5.5px] mb-[1px]' : 'text-[4.5px] mb-[1px]'
          }`}
        >
          STUDIO
        </span>
        <span
          className={`font-brand font-black italic uppercase leading-[0.88] tracking-tighter ${
            isFooter ? 'text-[9.5px]' : 'text-[8px]'
          }`}
        >
          JONATAN
          <br />
          CAMARGO
        </span>
        <span
          className={`font-brand font-light leading-none text-right text-white/90 mt-[1px] ${
            isFooter ? 'text-[3.5px]' : 'text-[3px]'
          }`}
        >
          Credenciado LesMills
        </span>
      </div>

      <div className="flex flex-col leading-none">
        <span className="font-display text-sm sm:text-base font-bold uppercase tracking-[0.06em] text-white">
          Studio Jonatan Camargo
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#00B5E2] mt-1">
          Credenciado Les Mills
        </span>
      </div>
    </div>
  );
}
