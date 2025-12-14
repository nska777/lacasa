"use client";

import CatalogBookHotel from "@/components/CatalogBookHotel";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { t, getLang } from "@/lib/i18n";

export default function HotelCatalogClient() {
  const searchParams = useSearchParams();
  const lang = getLang(searchParams.get("lang"));

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      {/* ===== BACKGROUND ===== */}
      <div
        className="
          absolute inset-0 -z-20
          bg-cover bg-top bg-no-repeat
          blur-[10px]
          scale-110
        "
        style={{ backgroundImage: "url('/bg/brown-top.jpg')" }}
      />

      <div className="absolute inset-0 -z-10 bg-black/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[#d8c9bb]/40 to-[#e9dfd7]" />

      {/* ===== TEXT ===== */}
      <section className="relative w-full pt-32 sm:pt-40 md:pt-48 pb-12 sm:pb-16 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            font-serif font-semibold text-white drop-shadow-2xl
            text-3xl sm:text-4xl md:text-6xl
            leading-snug
          "
        >
          {t(lang, "catalog_hotel_title")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            text-white/90
            text-[15px] sm:text-[17px] md:text-xl
            max-w-xl md:max-w-3xl
            mx-auto
            mt-4 sm:mt-6
            leading-relaxed
          "
        >
          {t(lang, "hotel_catalog_text")}
        </motion.p>
      </section>

      {/* ===== CATALOG ===== */}
      <section className="relative w-full flex justify-center overflow-x-hidden pb-16 sm:pb-20">
        <div
          className="
            w-full
            max-w-[100vw]
            flex justify-center
            scale-[0.82] sm:scale-90 md:scale-100
            origin-top
          "
        >
          <CatalogBookHotel />
        </div>
      </section>
    </div>
  );
}
