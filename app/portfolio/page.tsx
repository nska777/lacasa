"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { t, getLang } from "@/lib/i18n";

type ItemType = {
  src: string;
};

const portfolioItems: ItemType[] = [
  { src: "/portfolio/1.webm" },
  { src: "/portfolio/2.webm" },
  { src: "/portfolio/3.webm" },
  { src: "/portfolio/4.webm" },
  { src: "/portfolio/5.webm" },
  { src: "/portfolio/6.webm" },
  { src: "/portfolio/7.webm" },
  { src: "/portfolio/8.webm" },
  { src: "/portfolio/9.webm" },
];

export default function PortfolioPage() {
  const [modal, setModal] = useState<ItemType | null>(null);

  const searchParams = useSearchParams();
  const lang = getLang(searchParams.get("lang"));

  return (
    <>
      <Header />

      {/* ===== HERO ===== */}
      <section className="relative w-full pt-48 pb-40 text-center overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center blur-[2px] brightness-[0.85]"
          style={{ backgroundImage: "url('/bg/brown-top.jpg')" }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/20 to-transparent" />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-serif font-semibold text-white drop-shadow-2xl"
        >
          {t(lang, "portfolio_title")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="text-white/90 text-xl mt-4 max-w-2xl mx-auto leading-relaxed"
        >
          {t(lang, "portfolio_subtitle")}
        </motion.p>
      </section>

      {/* ===== VIDEO GRID ===== */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {portfolioItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer group bg-black"
            onClick={() => setModal(item)}
          >
            <video
              src={item.src}
              muted
              loop
              playsInline
              autoPlay
              className="object-cover w-full h-full group-hover:scale-105 transition duration-300"
            />

            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <span className="text-white text-4xl">▶</span>
            </div>
          </motion.div>
        ))}
      </section>

      {/* ===== MODAL ===== */}
      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setModal(null)}
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setModal(null)}
                className="
                  absolute -top-4 -right-4 z-50
                  w-10 h-10 rounded-full
                  bg-black/70 text-white
                  flex items-center justify-center
                  text-2xl font-light
                  hover:bg-black transition
                "
                aria-label="Close video"
              >
                ✕
              </button>

              <video
                src={modal.src}
                controls
                autoPlay
                playsInline
                className="w-full rounded-2xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
