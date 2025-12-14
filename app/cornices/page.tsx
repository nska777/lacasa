"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { t, getLang } from "@/lib/i18n";

export default function CornicesPage() {
  const [modalSrc, setModalSrc] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const lang = getLang(searchParams.get("lang"));

  return (
    <>
      <Header />

      {/* ===== HERO ===== */}
      <section className="relative w-full py-40 text-center overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center brightness-[0.7]"
          style={{ backgroundImage: "url('/bg/cornices-bg.jpg')" }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/50 to-black/10" />

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-serif text-white font-semibold drop-shadow-2xl"
        >
          {t(lang, "cornices_title")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white/85 text-xl mt-6 max-w-2xl mx-auto leading-relaxed"
        >
          {t(lang, "cornices_subtitle")}
        </motion.p>
      </section>

      {/* ===== COLLECTION ===== */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-serif font-semibold text-gray-900 text-center mt-5 mb-5">
          {t(lang, "cornices_collection_title")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "/cornices/cornice1.jpg",
            "/cornices/cornice2.jpg",
            "/cornices/cornice3.jpg",
            "/cornices/cornice4.jpg",
            "/cornices/cornice5.jpg",
            "/cornices/cornice6.jpg",
          ].map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="overflow-hidden rounded-2xl shadow-xl cursor-pointer"
              onClick={() => setModalSrc(src)}
            >
              <Image
                src={src}
                alt="Cornices and blinds"
                width={600}
                height={400}
                className="object-cover w-full h-72 hover:scale-110 transition duration-500"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== BUTTON ===== */}
      <div className="text-center pb-24">
        <motion.a
          href="/catalog?category=cornices"
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          className="
            px-12 py-4 rounded-2xl 
            bg-white/10 backdrop-blur-xl 
            border border-white/30
            text-gray-900 text-xl font-semibold
            shadow-lg
            hover:bg-white/20
            transition duration-300
          "
        >
          {t(lang, "cornices_catalog_btn")}
        </motion.a>
      </div>

      {/* ===== MODAL ===== */}
      <AnimatePresence>
        {modalSrc && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalSrc(null)}
          >
            <motion.img
              src={modalSrc}
              className="max-w-4xl rounded-2xl shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
