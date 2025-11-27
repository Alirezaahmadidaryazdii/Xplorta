"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { TitleSection } from "../components/ui/TitleSection";
import { Layer } from "iconsax-reactjs";
import { motion, AnimatePresence, useInView } from "framer-motion";

const animationStyle = `
  @keyframes floatSide {
    0% { transform: translateY(0px); opacity: 0; }
    20% { opacity: 0.8; }
    80% { opacity: 0.8; }
    100% { transform: translateY(-100px); opacity: 0; }
  }
  .animate-float-side {
    animation-name: floatSide;
  }
`;

const ParticleSide = ({ className }: { className?: string }) => {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
      size: Math.random() * 2 + 1 + "px",
      duration: Math.random() * 10 + 10 + "s",
      delay: Math.random() * 5 + "s",
      opacity: Math.random() * 0.5 + 0.3,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div
      className={`absolute top-0 h-full w-[150px] pointer-events-none overflow-hidden z-0 ${className}`}
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
      }}
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute bg-white rounded-full animate-float-side"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDuration: p.duration,
            animationDelay: `-${p.delay}`,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          }}
        />
      ))}
    </div>
  );
};

export default function ListCardSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.5 });

  const cardsData = [
    {
      title: "Verify your social data with instant precision.",
      image: "/shield-tick.svg",
    },
    {
      title: "AI-powered insights from all your social platforms.",
      image: "/aiCardBlog.svg",
    },
    {
      title: "Filter and reveal hidden patterns across your socials.",
      image: "/FILTER.svg",
    },
  ];

  const slideDuration = 5000;

  useEffect(() => {
    if (!isInView) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cardsData.length);
    }, slideDuration);

    return () => clearInterval(timer);
  }, [isInView, cardsData.length, activeIndex]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-col gap-2 justify-center items-center w-full mt-20 overflow-hidden">
      <style>{animationStyle}</style>

      <TitleSection
        title1="Turn your platform archives"
        title2="into richer insights"
        subtitle="Smart analytics from your secured social backups"
        icon={<Layer variant="Bulk" size="25" className="text-primary" />}
      />

      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full px-4 md:px-0 md:w-[668px] h-[500px] md:h-[420px] mt-10 md:mt-20"
      >
        <ParticleSide className="hidden md:block -left-[160px]" />
        <ParticleSide className="hidden md:block -right-[160px]" />

        <div className="absolute top-0 left-0 w-full h-full z-10 px-4 md:px-0 pointer-events-none">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="w-full h-full bg-[rgba(255,255,255,0.1)] border-2 border-[rgba(255,255,255,0.05)] rounded-[40px] flex items-center justify-center relative overflow-visible pointer-events-auto">
              <div className="relative w-full md:w-[656px] h-full md:h-[409px] bg-black border-2 border-[rgba(255,255,255,0.05)] rounded-[33px] flex items-center justify-center overflow-hidden md:overflow-visible">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, filter: "blur(10px)" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="flex flex-col-reverse md:flex-row gap-6 md:gap-4 items-center w-full h-full justify-center absolute inset-0"
                  >
                    <h2 className="font-[Clash Grotesk Medium] ml-0 md:ml-10 font-medium text-2xl md:text-5xl leading-tight md:leading-12 tracking-[0.02em] text-center md:text-left bg-clip-text text-transparent bg-gradient-to-b from-text-primary from-[70%] to-text-secondary p-4 md:p-6">
                      {cardsData[activeIndex].title
                        .split("\n")
                        .map((line, idx) => (
                          <span key={idx}>
                            {line}
                            <br />
                          </span>
                        ))}
                    </h2>

                    <Image
                      src={cardsData[activeIndex].image}
                      alt=""
                      width={250}
                      height={250}
                      className="mr-0 md:mr-20 mb-4 md:mb-0 w-[200px] h-[200px] md:w-[250px] md:h-[250px]"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="absolute left-0 right-0 -bottom-7 h-20 bg-black blur-xl rounded-full pointer-events-none"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-0 right-0 px-10 flex items-center justify-center gap-2 z-20 pointer-events-auto">
          {cardsData.map((_, i) => (
            <motion.div
              key={i}
              onClick={() => handleDotClick(i)}
              className="h-0.5 bg-secondary rounded-full overflow-visible relative cursor-pointer py-2 bg-clip-content"
              style={{ backgroundColor: "transparent" }}
              animate={{ width: i === activeIndex ? "25%" : "16.66%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-0.5 bg-secondary rounded-full" />

              {i === activeIndex && isInView && (
                <motion.div
                  className="h-0.5 absolute top-1/2 -translate-y-1/2 left-0 rounded-full z-10"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: slideDuration / 1000,
                    ease: "linear",
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-r from-primaryDark to-primary relative rounded-full">
                    <span
                      className="absolute right-0 top-1/2 -translate-y-1/2 w-[40px] h-[4px] blur-md rounded-full pointer-events-none bg-primary"
                      style={{
                        transform: "translate(50%, -50%)",
                      }}
                    />
                    <span
                      className="absolute right-0 top-1/2 -translate-y-1/2 w-[15px] h-[2px] blur-sm rounded-full pointer-events-none"
                      style={{
                        backgroundColor: "rgb(255, 180, 180)",
                        transform: "translate(50%, -50%)",
                      }}
                    />
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}