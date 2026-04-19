"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionLabel } from "./SectionLabel";
import { SplitTextReveal } from "./SplitTextReveal";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    num: "01",
    title: "Multi-Disciplinary In-House",
    description:
      "The only firm in India that handles architecture, MEP, landscape, interiors, and PMC under one roof without outsourcing.",
  },
  {
    num: "02",
    title: "International Track Record",
    description:
      "Projects delivered in India, Africa, Malaysia, and beyond \u2014 meeting international quality benchmarks every time.",
  },
  {
    num: "03",
    title: "Post-Completion Support",
    description:
      'FDG doesn\'t disappear after handover. Clients like Mr. Fazal Manekia have attested to support "years down the line."',
  },
];

const stats = [
  { number: 28, suffix: "+", label: "Years" },
  { number: 1300, suffix: "+", label: "Projects" },
  { number: 250, suffix: "+", label: "Team Members" },
  { number: 30, suffix: "M+", label: "Sq. Ft." },
];

export function BenefitsAndStats() {
  const sectionRef = useRef<HTMLElement>(null);
  const benefitRefs = useRef<(HTMLDivElement | null)[]>([]);
  const statRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const statSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Benefit rows slide in
      benefitRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { x: i % 2 === 0 ? -60 : 60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Stat count up
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              statRefs.current.forEach((el) => {
                if (!el) return;
                const target = parseInt(el.getAttribute("data-target") || "0");
                gsap.fromTo(
                  el,
                  { textContent: "0" },
                  {
                    textContent: target,
                    duration: 2.5,
                    ease: "power2.out",
                    snap: { textContent: 1 },
                    onUpdate: function () {
                      el.textContent = Math.round(parseFloat(el.textContent || "0")).toString();
                    },
                  }
                );
              });
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.3 }
      );

      if (statSectionRef.current) observer.observe(statSectionRef.current);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-fdg-black py-section-mobile lg:py-section">
      {/* Part A - Benefits */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-24">
        <SectionLabel text="The FDG Difference" />
        <div className="mt-6 mb-16">
          <SplitTextReveal
            text="Built Different. By Design."
            tag="h2"
            className="font-cormorant font-light italic text-fdg-text leading-[1.1] text-[clamp(36px,5vw,64px)]"
          />
        </div>

        <div className="space-y-0">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              ref={(el) => { benefitRefs.current[i] = el; }}
              className="opacity-0 border-t border-fdg-gold/20 py-10 lg:py-14 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
            >
              <div className="lg:col-span-2">
                <span className="font-cormorant text-5xl lg:text-6xl font-light text-fdg-gold">
                  {benefit.num}
                </span>
              </div>
              <div className="lg:col-span-4">
                <h3 className="font-cormorant text-[clamp(24px,3vw,36px)] text-fdg-text font-normal">
                  {benefit.title}
                </h3>
              </div>
              <div className="lg:col-span-6">
                <p className="font-dm font-light text-base text-fdg-text-secondary leading-[1.7]">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
          <div className="border-t border-fdg-gold/20" />
        </div>
      </div>

      {/* Part B - Stat Wall */}
      <div
        ref={statSectionRef}
        className="bg-fdg-black-elevated py-20 lg:py-28"
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="flex items-baseline justify-center gap-1">
                  <span
                    ref={(el) => { statRefs.current[i] = el; }}
                    className="font-cormorant font-light text-fdg-gold text-[clamp(80px,12vw,140px)] leading-none"
                    data-target={stat.number}
                  >
                    0
                  </span>
                  <span className="font-cormorant font-light text-fdg-gold text-[clamp(30px,5vw,60px)]">
                    {stat.suffix}
                  </span>
                </div>
                <span className="font-dm text-xs uppercase tracking-ultra-wide text-fdg-text-secondary mt-2 block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
