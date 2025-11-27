"use client";

import React, { useRef, useEffect } from "react";
import svgPaths from "./svgPath";
import { Facebook, Instagram } from "iconsax-reactjs";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import { BsMicrosoftTeams } from "react-icons/bs";

interface SocialItemProps {
  children: React.ReactNode;
  className: string;
  delay: number;
}

const SocialItem = ({ children, className, delay }: SocialItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const opacity = useMotionValue(0); 

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distance = Math.sqrt(
        Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
      );

      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);

      const threshold = 150;
      
      if (distance < threshold) {
        const newOpacity = 1 - distance / threshold;
        opacity.set(newOpacity);
      } else {
        opacity.set(0);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY, opacity]);

  const bgGradient = useMotionTemplate`radial-gradient(100px circle at ${mouseX}px ${mouseY}px, rgba(200, 200, 200, 0.7), transparent 50%)`;

  return (
    <motion.div
      ref={ref}
      className={`rounded-full absolute p-[1.5px] overflow-hidden group ${className}`}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: [0, -10, 0],
      }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        opacity: { duration: 0.5, delay: delay },
        scale: { type: "spring", stiffness: 260, damping: 20, delay: delay },
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 2,
        },
      }}
      whileHover={{ scale: 1.1, cursor: "pointer" }}
    >
      <div className="absolute inset-0 bg-border/20 rounded-full z-0" />

      <motion.div
        className="absolute inset-0 z-0 rounded-full will-change-[opacity]"
        style={{
          opacity: opacity, 
          background: bgGradient,
        }}
      />

      <div className="relative bg-card rounded-full p-5 z-10 h-full w-full flex items-center justify-center">
        {children}
      </div>
    </motion.div>
  );
};

export function IconCircle() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute w-[60%] h-[40%] pointer-events-none"
        style={{
          top: "-10%",
          left: "25%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(ellipse at center, rgba(0,192,200,0.25) 70%, rgba(0,192,200,0) 100%)",
          filter: "blur(50px)",
        }}
      />

      <div className="absolute size-full top-0 left-0" data-name="Frame">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 387 387"
        >
          <g id="Frame">
            <rect
              fill="url(#paint0_linear_3_1351)"
              fillOpacity="0.02"
              height="387"
              rx="193.5"
              width="387"
            />
            <rect
              height="385"
              rx="192.5"
              stroke="url(#paint1_linear_3_1351)"
              strokeOpacity="0.05"
              strokeWidth="2"
              width="385"
              x="1"
              y="1"
            />
            <rect
              height="385"
              rx="192.5"
              stroke="url(#paint2_linear_3_1351)"
              strokeOpacity="0.6"
              strokeWidth="2"
              width="385"
              x="1"
              y="1"
            />
          </g>

          <circle
            cx="194"
            cy="193"
            fill="url(#paint3_linear_3_1351)"
            id="Ellipse 2"
            r="78"
          />

          <motion.g
            id="logo 1"
            className="shadow-[0_-40px_80px_#0F717E]/40"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          >
            <path
              d={svgPaths.p27c97580}
              fill="var(--fill-0, #141516)"
              id="Vector"
            />
            <path
              d={svgPaths.p3bb45200}
              fill="var(--fill-0, #141516)"
              id="Vector_2"
            />
            <path
              d={svgPaths.p182c4880}
              fill="var(--fill-0, #141516)"
              id="Vector_3"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p2159580}
              fill="var(--fill-0, #141516)"
              fillRule="evenodd"
              id="Vector_4"
            />
          </motion.g>

          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_3_1351"
              x1="193.5"
              x2="193.5"
              y1="0"
              y2="387"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_3_1351"
              x1="193.5"
              x2="193.5"
              y1="0"
              y2="387"
            >
              <stop stopColor="white" />
              <stop offset="0.9" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint2_linear_3_1351"
              x1="193.5"
              x2="193.5"
              y1="0"
              y2="387"
            >
              <stop stopColor="#0F717E" />
              <stop offset="0.182692" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint3_linear_3_1351"
              x1="194"
              x2="194"
              y1="115"
              y2="271"
            >
              <stop stopColor="#0F717E" />
              <stop offset="1" stopColor="#0F717E" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}

export function SocialsComponents() {
  return (
    <div
      className="relative-container relative mx-auto mt-30"
      style={{
        width: "min(90vw, 450px)",
        height: "min(90vw, 450px)",
      }}
    >
      <IconCircle />

      <div>
        <SocialItem
          className="top-[50%] left-[10%] xl:top-[65%] xl:left-[10%] -translate-x-1/2 -translate-y-1/2"
          delay={0.1}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg>
        </SocialItem>

        <SocialItem
          className="top-[50%] left-[90%] xl:top-[80%] xl:left-[85%] -translate-x-1/2 -translate-y-1/2"
          delay={0.2}
        >
          <FaWhatsapp size={40} className="text-[#C9C9C9]" />
        </SocialItem>

        <SocialItem
          className="top-[15%] left-[15%] xl:top-[25%] xl:left-[-20%] -translate-x-1/2 -translate-y-1/2"
          delay={0.3}
        >
          <FaTelegram size={30} className="text-[#C9C9C9]" />
        </SocialItem>

        <SocialItem
          className="top-[90%] left-[15%] xl:top-[95%] xl:left-[-10%] -translate-x-1/2 -translate-y-1/2"
          delay={0.4}
        >
          <Facebook size={30} className="text-[#C9C9C9]" variant="Bold" />
        </SocialItem>

        <SocialItem
          className="top-[15%] right-[0%] xl:top-[45%] xl:right-[-25%] -translate-x-1/2 -translate-y-1/2"
          delay={0.5}
        >
          <BsMicrosoftTeams size={40} className="text-[#C9C9C9]" />
        </SocialItem>

        <SocialItem
          className="top-[90%] right-[5%] xl:top-[70%] xl:right-[-50%] -translate-x-1/2 -translate-y-1/2"
          delay={0.6}
        >
          <img
            src={
              "https://cdn.jsdelivr.net/npm/simple-icons/icons/threads.svg"
            }
            className="w-8 h-8 filter invert brightness-200"
            alt="Threads"
          />
        </SocialItem>
      </div>
    </div>
  );
}