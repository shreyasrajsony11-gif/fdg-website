"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface SplitTextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
}

export function SplitTextReveal({
  text,
  className = "",
  delay = 0,
  tag: Tag = "h2",
}: SplitTextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const chars = el.querySelectorAll(".split-char");
    gsap.set(chars, { y: "100%", opacity: 0 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(chars, {
              y: "0%",
              opacity: 1,
              duration: 0.6,
              stagger: 0.03,
              ease: "power3.out",
              delay,
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, text]);

  const lines = text.split("\n");

  return (
    <div ref={containerRef}>
      <Tag className={className}>
        {lines.map((line, lineIdx) => (
          <span key={lineIdx} className="block overflow-hidden">
            {line.split("").map((char, charIdx) => (
              <span
                key={`${lineIdx}-${charIdx}`}
                className="split-char inline-block"
                style={{ whiteSpace: char === " " ? "pre" : undefined }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
        ))}
      </Tag>
    </div>
  );
}
