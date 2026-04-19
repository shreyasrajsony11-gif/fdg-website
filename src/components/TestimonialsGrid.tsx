"use client";

import { SectionLabel } from "./SectionLabel";
import { SplitTextReveal } from "./SplitTextReveal";
import { ScrollAnimate } from "./ScrollAnimate";

const testimonials = [
  {
    name: "Mr. Nilesh Bandal",
    title: "Bandal Builders",
    quote:
      "FDG has been our go-to design partner since their founding days. Their growth mirrors the quality they bring \u2014 consistent, reliable, and always evolving.",
  },
  {
    name: "Mr. Hemant Watve",
    title: "Wilo Mather & Platt",
    quote:
      "Our manufacturing facility demanded precision engineering and architectural finesse. FDG delivered both without compromise, on schedule and within budget.",
  },
  {
    name: "Mr. Rajesh Khursija",
    title: "Fundoo World Entertainment",
    quote:
      "Building an amusement park requires imagination and engineering rigor in equal measure. FDG brought both to our Delhi NCR project with exceptional professionalism.",
  },
  {
    name: "Mr. Datuk Zool Hilmi",
    title: "AGIBS Group, Malaysia",
    quote:
      "FDG's ability to work across international borders while maintaining their trademark quality made them the obvious choice for our Malaysian development.",
  },
  {
    name: "Mr. AjiKrishnan",
    title: "Wonderla Group",
    quote:
      "The scale and complexity of amusement park design requires a unique skill set. FDG proved they possess it \u2014 their attention to guest experience design is remarkable.",
  },
  {
    name: "Mr. Rajeev Jalnapukar",
    title: "CEO, Ramoji Film City",
    quote:
      "Working with FDG on Ramoji Film City's expansion was a masterclass in collaborative design. Their team integrates seamlessly with ours, every single time.",
  },
];

export function TestimonialsGrid() {
  return (
    <section className="bg-fdg-black-secondary py-section-mobile lg:py-section">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <SectionLabel text="More Voices" />
        <div className="mt-6 mb-16">
          <SplitTextReveal
            text={"Decades of Relationships,\nNot Just Projects"}
            tag="h2"
            className="font-cormorant font-light italic text-fdg-text leading-[1.1] text-[clamp(36px,5vw,64px)]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollAnimate key={i} animation="fadeUp" delay={i * 0.15}>
              <div className="bg-fdg-black-elevated p-8 lg:p-10 h-full flex flex-col rounded-fdg">
                <span className="font-cormorant text-[40px] leading-none text-fdg-gold/30 mb-4">
                  &ldquo;
                </span>
                <p className="font-dm font-light italic text-[15px] text-fdg-text leading-relaxed flex-1">
                  {t.quote}
                </p>
                <div className="mt-6 pt-6 border-t border-fdg-gold/10">
                  <p className="font-dm text-sm font-medium text-fdg-text">{t.name}</p>
                  <p className="font-dm text-xs text-fdg-gold mt-0.5">{t.title}</p>
                </div>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
}
