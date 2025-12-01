"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Message, ArrowLeft2, ArrowRight2 } from "iconsax-reactjs";
import { TitleSection } from "../components/ui/TitleSection";
import { motion, useInView } from "framer-motion";

type Item = {
  id: number;
  name: string;
  role: string;
  username: string;
  img: string;
};

const items: Item[] = [
  {
    id: 1,
    name: "John Doe",
    role: "Admin",
    username: "john_dev",
    img: "https://picsum.photos/200?random=1",
  },
  {
    id: 2,
    name: "Sarah Smith",
    role: "Editor",
    username: "sarah_edit",
    img: "https://picsum.photos/200?random=2",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "User",
    username: "mike_user",
    img: "https://picsum.photos/200?random=3",
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Mod",
    username: "emily_mod",
    img: "https://picsum.photos/200?random=4",
  },
  {
    id: 5,
    name: "David Wilson",
    role: "Seller",
    username: "david_shop",
    img: "https://picsum.photos/200?random=5",
  },
  {
    id: 6,
    name: "Jessica Taylor",
    role: "Support",
    username: "jess_support",
    img: "https://picsum.photos/200?random=6",
  },
  {
    id: 7,
    name: "James Anderson",
    role: "Manager",
    username: "james_manager",
    img: "https://picsum.photos/200?random=7",
  },
  {
    id: 8,
    name: "Olivia Thomas",
    role: "Writer",
    username: "olivia_writer",
    img: "https://picsum.photos/200?random=8",
  },
];

export default function CommentsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideDuration = 10000;

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, slideDuration);

    return () => clearInterval(timer);
  }, [slideDuration, isInView]);

  const handleClick = (index: number) => setActiveIndex(index);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const getItemStatus = (index: number) => {
    const length = items.length;
    let distance = index - activeIndex;

    if (distance > length / 2) distance -= length;
    if (distance < -length / 2) distance += length;

    return { distance, isActive: distance === 0 };
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col gap-10 items-center w-full mt-20 md:mt-50 px-4 md:px-0"
    >
      <TitleSection
        title1="Turn your archived social"
        title2="content into meaningful intelligence"
        subtitle="Smart analytics from your stored social sources"
        icon={<Message variant="Bulk" size="25" className="text-primary" />}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="
          relative w-full max-w-5xl h-40 flex justify-center items-center 
          overflow-hidden py-4
          [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]
        "
      >
        {items.map((item, index) => {
          const { distance, isActive } = getItemStatus(index);

          const xPercent = -50 + distance * 105;
          const isVisible = Math.abs(distance) <= 1;

          return (
            <motion.div
              key={item.id}
              onClick={() => handleClick(index)}
              initial={false}
              animate={{
                x: `${xPercent}%`,
                scale: isActive ? 1 : 0.9,
                opacity: isVisible ? (isActive ? 1 : 0.4) : 0,
                zIndex: isActive ? 20 : 10,
                filter: "blur(0px)",
                pointerEvents: isVisible ? "auto" : "none",
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                y: "-50%",
                willChange: "transform, opacity",
              }}
              className="
                cursor-pointer w-[280px] md:w-[380px] h-20 sm:h-24
                flex items-center justify-center
              "
            >
              <div
                className={`
                  w-full h-full rounded-2xl flex flex-row items-center justify-between px-4 pr-8 gap-4 relative overflow-hidden
                  bg-card transition-all duration-500
                  ${
                    isActive
                      ? /* تغییر دوم: افزایش سایز و وضوح شدو سفید (از 15px به 30px و opacity 0.25) */
                        "border border-border shadow-[0_0_30px_rgba(255,255,255,0.25)]"
                      : "border border-transparent bg-card/50"
                  }
                `}
              >
                {isActive && (
                  <motion.div
                    initial={{ left: "-100%" }}
                    animate={{ left: "200%" }}
                    transition={{
                      duration: 1.5,
                      ease: "linear",
                    }}
                    className="absolute top-0 w-1/2 h-full z-10 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.3) 50%, transparent)",
                      transform: "skewX(-20deg)",
                    }}
                  />
                )}

                <div className="flex items-center gap-3 min-w-0 relative z-20">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded-full object-cover border border-border shrink-0"
                  />

                  <div className="flex flex-col justify-center items-center sm:items-baseline sm:gap-2">
                    <h3
                      className={`text-sm sm:text-base font-semibold whitespace-nowrap transition-colors duration-300 ${
                        isActive ? "text-text-primary" : "text-text-secondary"
                      }`}
                    >
                      {item.name}
                    </h3>
                    <span className="px-3 py-1 text-text-secondary text-xs font-medium">
                      {item.role}
                    </span>
                  </div>
                </div>

                <div className="shrink-0 relative z-20">
                  <p className="text-text-secondary text-xs sm:text-sm truncate">
                    @{item.username}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="flex md:hidden flex-row gap-6 mt-[-20px] z-30">
        <button
          onClick={handlePrev}
          className="p-3 rounded-full bg-card border border-border text-text-primary hover:bg-primary/20 active:scale-95 transition-all"
        >
          <ArrowLeft2 size="24" />
        </button>
        <button
          onClick={handleNext}
          className="p-3 rounded-full bg-card border border-border text-text-primary hover:bg-primary/20 active:scale-95 transition-all"
        >
          <ArrowRight2 size="24" />
        </button>
      </div>

      <div className="relative flex justify-center items-center w-full mt-2 pt-8 ">
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-[#252525]/10 via-white/30 to-[#252525]/10 "
        />

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="max-w-3xl text-text-secondary mx-auto text-center w-[90%] md:w-[40%] text-text-primary text-xl md:text-2xl leading-relaxed font-[Clash Grotesk Medium] relative"
        >
          <span className="absolute -left-6 -top-4 text-text-secondary text-7xl select-none">
            “
          </span>
          Raycast is gradually shaping{" "}
          <span className="font-semibold text-white"> my Mac into
          an AI-driven system,{" "}
          </span>
          <span className="text-text-secondary">and I'm fully excited for it.</span>
          <span className="absolute -right-6 -bottom-12 text-text-secondary text-7xl select-none">
            ”
          </span>
        </motion.blockquote>
      </div>
    </motion.div>
  );
}

