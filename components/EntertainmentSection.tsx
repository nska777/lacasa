"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { t, getLang } from "@/lib/i18n";

const images = [
  "/entertain/1.jpg",
  "/entertain/2.jpg",
  "/entertain/3.jpg",
  "/entertain/4.jpg",
];

export default function EntertainmentSection() {
  const [index, setIndex] = useState(0);

  const searchParams = useSearchParams();
  const lang = getLang(searchParams.get("lang"));

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-[#EDE4DD] pb-24">
      {/* TEXT BLOCK */}
      <div className="max-w-3xl mx-auto text-center pt-20 pb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-serif text-gray-800 mb-6"
        >
          {t(lang, "entertainment_title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[16px] leading-relaxed text-gray-700 px-4"
        >
          {t(lang, "entertainment_text")}
        </motion.p>
      </div>

      {/* SLIDER */}
      <div className="relative w-full h-[80vh] overflow-hidden">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === i ? 1 : 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <Image
              src={img}
              alt="Entertainment"
              fill
              className="object-cover"
            />
          </motion.div>
        ))}

        {/* ARROWS */}
        <button
          onClick={() => setIndex((index - 1 + images.length) % images.length)}
          className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-5xl font-light z-20 cursor-pointer select-none"
        >
          ‹
        </button>

        <button
          onClick={() => setIndex((index + 1) % images.length)}
          className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-5xl font-light z-20 cursor-pointer select-none"
        >
          ›
        </button>
      </div>
    </section>
  );
}
