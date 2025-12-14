"use client";

import CatalogBookFloor from "@/components/CatalogBookFloor";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { t, getLang } from "@/lib/i18n";

export default function FloorCatalogClient() {
  const searchParams = useSearchParams();
  const lang = getLang(searchParams.get("lang"));

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div
        className="
          absolute inset-0 -z-20
          bg-cover bg-top bg-no-repeat
          blur-[10px]
          scale-110
        "
        style={{ backgroundImage: "url('/bg/floor-top.jpg')" }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 -z-10 bg-black/30" />

      {/* GRADIENT */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[#d8c9bb]/40 to-[#e9dfd7]" />

      {/* TEXT */}
      <section className="relative w-full pt-48 pb-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-serif font-semibold text-white drop-shadow-2xl"
        >
          {t(lang, "floor_title")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white/90 text-xl max-w-3xl mx-auto mt-6 leading-relaxed"
        >
          {t(lang, "floor_text")}
        </motion.p>
      </section>

      <CatalogBookFloor />
    </div>
  );
}
