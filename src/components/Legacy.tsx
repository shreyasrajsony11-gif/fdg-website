"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionLabel } from "./SectionLabel";
import { SplitTextReveal } from "./SplitTextReveal";
import { ScrollAnimate } from "./ScrollAnimate";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  { year: "1997", text: "Founded in Sadashiv Peth, Pune" },
  { year: "2000", text: "First landmark project: Paud Road, Pune (Bandal Builders)" },
  { year: "2004", text: "Fundoo World Amusement Park, Delhi NCR" },
  { year: "2008", text: "International expansion begins" },
  { year: "2013", text: "Imagica World \u2014 India's first international-standard theme park" },
  { year: "2017", text: "Aquasplash Water Park, Kinshasa, DRC, Africa" },
  { year: "2022", text: "Silver Jubilee: 25 Years, 1,000+ Projects" },
  { year: "2025", text: "250+ professionals, 30M+ sq. ft. designed" },
];

export function Legacy() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineLineRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the vertical gold line
      gsap.fromTo(
        timelineLineRef.current,
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 80%",
            scrub: 1,
          },
        }
      );

      // Animate each node
      nodesRef.current.forEach((node) => {
        if (!node) return;
        gsap.fromTo(
          node,
          { opacity: 0, x: 30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: node,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="legacy"
      className="bg-fdg-black py-section-mobile lg:py-section"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Sticky */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionLabel text="Our Story" />
            <div className="mt-6">
              <SplitTextReveal
                text={"From 100 Square Feet\nto 30 Million."}
                tag="h2"
                className="font-cormorant font-light italic text-fdg-text leading-[1.1] text-[clamp(36px,5vw,64px)]"
              />
            </div>
            <ScrollAnimate className="mt-8">
              <p className="font-dm font-light text-base text-fdg-text-secondary leading-[1.7] max-w-[620px]">
                In 1997, Architect Nitin Waghmare founded Fourth Dimension Group from a
                modest 300 sq. ft. office in Sadashiv Peth, Pune. What began as a singular
                vision has grown into one of India&apos;s most trusted end-to-end design
                consultancies \u2014 with over 250 multidisciplinary professionals delivering
                architecture, engineering, interiors, and project management under one roof.
              </p>
            </ScrollAnimate>
            <ScrollAnimate className="mt-8" delay={0.2}>
              <p className="font-dm font-light text-base text-fdg-text-secondary leading-[1.7] max-w-[620px]">
                From private residences to 52,000 sq. m. theme parks, from Pune to Africa
                and Southeast Asia \u2014 FDG has shaped over 30 million square feet of built
                environment, earning the trust of India&apos;s most demanding clients.
              </p>
            </ScrollAnimate>
            <ScrollAnimate className="mt-10" delay={0.3}>
              <div className="w-16 h-px bg-fdg-gold mb-4" />
              <p className="font-dm text-sm text-fdg-text">
                <span className="text-fdg-gold">Architect Nitin Waghmare</span>
                <br />
                <span className="text-fdg-text-secondary">Founder & Managing Director</span>
              </p>
            </ScrollAnimate>
          </div>

          {/* Right Column - Timeline */}
          <div className="relative pl-8 lg:pl-12">
            {/* Vertical Line */}
            <div
              ref={timelineLineRef}
              className="absolute left-0 top-0 bottom-0 w-px bg-fdg-gold"
              style={{ transform: "scaleY(0)" }}
            />

            <div className="space-y-12">
              {milestones.map((milestone, i) => (
                <div
                  key={i}
                  ref={(el) => { nodesRef.current[i] = el; }}
                  className="relative opacity-0"
                >
                  {/* Gold Dot */}
                  <div className="absolute -left-8 lg:-left-12 top-2 w-3 h-3 rounded-full bg-fdg-gold border-2 border-fdg-black" />

                  <span className="font-cormorant text-3xl lg:text-4xl font-light text-fdg-gold block mb-2">
                    {milestone.year}
                  </span>
                  <p className="font-dm text-sm text-fdg-text-secondary leading-relaxed">
                    {milestone.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
