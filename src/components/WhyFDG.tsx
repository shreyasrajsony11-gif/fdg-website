"use client";

import Image from "next/image";
import { SectionLabel } from "./SectionLabel";
import { SplitTextReveal } from "./SplitTextReveal";
import { ScrollAnimate } from "./ScrollAnimate";

const cards = [
  {
    icon: "\u2302",
    title: "End-to-End Under One Roof",
    body: "Architecture, interiors, landscape, MEP, structural, and project management all handled in-house. No agency chaos.",
  },
  {
    icon: "\u25B2",
    title: "Proven at Massive Scale",
    body: "30 million square feet. From private residences to 52,000 sq. m. theme parks. We don't just design \u2014 we deliver.",
  },
  {
    icon: "\u25CB",
    title: "On Time. On Budget. On Brief.",
    body: "Shapoorji Pallonji, Ramoji Film City, Wonderla \u2014 they return because results precede promises.",
  },
];

export function WhyFDG() {
  return (
    <section className="bg-fdg-black-secondary py-section-mobile lg:py-section">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <SectionLabel text="Why FDG" />
        <div className="mt-6">
          <SplitTextReveal
            text={"Every Discipline. One Team.\nZero Compromises."}
            tag="h2"
            className="font-cormorant font-light italic text-fdg-text leading-[1.1] text-[clamp(36px,5vw,64px)]"
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {cards.map((card, i) => (
            <ScrollAnimate key={i} animation="scaleIn" delay={i * 0.12}>
              <div className="bg-fdg-black-elevated border-t border-fdg-gold/30 p-8 lg:p-10 hover:-translate-y-2 hover:border-fdg-gold/60 transition-all duration-400 ease-fdg rounded-fdg group">
                <div className="mb-6 text-fdg-gold text-3xl">{card.icon}</div>
                <h3 className="font-cormorant text-[22px] text-fdg-text font-normal mb-3">
                  {card.title}
                </h3>
                <p className="font-dm font-light text-[15px] text-fdg-text-secondary leading-relaxed">
                  {card.body}
                </p>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>

      {/* Quote Strip */}
      <div className="relative mt-24 h-[400px] overflow-hidden">
        <Image
          src="/images/scale-strip.jpg"
          alt="FDG large-scale project"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-fdg-black/70" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <ScrollAnimate>
            <p className="font-cormorant font-light italic text-[clamp(24px,4vw,42px)] text-fdg-text text-center max-w-[900px] leading-snug">
              &ldquo;We don&apos;t just design buildings. We shape the places people
              remember.&rdquo;
            </p>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
}
