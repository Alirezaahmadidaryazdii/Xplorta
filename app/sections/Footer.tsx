"use client";

import Link from "next/link";
import Image from "next/image";
import { MessageQuestion, Instagram, Youtube } from "iconsax-reactjs";
import { LiaLinkedin } from "react-icons/lia";
import { motion, Variants } from "framer-motion";

export default function Footer() {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="relative w-full flex justify-center items-end pb-10 pt-20 md:pt-40 overflow-hidden">     

 <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="
          absolute left-0 -translate-x-1/2 -bottom-[100px] 
          w-[80%] h-[300px] 
          md:w-[600px] md:h-[400px]
          bg-[radial-gradient(ellipse_at_center,rgba(15,113,126,0.5)_0%,transparent_70%)] 
          blur-[60px]
          z-0 pointer-events-none
        "
      />
      <motion.footer
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="
          relative z-10
          w-[95%] max-w-[1369px] 
          min-h-[318px]
          flex flex-col justify-between
          px-6 py-8 md:px-[104px] md:pb-6 md:pt-12
          bg-black/20 backdrop-blur-[50px]
          rounded-[30px] md:rounded-[50px]
          border border-white/5
          shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]
        "
      >
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-0">
          {/* Logo Section */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-col items-center md:items-start gap-6 w-full md:w-auto"
          >
            <div className="flex items-center gap-3">
              <Image
                src="/favicon.svg"
                alt="XPLORTA Logo"
                width={60}
                height={60}
                className="md:w-[70px] md:h-[70px]"
              />
              <h2 className="text-text-primary text-3xl md:text-4xl font-bold tracking-wide uppercase">
                XPLORTA
              </h2>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-white rounded-[50px] px-6 py-2.5 hover:bg-gray-200 transition-colors"
            >
              <MessageQuestion size="18" variant="Bold" color="#0F717E" />
              <span className="text-[#0F717E] font-medium text-sm">
                Drop a Backup
              </span>
            </motion.button>
          </motion.div>

          {/* Links Section */}
          <div className="grid grid-cols-2 md:flex w-full md:w-auto gap-x-4 gap-y-8 md:gap-12 justify-center">
            
            {/* Info */}
            <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start gap-4 min-w-[100px]">
              <h4 className="text-white text-[10px] font-bold uppercase tracking-widest opacity-80">
                Info
              </h4>
              <ul className="flex flex-col items-center md:items-start gap-2">
                {["Courses", "Schedule", "Pricing", "Teachers"].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-white text-sm hover:text-[#0F717E] transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* About */}
            <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start gap-4 min-w-[100px]">
              <h4 className="text-white text-[10px] font-bold uppercase tracking-widest opacity-80">
                About
              </h4>
              <ul className="flex flex-col items-center md:items-start gap-2">
                {["Blog", "About us"].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-white text-sm hover:text-[#0F717E] transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Us */}
            <motion.div variants={itemVariants} className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start gap-4 min-w-[140px]">
              <h4 className="text-white text-[10px] font-bold uppercase tracking-widest opacity-80">
                Contact Us
              </h4>
              <ul className="flex flex-col items-center md:items-start gap-2 text-white text-sm">
                <li>1901 Thornridge Cir</li>
                <li>+1 891 989-11-91</li>
                <li>hello@logoipsum.com</li>
              </ul>
            </motion.div>
          </div>
        </div>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col-reverse md:flex-row justify-between items-center mt-10 md:mt-0 pt-4 border-t border-white/5 md:border-none gap-4"
        >
          <p className="text-white text-[10px] opacity-50 tracking-wider">
            © 2025 Xplorta. All rights reserved
          </p>

          <div className="flex items-center gap-6">
            <Link href="#" className="group">
              <motion.div whileHover={{ y: -3, scale: 1.1 }}>
                <Instagram
                  size="24"
                  className="text-[#0F717E] group-hover:text-white transition-colors"
                />
              </motion.div>
            </Link>
            <Link href="#" className="group">
              <motion.div whileHover={{ y: -3, scale: 1.1 }}>
                <Youtube
                  size="24"
                  className="text-[#0F717E] group-hover:text-white transition-colors"
                />
              </motion.div>
            </Link>
            <Link href="#" className="group">
              <motion.div whileHover={{ y: -3, scale: 1.1 }}>
                <LiaLinkedin
                  size="27"
                  className="text-[#0F717E] group-hover:text-white transition-colors"
                />
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </motion.footer>
    </div>
  );
}
