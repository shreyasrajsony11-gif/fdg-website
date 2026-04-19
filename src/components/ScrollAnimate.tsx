"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimateProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fadeUp" | "fadeIn" | "scaleIn";
  delay?: number;
  stagger?: number;
}

export function ScrollAnimate({
  children,
  className = "",
  animation = "fadeUp",
  delay = 0,
}: ScrollAnimateProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const animations = {
      fadeUp: { from: { y: 20, opacity: 0 }, to: { y: 0, opacity: 1 } },
      fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
      scaleIn: { from: { scale: 0.95, opacity: 0 }, to: { scale: 1, opacity: 1 } },
    };

    const { from, to } = animations[animation];

    gsap.fromTo(el, from, {
      ...to,
      duration: 0.8,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [animation, delay]);

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
