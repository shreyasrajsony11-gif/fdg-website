"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const lineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsLoading(false);
        document.body.style.overflow = "";
      },
    });

    document.body.style.overflow = "hidden";

    tl.fromTo(
      lineRef.current,
      { scaleX: 0, transformOrigin: "left center" },
      { scaleX: 1, duration: 1.2, ease: "power2.inOut" }
    ).to(containerRef.current, {
      yPercent: -100,
      duration: 0.8,
      ease: "power3.inOut",
      delay: 0.3,
    });
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          ref={containerRef}
          className="fixed inset-0 z-[10000] bg-fdg-black flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-fdg-gold" />
              <span className="font-cormorant text-4xl text-fdg-text font-light tracking-wide">
                FDG
              </span>
            </div>
            <div
              ref={lineRef}
              className="w-20 h-px bg-fdg-gold"
              style={{ transform: "scaleX(0)" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
