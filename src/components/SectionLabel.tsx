"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SectionLabelProps {
  text: string;
  className?: string;
}

export function SectionLabel({ text, className = "" }: SectionLabelProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { y: 12, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div ref={ref} className={`opacity-0 ${className}`}>
      <span className="font-dm text-xs font-medium uppercase tracking-ultra-wide text-fdg-gold">
        {text}
      </span>
    </div>
  );
}
