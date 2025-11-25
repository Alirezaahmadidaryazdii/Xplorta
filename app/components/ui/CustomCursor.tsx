"use client";

import { motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import { FaHandPointer } from "react-icons/fa"; 

const MacArrow = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="drop-shadow-sm"
  >
    <path
      d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
      fill="black"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const [isVisible, setIsVisible] = useState(false);
  const [cursorVariant, setCursorVariant] = useState<"default" | "pointer">("default");

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const isClickable =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.tagName === "INPUT" ||
        target.tagName === "LABEL" ||
        target.closest("button") ||
        target.closest("a") ||
        window.getComputedStyle(target).cursor === "pointer";

      setCursorVariant(isClickable ? "pointer" : "default");
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", checkHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", checkHover);
    };
  }, [cursorX, cursorY, isVisible]);

  if (
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches
  ) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        x: cursorX,
        y: cursorY,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0 }}
    >
      <motion.div
        animate={{
          opacity: cursorVariant === "default" ? 1 : 0,
          scale: cursorVariant === "default" ? 1 : 0.8,
        }}
        transition={{ duration: 0.15 }}
        className="absolute top-0 left-0"
      >
        <MacArrow />
      </motion.div>

      {/* 2. حالت دست (با استفاده از React Icons) */}
      <motion.div
        animate={{
          opacity: cursorVariant === "pointer" ? 1 : 0,
          scale: cursorVariant === "pointer" ? 1 : 0.8,
          x: -8, 
          y: -2 
        }}
        transition={{ duration: 0.15 }}
        className="absolute top-0 left-0"
      >
        <FaHandPointer
          size={24}
          className="text-white drop-shadow-md"
          style={{
            stroke: "black",
            strokeWidth: "30px", 
          }}
        />
      </motion.div>
    </motion.div>
  );
}