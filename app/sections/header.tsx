"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ButtonGetStarted } from "../components/ui/Button-getStarted";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useLenis } from "lenis/react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const lenis = useLenis();

  const navLinks = [
    // { href: "#overview", label: "Overview" },
    { href: "#platforms", label: "Platforms" },
    { href: "#insights", label: "Insights" },
    { href: "#usecases", label: "Use Cases" },
    { href: "#comments", label: "Comments" },
    { href: "#blogs", label: "Blogs" },
    { href: "#getstarted", label: "Get Started" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (href.startsWith("#")) {
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);

      if (element) {
        if (lenis) {
          lenis.scrollTo(element, { offset: -100 });
        } else {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    setIsMenuOpen(false);
  };

  const mobileMenuVars: Variants = {
    initial: { scaleY: 0 },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.4,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.2,
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const mobileLinkVars: Variants = {
    initial: {
      y: "30vh",
      transition: { duration: 0.4, ease: [0.37, 0, 0.63, 1] },
    },
    open: {
      y: 0,
      transition: { duration: 0.5, ease: [0, 0.55, 0.45, 1] },
    },
  };

  const containerVars: Variants = {
    initial: {
      transition: { staggerChildren: 0.07, staggerDirection: -1 },
    },
    open: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.07,
        staggerDirection: 1,
      },
    },
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="fixed z-[1000] top-0 w-full max-w-6xl bg-background/80 backdrop-blur-lg"
    >
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={120}
            height={100}
            className="w-24 sm:w-32"
          />
        </Link>

        <nav
          className="hidden md:flex items-center rounded-full border-2 border-border bg-card px-2 py-1 relative"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {navLinks.map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              onMouseEnter={() => setHoveredIndex(index)}
              className="relative px-4 py-1 text-sm text-text-secondary transition-colors hover:text-text-primary z-10"
            >
              {hoveredIndex === index && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-border rounded-full -z-10"
                  transition={{
                    type: "spring",
                    bounce: 0.2,
                    duration: 0.6,
                  }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonGetStarted />
        </div>

        <motion.button
          className="md:hidden text-text-primary z-50 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </motion.div>
        </motion.button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="md:hidden fixed right-0 top-[64px] w-[280px] h-[calc(100vh-64px)] bg-background border-l border-border origin-top overflow-y-auto shadow-xl rounded-l-2xl"
          >
            <motion.nav
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex flex-col items-center gap-y-6 py-8 px-4"
            >
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  className="overflow-hidden w-full text-center"
                >
                  <motion.div variants={mobileLinkVars}>
                    <Link
                      href={link.href}
                      className="block text-2xl text-text-primary font-medium hover:text-primary transition-colors py-2"
                      onClick={(e) => handleScroll(e, link.href)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                </div>
              ))}

              <ButtonGetStarted />
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}