"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { t, getLang } from "@/lib/i18n";

export default function SpaBlock() {
  const searchParams = useSearchParams();
  const lang = getLang(searchParams.get("lang"));

  return (
    <section className="w-full bg-gradient-to-b from-[#FFFFFF] to-[#F2F1ED] py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full h-[300px] sm:h-[420px] md:h-[520px] rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src="/gallery/spas.jpg"
            alt="Textile LaCasa flooring"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="font-serif font-semibold text-[#1A1A1A] text-3xl md:text-4xl leading-snug mb-5">
            {t(lang, "textile_floor_title")}
          </h2>

          <p className="text-[#3A3A3A] text-[16px] md:text-[18px] leading-relaxed mb-10 max-w-xl mx-auto md:mx-0">
            {t(lang, "textile_floor_subtitle")}
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            {/* 🔹 Коллекция тканевых покрытий */}
            <Link
              href={`/flooring?lang=${lang}`}
              className="
                flex items-center justify-center
                w-full sm:min-w-[280px]
                h-[52px]
                rounded-xl
                bg-[#1A1A1A]
                text-white
                text-[15px] font-medium
                shadow-lg
                hover:bg-black
                transition
              "
            >
              {t(lang, "textile_floor_collection_title")}
            </Link>

            {/* 🔹 Весь каталог покрытий */}
            <Link
              href={`/catalog/floor?lang=${lang}`}
              className="
                flex items-center justify-center
                w-full sm:min-w-[280px]
                h-[52px]
                rounded-xl
                bg-white
                text-[#1A1A1A]
                text-[15px] font-medium
                border border-black/30
                hover:border-black
                hover:bg-[#F7F6F3]
                transition
              "
            >
              {t(lang, "textile_floor_catalog_btn")}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
