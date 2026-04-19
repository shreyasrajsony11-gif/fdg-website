"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionLabel } from "./SectionLabel";
import { SplitTextReveal } from "./SplitTextReveal";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    num: "01",
    title: "Architectural Design",
    description:
      "From conceptual sketches to construction drawings \u2014 our architectural team creates buildings that balance aesthetics, function, and environmental context with precision.",
    image: "/images/service-architecture.jpg",
  },
  {
    num: "02",
    title: "Interior Design",
    description:
      "Spaces that feel as good as they look. Our interiors team crafts environments that elevate the human experience through material, light, and spatial choreography.",
    image: "/images/service-interior.jpg",
  },
  {
    num: "03",
    title: "Landscape Architecture",
    description:
      "We design outdoor environments that complement built form \u2014 from corporate campus gardens to resort landscapes, blending nature with architecture seamlessly.",
    image: "/images/service-landscape.jpg",
  },
  {
    num: "04",
    title: "MEP Engineering",
    description:
      "Mechanical, electrical, and plumbing systems designed for efficiency, sustainability, and long-term performance. The invisible backbone of every great building.",
    image: "/images/service-mep.jpg",
  },
  {
    num: "05",
    title: "Structural Engineering",
    description:
      "Engineering that makes ambitious architecture possible. Our structural team ensures every design stands tall \u2014 safely, efficiently, and economically.",
    image: "/images/service-structural.jpg",
  },
  {
    num: "06",
    title: "Project Management Consultancy",
    description:
      "End-to-end project oversight from feasibility to handover. We ensure every project is delivered on time, within budget, and to the highest quality standards.",
    image: "/images/service-pmc.jpg",
  },
];

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      serviceRefs.current.forEach((el, i) => {
        if (!el) return;
        ScrollTrigger.create({
          trigger: el,
          start: "top 50%",
          end: "bottom 50%",
          onEnter: () => setActiveIndex(i),
          onEnterBack: () => setActiveIndex(i),
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="bg-fdg-black py-section-mobile lg:py-section"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <SectionLabel text="Our Expertise" />
        <div className="mt-6 mb-16">
          <SplitTextReveal
            text={"Every Service You Need,\nDelivered by One Trusted Team"}
            tag="h2"
            className="font-cormorant font-light italic text-fdg-text leading-[1.1] text-[clamp(36px,5vw,64px)]"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left - Sticky Image */}
          <div className="hidden lg:block lg:sticky lg:top-32 lg:self-start h-[500px] relative overflow-hidden">
            {services.map((service, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-700 ease-fdg ${
                  i === activeIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-fdg-black/30" />
              </div>
            ))}
          </div>

          {/* Right - Service Blocks */}
          <div className="space-y-0">
            {services.map((service, i) => (
              <div
                key={i}
                ref={(el) => { serviceRefs.current[i] = el; }}
                className={`py-10 border-l-2 pl-8 transition-all duration-400 ease-fdg ${
                  i === activeIndex
                    ? "border-fdg-gold opacity-100"
                    : "border-fdg-gold/10 opacity-60"
                }`}
              >
                <span className="font-cormorant text-3xl lg:text-4xl font-light text-fdg-gold">
                  {service.num}
                </span>
                <h3 className="font-cormorant text-[26px] text-fdg-text font-normal mt-2 mb-3">
                  {service.title}
                </h3>
                <p className="font-dm font-light text-[15px] text-fdg-text-secondary leading-relaxed max-w-[480px]">
                  {service.description}
                </p>

                {/* Mobile image */}
                <div className="lg:hidden relative w-full h-48 mt-4 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
