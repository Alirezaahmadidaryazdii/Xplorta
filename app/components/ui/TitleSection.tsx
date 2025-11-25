"use client";

import { ReactElement } from "react";
import { motion } from "framer-motion";

export function TitleSection({
  title1,
  title2,
  subtitle,
  icon,
}: {
  title1: string;
  title2: string;
  subtitle: string;
  icon: ReactElement;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 px-4 w-full">
      <motion.span
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-2 flex items-center justify-center gap-2 px-4 py-2 w-fit max-w-full sm:min-w-[300px] md:w-[440px] min-h-[40px] sm:h-[45px] bg-gradient-to-r from-[#042d2e99] via-secondary to-[#042d2e99] rounded-full text-primary font-clash font-normal text-sm sm:text-[17px] leading-tight sm:leading-[25px] tracking-[0.02em] text-center"
      >
        <span className="shrink-0">{icon}</span>
        <span className="truncate">{subtitle}</span>
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="
    flex flex-col justify-center items-center text-center
    text-2xl sm:text-5xl lg:text-[60px]
    leading-[1.3] sm:leading-[1.2] lg:leading-[70px]
    font-bold tracking-[0.02em]
    bg-clip-text text-transparent bg-gradient-to-b
    from-text-primary from-[70%] to-text-secondary
    w-full max-w-[967px]
  "
      >
        <span className="font-extrabold">{title1}</span>
        <span className="font-extrabold">{title2}</span>
      </motion.h1>
    </div>
  );
}
