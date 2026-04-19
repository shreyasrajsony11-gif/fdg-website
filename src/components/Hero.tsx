"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitTextReveal } from "./SplitTextReveal";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { number: 250, suffix: "+", label: "Experts" },
  { number: 1300, suffix: "+", label: "Projects" },
  { number: 30, suffix: "M+", label: "Sq. Ft." },
  { number: 3, suffix: "", label: "Continents" },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax on hero video
      gsap.to(videoRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Label animation
      gsap.fromTo(
        labelRef.current,
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 2.4, ease: "power3.out" }
      );

      // Gold line draw
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 1, delay: 3.4, ease: "power2.inOut" }
      );

      // Subtext
      gsap.fromTo(
        subtextRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 3.9, ease: "power3.out" }
      );

      // Buttons
      gsap.fromTo(
        buttonsRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 4.2, ease: "power3.out" }
      );

      // Stat counters
      const statEls = statsRef.current?.querySelectorAll(".stat-number");
      statEls?.forEach((el) => {
        const target = parseInt(el.getAttribute("data-target") || "0");
        gsap.fromTo(
          el,
          { textContent: "0" },
          {
            textContent: target,
            duration: 2,
            delay: 2.5,
            ease: "power2.out",
            snap: { textContent: 1 },
            onUpdate: function () {
              const val = Math.round(
                parseFloat(el.textContent || "0")
              );
              el.textContent = val.toString();
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-110"
      >
        <source src="/images/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-fdg-black/20 via-fdg-black/35 to-fdg-black/65" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-[10%]">
        {/* Label */}
        <div ref={labelRef} className="mb-8 opacity-0">
          <div className="flex items-center gap-4">
            <div className="w-10 h-px bg-fdg-gold" />
            <span className="font-dm text-xs font-medium uppercase tracking-ultra-wide text-fdg-gold">
              Established 1997 \u00B7 Pune, India
            </span>
          </div>
        </div>

        {/* Headline */}
        <SplitTextReveal
          text={"28 Years.\n1,300 Projects.\nOne Name."}
          tag="h1"
          className="font-cormorant font-light italic text-fdg-text leading-[1.05] text-[clamp(52px,8vw,110px)]"
          delay={2.7}
        />

        {/* Gold Line */}
        <div
          ref={lineRef}
          className="w-20 h-px bg-fdg-gold mt-8"
          style={{ transform: "scaleX(0)" }}
        />

        {/* Subtext */}
        <p
          ref={subtextRef}
          className="font-dm font-light text-lg text-fdg-text-secondary max-w-[500px] mt-6 leading-relaxed opacity-0"
        >
          India&apos;s most trusted end-to-end architecture and project management
          consultancy. From Pune to the world.
        </p>

        {/* Buttons */}
        <div ref={buttonsRef} className="flex flex-wrap gap-4 mt-8 opacity-0">
          <a
            href="#contact"
            className="font-dm text-sm font-medium uppercase tracking-ultra-wide bg-fdg-gold text-fdg-black px-8 py-4 hover:bg-fdg-gold-dark transition-all duration-400 ease-fdg"
          >
            Start Your Project \u2192
          </a>
          <a
            href="#projects"
            className="font-dm text-sm font-medium uppercase tracking-ultra-wide text-fdg-gold border border-fdg-gold px-8 py-4 hover:bg-fdg-gold/10 transition-all duration-400 ease-fdg"
          >
            View Our Work
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <div className="w-px h-8 bg-fdg-gold animate-scroll-pulse" />
        <span className="font-dm text-[10px] uppercase tracking-ultra-wide text-fdg-gold">
          Scroll
        </span>
      </div>

      {/* Stats Strip */}
      <div
        ref={statsRef}
        className="absolute bottom-0 left-0 right-0 h-[60px] bg-fdg-black-secondary/90 backdrop-blur-sm z-10 flex items-center justify-center"
      >
        <div className="flex items-center divide-x divide-fdg-gold/20">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-2 px-6 md:px-10">
              <span
                className="stat-number font-cormorant text-2xl md:text-3xl font-light text-fdg-gold"
                data-target={stat.number}
              >
                0
              </span>
              <span className="font-cormorant text-2xl md:text-3xl font-light text-fdg-gold">
                {stat.suffix}
              </span>
              <span className="font-dm text-xs text-fdg-text-secondary uppercase tracking-wider ml-1 hidden sm:inline">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
