"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
import { SplitTextReveal } from "./SplitTextReveal";

interface Testimonial {
  name: string;
  title: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Mr. Sajid Dhrolia",
    title: "Aquasplash Water Park, DRC Africa",
    quote:
      "FDG delivered an international-quality water park in the heart of Kinshasa. Their ability to manage complex international projects while maintaining design excellence is unparalleled.",
    image: "/images/gallery-1.jpg",
  },
  {
    name: "Mr. Kekoo Colah",
    title: "Executive Director, Shapoorji Pallonji",
    quote:
      "In our decades of working with consultants across India, few have matched FDG's consistency, technical depth, and commitment to deadlines. They are partners, not vendors.",
    image: "/images/gallery-2.jpg",
  },
  {
    name: "Mr. Manish Malpani",
    title: "Director, Malpani Group",
    quote:
      "FDG understood our vision from day one. Their multidisciplinary approach meant we had one team handling everything \u2014 architecture, interiors, landscape, and project management.",
    image: "/images/gallery-3.jpg",
  },
  {
    name: "Mr. Manmohan Shetty",
    title: "Imagica World Entertainment",
    quote:
      "Creating India's first international-standard theme park required a partner who could think at scale. FDG didn't just meet our expectations \u2014 they redefined them.",
    image: "/images/gallery-4.jpg",
  },
  {
    name: "Mr. Nilesh Bandal",
    title: "Bandal Builders",
    quote:
      "Our association with FDG goes back to their earliest days. The quality of their work on our Paud Road project set a benchmark that still holds today.",
    image: "/images/gallery-5.jpg",
  },
  {
    name: "Mr. Rajeev Jalnapukar",
    title: "CEO, Ramoji Film City",
    quote:
      "FDG brought discipline and design thinking to one of the most complex entertainment projects in India. Their project management capabilities are truly world-class.",
    image: "/images/gallery-6.jpg",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(next, 6000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, next]);

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      className="bg-fdg-black-secondary py-section-mobile lg:py-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <SectionLabel text="What Our Clients Say" />
        <div className="mt-6 mb-16">
          <SplitTextReveal
            text="Trust Built Over Two Decades"
            tag="h2"
            className="font-cormorant font-light italic text-fdg-text leading-[1.1] text-[clamp(36px,5vw,64px)]"
          />
        </div>

        {/* Testimonial Display */}
        <div className="relative max-w-[900px] mx-auto text-center min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Quote Mark */}
              <span className="font-cormorant text-[120px] leading-none text-fdg-gold/30 absolute -top-8 left-0 lg:left-8 select-none">
                &ldquo;
              </span>

              <p className="font-cormorant font-light italic text-[clamp(20px,3vw,28px)] text-fdg-text leading-relaxed max-w-[800px] mx-auto relative z-10 pt-8">
                {t.quote}
              </p>

              <div className="flex flex-col items-center mt-10">
                <div className="w-16 h-px bg-fdg-gold mb-6" />
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-fdg-gold relative">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div className="text-left">
                    <p className="font-dm text-sm font-medium text-fdg-text">{t.name}</p>
                    <p className="font-dm text-[13px] text-fdg-gold">{t.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={prev}
            className="w-10 h-10 border border-fdg-gold/30 flex items-center justify-center hover:bg-fdg-gold/10 transition-all duration-400 ease-fdg"
            aria-label="Previous testimonial"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#C9A84C" strokeWidth="1.5">
              <path d="M10 4L6 8l4 4" />
            </svg>
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-400 ease-fdg ${
                  i === current ? "bg-fdg-gold w-6" : "bg-fdg-gold/30"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 border border-fdg-gold/30 flex items-center justify-center hover:bg-fdg-gold/10 transition-all duration-400 ease-fdg"
            aria-label="Next testimonial"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#C9A84C" strokeWidth="1.5">
              <path d="M6 4l4 4-4 4" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
