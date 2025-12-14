"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { t, getLang } from "@/lib/i18n";

const IMAGES = ["/gallery/1.jpg", "/gallery/2.jpg", "/gallery/3.jpg"];

export default function FullpageSlider() {
  const [index, setIndex] = useState(0);

  const searchParams = useSearchParams();
  const lang = getLang(searchParams.get("lang"));

  /* === AUTO SLIDE (ТОЛЬКО ОДИН setState) === */
  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % IMAGES.length);
    }, 4500);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <section className="w-full bg-gradient-to-b from-[#E6EBE2] to-[#FAF9F7] py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* ================= IMAGE ================= */}
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
          {/* BRAND OVERLAY */}
          <AnimatePresence>
            <motion.div
              key={`brand-${index}`}
              initial={{ opacity: 0, x: "-20%" }}
              animate={{ opacity: 0.25, x: "0%" }}
              exit={{ opacity: 0, x: "20%" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="
                absolute inset-0 z-10
                hidden md:flex
                items-center justify-center
                pointer-events-none select-none
                font-serif uppercase tracking-[0.3em]
                text-[80px] lg:text-[120px]
                text-gray-400
              "
            >
              Textile LaCasa
            </motion.div>
          </AnimatePresence>

          {/* IMAGE SLIDE */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.1 }}
              className="absolute inset-0"
            >
              <Image
                src={IMAGES[index]}
                alt="slide"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ================= TEXT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="w-full max-w-xl text-center md:text-left"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-4">
            {t(lang, "slider_title")}
          </h2>

          <p className="text-gray-700 text-[15px] sm:text-[16px] md:text-lg leading-relaxed">
            {t(lang, "slider_text")}
          </p>

          {/* INDICATORS */}
          <div className="flex justify-center md:justify-start gap-2 mt-8">
            {IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  index === i ? "w-10 bg-gray-900" : "w-4 bg-gray-400/40"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
