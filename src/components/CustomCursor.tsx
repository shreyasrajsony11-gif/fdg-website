"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useSpring(cursorX, { damping: 25, stiffness: 200 });
  const ringY = useSpring(cursorY, { damping: 25, stiffness: 200 });
  const ringScale = useMotionValue(1);
  const ringOpacity = useMotionValue(0);
  const isHovering = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor-hover]") ||
        target.tagName === "A" ||
        target.tagName === "BUTTON";

      if (isInteractive && !isHovering.current) {
        isHovering.current = true;
        ringScale.set(1.5);
        ringOpacity.set(0.15);
      } else if (!isInteractive && isHovering.current) {
        isHovering.current = false;
        ringScale.set(1);
        ringOpacity.set(0);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, ringScale, ringOpacity]);

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-fdg-gold rounded-full pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-fdg-gold/40 pointer-events-none z-[9999]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          scale: ringScale,
          backgroundColor: `rgba(201, 168, 76, ${ringOpacity.get()})`,
        }}
      />
    </>
  );
}
