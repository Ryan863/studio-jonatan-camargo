'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from './Navbar';
import { HeroSection } from './HeroSection';
import { DifferentialsStrip } from './DifferentialsStrip';
import { ModalitiesSection } from './ModalitiesSection';
import { ScheduleSection } from './ScheduleSection';
import { PlansSection } from './PlansSection';
import { ExperiencesSection } from './ExperiencesSection';
import { LocationFooterSection } from './LocationFooterSection';
import { FloatingWhatsAppCTA } from './FloatingWhatsAppCTA';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function LandingPageClient() {
  const mainRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.hero-reveal', {
          y: 24,
          opacity: 0,
          duration: 0.75,
          stagger: 0.08,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
        });

        const groups = gsap.utils.toArray<HTMLElement>('.reveal-group');
        groups.forEach((group) => {
          const cards = group.querySelectorAll('.reveal-card');
          if (!cards.length) return;
          gsap.from(cards, {
            scrollTrigger: {
              trigger: group,
              start: 'top 85%',
              once: true,
            },
            y: 26,
            opacity: 0,
            duration: 0.65,
            stagger: 0.08,
            ease: 'power2.out',
            clearProps: 'transform,opacity',
          });
        });

        ScrollTrigger.refresh();
      });

      return () => mm.revert();
    },
    { scope: mainRef }
  );

  return (
    <div ref={mainRef} className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <DifferentialsStrip />
        <ModalitiesSection />
        <ScheduleSection />
        <PlansSection />
        <ExperiencesSection />
        <LocationFooterSection />
      </main>
      <FloatingWhatsAppCTA />
    </div>
  );
}
