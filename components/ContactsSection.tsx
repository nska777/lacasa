"use client";

import { motion } from "framer-motion";
import Link from "next/link";

/* ================== ICONS ================== */

const IconPhone = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path d="M5.5 3.5 8 3l2 4-2 1.5a10 10 0 0 0 4.5 4.5L14 11l4 2-.5 2.5c-.2.9-1 1.5-1.9 1.5A13 13 0 0 1 4 6.4c0-.9.6-1.7 1.5-1.9Z" />
  </svg>
);

const IconTelegram = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path d="M21 4 10 13" />
    <path d="M21 4 15 20l-4-7-7-3 17-6Z" />
  </svg>
);

const IconMail = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="m4 6 8 6 8-6" />
  </svg>
);

const IconLocation = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path d="M12 21s-6-5.1-6-10.2A6 6 0 0 1 18 10.8C18 15.9 12 21 12 21Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const IconClock = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <circle cx="12" cy="12" r="8" />
    <path d="M12 8v4l2.5 2" />
  </svg>
);

/* ================== SECTION ================== */

export default function ContactsSection() {
  return (
    <section className="relative w-full py-32 px-6 overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#3a2a22] via-[#8d7767] to-[#efe7df]" />
      <div className="absolute top-0 inset-x-0 h-48 -z-10 bg-gradient-to-b from-black/30 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-center"
      >
        {/* TITLE */}
        <h2 className="text-5xl font-serif font-semibold text-white drop-shadow-xl mb-6">
          Свяжитесь с нами
        </h2>

        <p className="text-white/90 text-xl max-w-2xl mx-auto mb-16 leading-relaxed">
          Остались вопросы? Нужна консультация дизайнера? Мы всегда на связи —
          выберите удобный способ.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap justify-center gap-6 mb-24">
          {[
            {
              href: "tel:+998977097789",
              label: "Позвонить",
              icon: <IconPhone />,
            },
            {
              href: "https://t.me/Dinosh0109",
              label: "Telegram",
              icon: <IconTelegram />,
              blank: true,
            },
            {
              href: "mailto:Textilelacasa@gmail.com",
              label: "Email",
              icon: <IconMail />,
            },
          ].map((b, i) => (
            <motion.div key={i} whileTap={{ scale: 0.96 }}>
              <Link
                href={b.href}
                target={b.blank ? "_blank" : undefined}
                className="
                  backdrop-blur-xl px-12 py-4 rounded-2xl
                  bg-black/40 border border-white/30
                  text-white text-xl font-semibold
                  shadow-xl hover:bg-black/60
                  transition flex items-center gap-3
                "
              >
                {b.icon}
                {b.label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CONTACT INFO */}
        <div className="text-white/90 max-w-3xl mx-auto mb-20 space-y-3 text-lg">
          <h4 className="text-3xl font-serif font-semibold text-white mb-6">
            Контактная информация
          </h4>

          <p className="flex justify-center gap-2">
            <IconLocation /> Ташкент, улица Навои 21Б
          </p>
          <p className="flex justify-center gap-2">
            <IconPhone /> +998 97 709 77 89
          </p>
          <p className="flex justify-center gap-2">
            <IconMail /> Textilelacasa@gmail.com
          </p>
          <p className="flex justify-center gap-2">
            <IconClock /> Пн–Вс, 10:00 — 19:00
          </p>
        </div>

        {/* MAP */}
        <h3 className="text-4xl font-serif text-white mb-8">Наша локация</h3>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto border border-white/40"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.150067549735!2d69.24694847659468!3d41.29890517131167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b198bc5967b%3A0x9d884316f34a6c2!2s21B%20Navoi%20Street%2C%20Tashkent!5e0!3m2!1sen!2s!4v1736533800000"
            width="100%"
            height="450"
            loading="lazy"
            style={{ border: 0 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
