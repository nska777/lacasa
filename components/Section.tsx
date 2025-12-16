"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { t, getLang } from "@/lib/i18n";

export default function Section() {
  const searchParams = useSearchParams();
  const lang = getLang(searchParams.get("lang"));

  return (
    <section
      className="
        w-full
        bg-gradient-to-b from-[#FAF9F7] to-[#E6EBE2]
        pt-10 pb-14
        sm:pt-14 sm:pb-20
        md:pt-24 md:pb-24
        overflow-hidden
      "
    >
      <div
        className="
          max-w-7xl mx-auto
          grid grid-cols-1 md:grid-cols-2
          gap-10 md:gap-20
          px-4 sm:px-6
        "
      >
        {/* ================= IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="
            relative w-full
            min-h-[60vh]        /* 🔥 МОБИЛКА — ЗАПОЛНЯЕТ ЭКРАН */
            h-[60vh]
            sm:h-[420px]
            md:h-[550px]        /* 💻 ДЕСКТОП — как было */
            order-1 md:order-2
          "
        >
          <Image
            src="/holiday-2.jpg"
            alt="Luxury curtains"
            fill
            priority
            className="object-cover rounded-2xl shadow-xl"
          />
        </motion.div>

        {/* ================= TEXT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="
            flex flex-col justify-center
            text-center md:text-left
            order-2 md:order-1
          "
        >
          <h2
            className="
              text-2xl sm:text-3xl
              font-semibold text-gray-900
              leading-snug mb-4
            "
          >
            {t(lang, "section_title")}
          </h2>

          <p
            className="
              text-gray-700
              text-[15px] sm:text-[16px] md:text-[17px]
              leading-relaxed
              mb-8
              max-w-xl
              mx-auto md:mx-0
            "
          >
            {t(lang, "section_text_1")}
            <br />
            <br />
            {t(lang, "section_text_2")}
          </p>

          {/* ================= BUTTONS ================= */}
          <div
            className="
              flex flex-col sm:flex-row
              gap-3 sm:gap-4
              justify-center md:justify-start
            "
          >
            <Link
              href={`/catalog/curtains?lang=${lang}`}
              className="
                w-full sm:w-auto
                px-4 sm:px-5 py-2.5
                border border-black/80
                rounded-md
                text-black
                text-[12px] sm:text-[13px]
                uppercase tracking-wide
                hover:bg-black hover:text-white
                transition
                text-center
              "
            >
              {t(lang, "section_btn_fabrics")}
            </Link>

            <Link
              href={`/portfolio?lang=${lang}`}
              className="
                w-full sm:w-auto
                px-4 sm:px-5 py-2.5
                border border-black/80
                rounded-md
                text-black
                text-[12px] sm:text-[13px]
                uppercase tracking-wide
                hover:bg-black hover:text-white
                transition
                text-center
              "
            >
              {t(lang, "section_btn_projects")}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
