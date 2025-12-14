"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { t, getLang } from "@/lib/i18n";

export default function HotelPage() {
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
          style={{ backgroundImage: "url('/bg/hotel-bg.jpg')" }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/50 to-black/10" />

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-serif text-white font-semibold drop-shadow-2xl"
        >
          {t(lang, "hotel_title")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white/85 text-xl mt-6 max-w-2xl mx-auto leading-relaxed"
        >
          {t(lang, "hotel_subtitle")}
        </motion.p>
      </section>

      {/* ===== КОЛЛЕКЦИЯ ===== */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-serif font-semibold text-gray-900 text-center mt-5 mb-5">
          {t(lang, "hotel_collection_title")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "/hotel/hotel1.jpg",
            "/hotel/hotel2-2.jpg",
            "/hotel/hotel3-3.jpg",
            "/hotel/hotel4.jpg",
            "/hotel/hotel5-5.jpg",
            "/hotel/hotel6.jpg",
          ].map((src, i) => (
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
                alt="Hotel textile"
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
          href="/catalog?category=hotel"
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          className="px-12 py-4 rounded-2xl text-xl font-semibold text-black backdrop-blur-xl bg-white/10 border border-white/30 shadow-lg hover:bg-white/20 transition"
        >
          {t(lang, "hotel_catalog_btn")}
        </motion.a>
      </div>

      {/* ===== MODAL ===== */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6 cursor-pointer"
            onClick={() => setModalImage(null)}
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              className="max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src={modalImage}
                alt="Hotel textile preview"
                width={1600}
                height={1000}
                className="object-contain w-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
