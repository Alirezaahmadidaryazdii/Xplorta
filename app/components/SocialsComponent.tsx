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
          <Instagram size={40} className="text-[#C9C9C9]" />
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