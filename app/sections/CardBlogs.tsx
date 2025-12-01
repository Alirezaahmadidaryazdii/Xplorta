"use client";

import React from "react";
import { FlashCircle } from "iconsax-reactjs";
import { TitleSection } from "../components/ui/TitleSection";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const CardSpotlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`relative group/card z-10 ${className}`}
      onMouseMove={handleMouseMove}
    >
      <div className="relative h-full w-full bg-[#0B0B0C] border border-border rounded-3xl overflow-hidden">
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover/card:opacity-100 z-20"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                350px circle at ${mouseX}px ${mouseY}px,
                rgba(255, 255, 255, 0.1),
                transparent 80%
              )
            `,
          }}
        />
        <div className="relative z-10 h-full">{children}</div>
      </div>
    </div>
  );
};

export default function CardBlogs() {
  return (
    <div className="w-full flex flex-col gap-3 justify-center items-center mt-10 mb-3">
      <TitleSection
        title1="Make your social archives work"
        title2="for you with high-value insights"
        subtitle="Smart analytics from your archived social data"
        icon={<FlashCircle variant="Bulk" size="25" className="text-primary" />}
      />

      {/* --- Main Large Card (TOP) --- */}
      <div className="flex flex-col w-full px-4 md:px-20 mt-15">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <CardSpotlight className="w-full flex flex-col md:flex-row gap-6 cursor-pointer min-h-[300px]">
            <div className="flex flex-col md:flex-row w-full h-full items-center gap-8">
              <div className="flex flex-col gap-4 w-full md:w-1/2 text-center justify-center items-center p-8">
                <p className="text-primary text-lg font-medium">
                  Enhance and improve your data
                </p>
                <h3 className="text-3xl lg:text-5xl  tracking-[0.02em] bg-clip-text text-transparent bg-gradient-to-b from-text-primary from-[70%] to-text-secondary leading-tight">
                  <span className="block">Gain valuable</span>
                  <span className="block mt-1">insights using Gain Me</span>
                </h3>
                <p className="text-text-secondary text-xl">
                  Unlock hidden patterns {" "}
                  <span className="text-white">with advanced</span> {" "}
                   AI intelligence
                </p>
              </div>

              <img
                src="/top.svg"
                alt="Transform Data"
                className=" ml-auto w-[400px] h-[400px] mt-5"
              />
            </div>
          </CardSpotlight>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6 px-4 md:px-20 mt-6">
        {/* --- Left Small Card (LEFT) --- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <CardSpotlight className="flex flex-col gap-6 p-3 cursor-pointer h-full">
            <div className="flex flex-col h-full gap-6">
              <img src="/left.svg" alt="Analytics" className="" />

              <div className="flex flex-col gap-3 text-start px-5 pb-5">
                <p className="text-primary text-sm font-semibold uppercase tracking-wider">
                  Optimize and elevate your data
                </p>
                <h3 className="text-3xl bg-clip-text text-transparent bg-gradient-to-b from-text-primary to-text-secondary">
                  Get powerful insights through Gain Me
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                   Expose deeper patterns with advanced AI methods
                </p>
              </div>
            </div>
          </CardSpotlight>
        </motion.div>

        {/* --- Right Small Card (RIGHT) --- */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <CardSpotlight className="flex flex-col gap-6 p-3 cursor-pointer h-full">
            <div className="flex flex-col h-full gap-6">
              <img src="/right.svg" alt="Security" className="w-full" />

              <div className="flex flex-col gap-3 text-start px-5 pb-5">
                <p className="text-primary text-sm font-semibold uppercase tracking-wider">
                  Enhance and refine data
                </p>
                <h3 className="text-3xl bg-clip-text text-transparent bg-gradient-to-b from-text-primary to-text-secondary">
                  Discover deeper insights using Gain Me
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Reveal deeper trends using advanced artificial intelligence tools.
                </p>
              </div>
            </div>
          </CardSpotlight>
        </motion.div>
      </div>
    </div>
  );
}
