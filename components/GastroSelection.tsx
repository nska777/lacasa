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
    <section className="w-full bg-[#EEEDE9] py-28 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* LEFT TEXT BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h2 className="text-5xl font-serif text-[#1A1A1A] font-semibold leading-snug mb-8">
            {t(lang, "cornices_title")}
          </h2>

          <p className="text-[19px] text-[#3a3a3a] leading-relaxed mb-6">
            {t(lang, "cornices_text")}
          </p>

          {/* BUTTON */}
          <div className="flex flex-row items-center gap-4 flex-wrap md:flex-nowrap w-full">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href={`/catalog/cornices?lang=${lang}`}
                className="px-6 py-3 border rounded-[8px] border-black text-black tracking-wide text-sm uppercase
                           hover:bg-black hover:text-white transition whitespace-nowrap cursor-pointer"
              >
                {t(lang, "cornices_btn_collection")}
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="relative h-[550px] w-full rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src="/gallery/shtori-home.jpg"
            alt="Textile LaCasa cornices and blinds"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
