"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionLabel } from "./SectionLabel";
import { SplitTextReveal } from "./SplitTextReveal";
import projectsData from "@/data/projects.json";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  category: string;
  city: string;
  country: string;
  year: number;
  image: string;
  area_sqft: number;
  description: string;
  client: string;
}

const categories = [
  "All",
  "Residential",
  "Commercial",
  "Healthcare",
  "Institutional",
  "Leisure & Parks",
  "Industrial",
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData as Project[]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const next = activeFilter === "All"
      ? (projectsData as Project[])
      : (projectsData as Project[]).filter((p) => p.category === activeFilter);
    setFilteredProjects(next);
  }, [activeFilter]);

  useEffect(() => {
    // Horizontal scroll only on desktop
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const container = scrollContainerRef.current;
      const section = sectionRef.current;
      if (!container || !section) return;

      const scrollWidth = container.scrollWidth - window.innerWidth + 200;

      const st = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${scrollWidth}`,
        pin: true,
        anticipatePin: 1,
        scrub: 1,
        invalidateOnRefresh: true,
        animation: gsap.to(container, {
          x: () => -scrollWidth,
          ease: "none",
        }),
      });

      return () => {
        st.kill();
      };
    });

    return () => mm.revert();
  }, [filteredProjects]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="bg-fdg-black py-section-mobile lg:pt-section lg:pb-0 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-12">
        <SectionLabel text="Our Work" />
        <div className="mt-6">
          <SplitTextReveal
            text="Spaces That Speak for Themselves"
            tag="h2"
            className="font-cormorant font-light italic text-fdg-text leading-[1.1] text-[clamp(36px,5vw,64px)]"
          />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-4 mt-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`font-dm text-xs uppercase tracking-ultra-wide pb-1 transition-all duration-400 ease-fdg ${
                activeFilter === cat
                  ? "text-fdg-gold border-b border-fdg-gold"
                  : "text-fdg-text-secondary hover:text-fdg-text"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Horizontal Scroll Container (desktop) / Vertical Grid (mobile) */}
      <div className="lg:h-screen lg:flex lg:items-center">
        <div
          ref={scrollContainerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:flex gap-6 px-6 md:px-12 lg:gap-8 lg:pl-12 lg:pr-0"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="relative flex-shrink-0 w-full sm:w-auto lg:w-[420px] h-[480px] lg:h-[580px] overflow-hidden rounded-fdg group"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 ease-fdg group-hover:scale-[1.06]"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-fdg-black/80 via-fdg-black/20 to-transparent" />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-fdg-gold transition-all duration-400 ease-fdg" />

              {/* Project Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-cormorant text-2xl text-fdg-text font-normal">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 mt-2">
                  <span className="font-dm text-xs text-fdg-gold uppercase tracking-wider">
                    {project.city} \u00B7 {project.category}
                  </span>
                  <span className="font-dm text-xs text-fdg-text-secondary">{project.year}</span>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-fdg mt-4">
                  <span className="font-dm text-xs uppercase tracking-ultra-wide text-fdg-gold">
                    View Project \u2192
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View All Link */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-12 lg:py-16">
        <a
          href="#projects"
          className="font-dm text-sm uppercase tracking-ultra-wide text-fdg-gold group inline-flex items-center gap-2 hover:gap-4 transition-all duration-400 ease-fdg"
        >
          View All Projects
          <span className="transition-transform duration-400 ease-fdg group-hover:translate-x-2">
            \u2192
          </span>
        </a>
      </div>
    </section>
  );
}
