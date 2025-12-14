"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { t, getLang } from "@/lib/i18n";

export default function CurtainsPage() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const lang = getLang(searchParams.get("lang"));

  return (
    <>
      <Header />

      {/* ===== HERO ===== */}
      <section className="relative w-full py-40 text-center overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center brightness-[0.7]"
          style={{ backgroundImage: "url('/bg/curtains-bg.jpg')" }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/50 to-black/10" />

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-serif text-white font-semibold drop-shadow-2xl"
        >
          {t(lang, "curtains_title")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white/85 text-xl mt-6 max-w-2xl mx-auto leading-relaxed"
        >
          {t(lang, "curtains_subtitle")}
        </motion.p>
      </section>

      {/* ===== ОСНОВНАЯ КОЛЛЕКЦИЯ ===== */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-serif font-semibold text-gray-900 mt-5 mb-5 text-center">
          {t(lang, "curtains_collection_title")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Array.from(
            { length: 9 },
            (_, i) => `/curtains/curtain${i + 1}.jpg`
          ).map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="overflow-hidden rounded-2xl shadow-xl cursor-pointer"
              onClick={() => setModalImage(src)}
            >
              <Image
                src={src}
                alt="Curtain"
                width={600}
                height={400}
                className="object-cover w-full h-72 hover:scale-105 transition"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== BLACKOUT ===== */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-serif font-semibold text-gray-900 mb-10 text-center">
          {t(lang, "curtains_blackout_title")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Array.from(
            { length: 6 },
            (_, i) => `/curtains/blackout${i + 1}.jpg`
          ).map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="overflow-hidden rounded-2xl shadow-xl cursor-pointer"
              onClick={() => setModalImage(src)}
            >
              <Image
                src={src}
                alt="Blackout curtain"
                width={600}
                height={400}
                className="object-cover w-full h-72 hover:scale-105 transition"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== MODAL ===== */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-6 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalImage(null)}
          >
            <motion.img
              src={modalImage}
              className="max-w-4xl w-full rounded-2xl shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== BUTTON ===== */}
      <div className="text-center pb-24">
        <motion.a
          href="/catalog?category=curtains"
          whileTap={{ scale: 0.96 }}
          whileHover={{ scale: 1.05 }}
          className="relative px-14 py-4 rounded-2xl text-xl font-semibold text-darkgray backdrop-blur-xl bg-white/10 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.25)] transition-all duration-500 hover:bg-white/20 hover:border-white/30 hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
        >
          {t(lang, "curtains_catalog_btn")}
        </motion.a>
      </div>

      <Footer />
    </>
  );
}
