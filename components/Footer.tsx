"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { t, getLang } from "@/lib/i18n";

export default function Footer() {
  const searchParams = useSearchParams();
  const lang = getLang(searchParams.get("lang"));

  return (
    <motion.footer
      className="w-full bg-[#423e32] text-gray-300 px-10 py-20 font-light"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* ===================== TOP ROW ===================== */}
      <div className="flex items-start justify-between mb-14 flex-wrap gap-10">
        {/* LOGO */}
        <div>
          <Image
            src="/logo-lacasa-white.png"
            alt="LaCasa"
            width={160}
            height={120}
          />
        </div>

        {/* SOCIALS */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">
            {t(lang, "footer_socials")}
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Telegram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Facebook
              </a>
            </li>
          </ul>
        </div>

        {/* CONTACTS */}
        <div className="text-right">
          <h3 className="text-white font-semibold mb-4 text-lg">
            {t(lang, "footer_contact_title")}
          </h3>

          <p className="text-sm mb-2">{t(lang, "footer_contacts")}:</p>

          <p className="text-sm">
            <a href="tel:+998977097789" className="hover:text-white">
              +998 97 709 77 89
            </a>
          </p>

          <p className="mt-2 text-sm">
            <a href="mailto:info@lacasa.uz" className="hover:text-white">
              info@lacasa.uz
            </a>
          </p>

          <p className="text-sm mt-4 text-gray-400">
            {t(lang, "footer_location")}
          </p>
        </div>
      </div>

      {/* ===================== LINE ===================== */}
      <div className="w-full h-px bg-white/20 mb-10" />

      {/* ===================== COPYRIGHT ===================== */}
      <motion.div
        className="text-center text-xs text-gray-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        © {new Date().getFullYear()} Textile LaCasa. {t(lang, "footer_rights")}
      </motion.div>
    </motion.footer>
  );
}
