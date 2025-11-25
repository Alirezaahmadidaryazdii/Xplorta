"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp2 } from "iconsax-reactjs";
import { useEffect, useState } from "react";
import { useLenis } from "lenis/react"; // مطمئن شو که این هوک ایمپورت شده باشه

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const handleScrollVisibility = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.body.scrollHeight;

      // وقتی کاربر به 150 پیکسلی انتهای صفحه رسید، دکمه نمایش داده شود
      if (scrollY + windowHeight >= docHeight - 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScrollVisibility);
    return () => window.removeEventListener("scroll", handleScrollVisibility);
  }, []);

  const scrollToTop = () => {
    if (lenis) {
      // استفاده از متد scrollTo لنیس برای بازگشت به بالا (0)
      lenis.scrollTo(0, {
        // تنظیمات سرعت و نرمی (اختیاری - اگر حذف کنید از تنظیمات گلوبال استفاده می‌کند)
        duration: 2, 
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // افکت easeOutExpo برای توقف نرم
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed right-4 bottom-10 md:right-10 md:bottom-10 z-50">
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="p-3 md:p-4 bg-primary hover:bg-primary/90 backdrop-blur-md text-white rounded-full shadow-xl border border-white/10 active:scale-95 flex items-center justify-center"
          >
            <ArrowUp2 size="24" variant="Bold" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}