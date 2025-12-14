"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { t, getLang } from "@/lib/i18n";

export default function PromoModal() {
  const [open, setOpen] = useState(true);

  const searchParams = useSearchParams();
  const lang = getLang(searchParams.get("lang"));

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* BACKGROUND */}
      <Image
        src="/promo-bg.jpg"
        alt="promo background"
        fill
        className="object-cover"
        priority
      />

      {/* MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute top-10 left-10 bg-white shadow-2xl rounded-xl p-10 w-[420px] max-w-[90%]"
          >
            {/* CLOSE */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black transition text-xl"
            >
              ×
            </button>

            <div className="text-sm tracking-wider text-gray-500 mb-4 uppercase">
              {t(lang, "promo_label")}
            </div>

            <h2 className="text-3xl font-serif text-gray-900 leading-snug mb-6">
              {t(lang, "promo_title")}
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              {t(lang, "promo_text")}
            </p>

            {/* CTA */}
            <a
              href="https://t.me/Dinosh0109"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-black text-white text-center py-3 rounded-lg hover:bg-neutral-800 transition cursor-pointer"
            >
              {t(lang, "promo_btn")}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
