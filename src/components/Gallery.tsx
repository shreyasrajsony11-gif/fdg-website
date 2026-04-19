"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionLabel } from "./SectionLabel";
import { SplitTextReveal } from "./SplitTextReveal";
import { ScrollAnimate } from "./ScrollAnimate";

const galleryImages = [
  { src: "/images/gallery-1.jpg", name: "Imagica Theme Park" },
  { src: "/images/gallery-2.jpg", name: "Aquasplash Water Park" },
  { src: "/images/gallery-3.jpg", name: "Corporate Headquarters" },
  { src: "/images/gallery-4.jpg", name: "Commercial Atrium" },
  { src: "/images/gallery-5.jpg", name: "Residential Villa" },
  { src: "/images/gallery-6.jpg", name: "Leisure Resort" },
];

export function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-fdg-black-secondary py-section-mobile lg:py-section overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-16">
        <SectionLabel text="Gallery" />
        <div className="mt-6">
          <SplitTextReveal
            text="Three Decades of Built Legacy"
            tag="h2"
            className="font-cormorant font-light italic text-fdg-text leading-[1.1] text-[clamp(36px,5vw,64px)]"
          />
        </div>
      </div>

      {/* Skewed Card Strip - Desktop */}
      <div className="hidden lg:flex justify-center gap-3 px-12" style={{ transform: "skewX(-5deg)" }}>
        {galleryImages.map((img, i) => (
          <div
            key={i}
            className="relative overflow-hidden transition-all duration-700 ease-fdg flex-shrink-0"
            style={{
              width: hoveredIndex === i ? "420px" : "280px",
              height: "420px",
            }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div style={{ transform: "skewX(5deg) scale(1.2)" }} className="absolute inset-0">
              <Image
                src={img.src}
                alt={img.name}
                fill
                className={`object-cover transition-transform duration-700 ease-fdg ${
                  hoveredIndex === i ? "scale-100" : "scale-110"
                }`}
                sizes="420px"
              />
            </div>
            {/* Hover overlay */}
            <div
              className={`absolute inset-0 bg-fdg-black/60 flex items-end p-6 transition-opacity duration-400 ease-fdg ${
                hoveredIndex === i ? "opacity-100" : "opacity-0"
              }`}
              style={{ transform: "skewX(5deg)" }}
            >
              <span className="font-cormorant text-xl text-fdg-text">{img.name}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile - Simple vertical stack */}
      <div className="lg:hidden grid grid-cols-2 gap-3 px-6">
        {galleryImages.map((img, i) => (
          <ScrollAnimate key={i} animation="scaleIn" delay={i * 0.1}>
            <div className="relative h-48 overflow-hidden rounded-fdg">
              <Image
                src={img.src}
                alt={img.name}
                fill
                className="object-cover"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-fdg-black/40 flex items-end p-3">
                <span className="font-dm text-xs text-fdg-text">{img.name}</span>
              </div>
            </div>
          </ScrollAnimate>
        ))}
      </div>

      {/* Caption */}
      <ScrollAnimate className="mt-16 text-center">
        <p className="font-cormorant font-light italic text-xl text-fdg-text-secondary">
          1,300 projects. Each one a story.
        </p>
      </ScrollAnimate>
    </section>
  );
}
