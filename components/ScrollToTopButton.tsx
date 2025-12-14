"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // или "auto" для мгновенного прыжка
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <button
        onClick={scrollToTop}
        className="w-12 h-12 rounded-full bg-black/70 text-white shadow-lg backdrop-blur-md flex items-center justify-center hover:bg-black transition cursor-pointer"
      >
        ↑
      </button>
    </motion.div>
  );
}
