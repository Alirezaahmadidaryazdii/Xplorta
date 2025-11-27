"use client";

import { ButtonGetStarted } from "../components/ui/Button-getStarted";
import { motion, Variants } from "framer-motion";

export const GlowCurveSection = () => {
  const contentContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <div className="relative w-full min-h-[600px] flex flex-col items-center justify-start pt-32 overflow-hidden bg-background">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="
          absolute top-[140px] left-1/2 -translate-x-1/2
          w-[341px] h-[39px]
          bg-[#0F717E]
          blur-[75px]
          rounded-[100px]
          z-0 pointer-events-none
        "
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        className="absolute top-[160px] left-1/2 -translate-x-1/2 z-10 pointer-events-none"
      >
        <div
          className="
            w-[1000px] md:w-[1352px] h-[395px]
            rounded-[100%]
            border-t-2 border-[#0F717E]/80
            shadow-[0_-2px_15px_rgba(15,113,126,0.4)]
            bg-transparent
            [mask-image:linear-gradient(to_right,transparent_10%,black_30%,black_70%,transparent_90%)]
          "
        />

        <div
          className="
            absolute top-0 left-1/2 -translate-x-1/2
            w-[1352px] h-[395px]
            rounded-[100%]
            border-t-[1px] border-white/30
            [mask-image:linear-gradient(to_right,transparent_40%,black_48%,black_52%,transparent_60%)]
           "
        />
      </motion.div>

      <motion.div
        variants={contentContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-20 flex flex-col items-center text-center mt-32 px-4 space-y-6"
      >
        <motion.h2
          variants={itemVariants}
          className="
            font-bold text-4xl md:text-[60px] md:leading-[74px] tracking-[0.02em]
            bg-clip-text text-transparent
            bg-gradient-to-b from-white to-white/70
            max-w-4xl
          "
          style={{ fontFamily: '"Clash Grotesk", sans-serif' }}
        >
          Turn your multi-app backups <br />
          into deeper insights
        </motion.h2>
         

        <motion.p
          variants={itemVariants}
          className="
            text-[18px] md:text-[20px] leading-[20px] font-medium
            text-[#6D797B]/50
            max-w-lg
          "
          style={{ fontFamily: '"Clash Display", sans-serif' }}
        >
          Turn your stored data into <br className="hidden md:block" />
          practical insights
        </motion.p>

        <motion.div variants={itemVariants}>
          <ButtonGetStarted />
        </motion.div>
      </motion.div>
    </div>
  );
};