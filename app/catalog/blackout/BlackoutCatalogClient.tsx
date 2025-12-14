"use client";

import CatalogBookBlackout from "@/components/CatalogBookBlackout";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { t, getLang } from "@/lib/i18n";

export default function BlackoutCatalogClient() {
  const searchParams = useSearchParams();
  const lang = getLang(searchParams.get("lang"));

  return (
    <section
      className="
        relative w-full pt-40 pb-20 px-6 text-center
        bg-gradient-to-b from-[#8A7A6F] via-[#CBBEB4] to-[#EDE4DD]
        overflow-hidden
      "
    >
      <div className="absolute inset-0 -z-10 bg-softShadowAnimated" />

      <motion.h1
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-serif text-white font-semibold drop-shadow-2xl"
      >
        {t(lang, "blackout_title")}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
        className="text-white/90 text-xl max-w-3xl mx-auto mt-6 mb-12 leading-relaxed"
      >
        {t(lang, "blackout_text")}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.45, ease: "easeOut" }}
      >
        <CatalogBookBlackout />
      </motion.div>
    </section>
  );
}
