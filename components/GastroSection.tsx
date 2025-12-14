"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { t, getLang } from "@/lib/i18n";

export default function TextWithImage() {
  const searchParams = useSearchParams();
  const lang = getLang(searchParams.get("lang"));

  return (
    <section className="w-full bg-[#EEEDE9] py-14 sm:py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        {/* ================= TEXT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="font-serif font-semibold text-[#1A1A1A] text-2xl sm:text-3xl md:text-5xl leading-snug mb-5">
            {t(lang, "hotel_title")}
          </h2>

          <p className="text-[#3a3a3a] text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
            {t(lang, "hotel_text")}
          </p>

          {/* ================= BUTTONS ================= */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            {/* PRIMARY */}
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href={`/catalog/hotel?lang=${lang}`}
                className="
                  inline-flex items-center justify-center
                  h-[48px] min-w-[240px]
                  px-8
                  rounded-xl
                  bg-[#1A1A1A]
                  text-white text-sm font-medium
                  tracking-wide
                  shadow-md
                  hover:bg-black
                  transition
                "
              >
                {t(lang, "hotel_btn_collection")}
              </Link>
            </motion.div>

            {/* SECONDARY */}
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href={`/design?lang=${lang}`}
                className="
                  inline-flex items-center justify-center
                  h-[48px] min-w-[240px]
                  px-8
                  rounded-xl
                  border border-black/30
                  text-[#1A1A1A] text-sm font-medium
                  tracking-wide
                  hover:border-black
                  hover:bg-black hover:text-white
                  transition
                "
              >
                {t(lang, "hotel_btn_designer")}
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* ================= IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full h-[280px] sm:h-[420px] md:h-[550px] rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src="/gallery/hotel-room.jpg"
            alt="Premium LaCasa hotel textiles"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
