"use client";

import Image from "next/image";
import { SectionLabel } from "./SectionLabel";
import { SplitTextReveal } from "./SplitTextReveal";
import { ScrollAnimate } from "./ScrollAnimate";

const logos = [
  "Shapoorji Pallonji",
  "Imagica World",
  "Ramoji Film City",
  "Wonderla",
  "Wilo Mather & Platt",
  "Bandal Builders",
  "AGIBS Group",
  "Malpani Group",
];

export function CTAAndFooter() {
  return (
    <>
      {/* Client Logo Marquee */}
      <section className="bg-fdg-black py-16 lg:py-24 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-12">
          <SectionLabel text="Trusted by India's Best" className="text-center" />
        </div>

        {/* Row 1 - Scrolling Left */}
        <div
          className="flex whitespace-nowrap"
          onMouseEnter={(e) => {
            const inner = e.currentTarget.querySelector("div");
            if (inner) (inner as HTMLElement).style.animationPlayState = "paused";
          }}
          onMouseLeave={(e) => {
            const inner = e.currentTarget.querySelector("div");
            if (inner) (inner as HTMLElement).style.animationPlayState = "running";
          }}
        >
          <div className="animate-marquee-left flex items-center gap-16 min-w-max">
            {[...logos, ...logos].map((logo, i) => (
              <span
                key={i}
                className="font-dm text-lg lg:text-xl font-light text-fdg-text-secondary/50 uppercase tracking-ultra-wide whitespace-nowrap"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>

        {/* Row 2 - Scrolling Right */}
        <div
          className="flex whitespace-nowrap mt-8"
          onMouseEnter={(e) => {
            const inner = e.currentTarget.querySelector("div");
            if (inner) (inner as HTMLElement).style.animationPlayState = "paused";
          }}
          onMouseLeave={(e) => {
            const inner = e.currentTarget.querySelector("div");
            if (inner) (inner as HTMLElement).style.animationPlayState = "running";
          }}
        >
          <div className="animate-marquee-right flex items-center gap-16 min-w-max">
            {[...logos.reverse(), ...logos].map((logo, i) => (
              <span
                key={i}
                className="font-dm text-lg lg:text-xl font-light text-fdg-text-secondary/30 uppercase tracking-ultra-wide whitespace-nowrap"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Block */}
      <section id="contact" className="relative py-section-mobile lg:py-section overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="FDG Architecture"
            fill
            className="object-cover opacity-25"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-fdg-black/75" />

        <div className="relative z-10 max-w-[900px] mx-auto px-6 md:px-12 text-center">
          <SplitTextReveal
            text={"Your Next Project Deserves\n28 Years of Expertise\nBehind It."}
            tag="h2"
            className="font-cormorant font-light italic text-fdg-text leading-[1.1] text-[clamp(36px,6vw,72px)]"
          />

          <ScrollAnimate className="mt-8">
            <p className="font-dm font-light text-lg text-fdg-text-secondary leading-relaxed max-w-[640px] mx-auto">
              Whether you&apos;re planning a residential development, a commercial complex, or a
              large-scale entertainment destination \u2014 let&apos;s build something that lasts.
            </p>
          </ScrollAnimate>

          <ScrollAnimate className="mt-10" delay={0.2}>
            <a
              href="mailto:info@fdgindia.com"
              className="inline-block font-dm text-sm font-medium uppercase tracking-ultra-wide bg-fdg-gold text-fdg-black px-10 py-5 hover:bg-fdg-gold-dark transition-all duration-400 ease-fdg"
            >
              Request a Consultation \u2192
            </a>
            <p className="font-dm text-xs text-fdg-text-secondary mt-4">
              No commitment required. We respond within 24 hours.
            </p>
          </ScrollAnimate>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-fdg-black-deep py-16 lg:py-20 border-t border-fdg-border">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Column 1 - Logo */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-fdg-gold" />
                <span className="font-cormorant text-2xl text-fdg-text font-light tracking-wider">
                  FDG
                </span>
              </div>
              <p className="font-dm text-sm text-fdg-text-secondary leading-relaxed">
                Fourth Dimension Group \u2014 India&apos;s most trusted end-to-end architecture and
                project management consultancy. 28 years of shaping the built environment.
              </p>
            </div>

            {/* Column 2 - Navigation */}
            <div>
              <h4 className="font-dm text-xs font-medium uppercase tracking-ultra-wide text-fdg-gold mb-6">
                Navigation
              </h4>
              <div className="space-y-3">
                {["About", "Projects", "Services", "Testimonials", "Contact"].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block font-dm text-sm text-fdg-text-secondary hover:text-fdg-gold transition-colors duration-400 ease-fdg"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 3 - Contact */}
            <div>
              <h4 className="font-dm text-xs font-medium uppercase tracking-ultra-wide text-fdg-gold mb-6">
                Contact
              </h4>
              <div className="space-y-3 font-dm text-sm text-fdg-text-secondary">
                <p>Fourth Dimension Group</p>
                <p>Sadashiv Peth, Pune 411030</p>
                <p>Maharashtra, India</p>
                <p className="mt-4">
                  <a
                    href="tel:+912024450000"
                    className="hover:text-fdg-gold transition-colors duration-400 ease-fdg"
                  >
                    +91 20 2445 0000
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:info@fdgindia.com"
                    className="hover:text-fdg-gold transition-colors duration-400 ease-fdg"
                  >
                    info@fdgindia.com
                  </a>
                </p>
              </div>
            </div>

            {/* Column 4 - Social */}
            <div>
              <h4 className="font-dm text-xs font-medium uppercase tracking-ultra-wide text-fdg-gold mb-6">
                Follow Us
              </h4>
              <div className="flex gap-4">
                {["LinkedIn", "Instagram", "Facebook"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="font-dm text-sm text-fdg-text-secondary hover:text-fdg-gold transition-colors duration-400 ease-fdg"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-fdg-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-dm text-xs text-fdg-text-secondary">
              \u00A9 {new Date().getFullYear()} Fourth Dimension Group. All rights reserved.
            </p>
            <p className="font-dm text-xs text-fdg-text-secondary/50">
              Designed by FDG Studios
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
