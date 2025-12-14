"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { t, getLang } from "@/lib/i18n";

/* ================= TYPES ================= */

interface StoryBlockProps {
  number: string;
  title: string;
  text: string;
  img: string;
  reverse?: boolean;
  callButton?: boolean;
  callText?: string;
}

/* ================= PAGE ================= */

export default function DesignProjectPage() {
  const { scrollY } = useViewportScroll();
  const heroParallax = useTransform(scrollY, [0, 400], [0, 120]);

  const searchParams = useSearchParams();
  const lang = getLang(searchParams.get("lang"));

  return (
    <>
      <Header />

      {/* ================= HERO ================= */}
      <section className="relative w-full pt-28 sm:pt-40 pb-24 sm:pb-40 px-4 text-center overflow-hidden">
        <motion.div
          style={{ y: heroParallax }}
          className="absolute inset-0 -z-10 bg-cover bg-center blur-[3px] brightness-[0.85]"
        >
          <div
            className="w-full h-full"
            style={{ backgroundImage: "url('/bg/design-hero-2.jpg')" }}
          />
        </motion.div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/30 to-transparent" />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-serif font-semibold text-white drop-shadow-2xl text-3xl sm:text-4xl md:text-6xl"
        >
          {t(lang, "design_title")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mt-4 sm:mt-6"
        >
          {t(lang, "design_subtitle")}
        </motion.p>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-20 sm:py-32 px-4 w-full bg-gradient-to-b from-[#FAF9F7] to-[#EEEDE9]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-center font-semibold text-gray-900 mb-16">
          {t(lang, "design_process_title")}
        </h2>

        <div className="max-w-7xl mx-auto space-y-20 sm:space-y-32">
          <StoryBlock
            number="01"
            title={t(lang, "design_step_1_title")}
            text={t(lang, "design_step_1_text")}
            img="/design/call.jpg"
            callButton
            callText={t(lang, "design_call")}
          />

          <StoryBlock
            number="02"
            title={t(lang, "design_step_2_title")}
            text={t(lang, "design_step_2_text")}
            img="/design/fabrics.jpg"
            reverse
          />

          <StoryBlock
            number="03"
            title={t(lang, "design_step_3_title")}
            text={t(lang, "design_step_3_text")}
            img="/design/designer.jpg"
          />

          <StoryBlock
            number="04"
            title={t(lang, "design_step_4_title")}
            text={t(lang, "design_step_4_text")}
            img="/design/3d.jpg"
            reverse
          />

          <StoryBlock
            number="05"
            title={t(lang, "design_step_5_title")}
            text={t(lang, "design_step_5_text")}
            img="/design/sewing.jpg"
          />

          <StoryBlock
            number="06"
            title={t(lang, "design_step_6_title")}
            text={t(lang, "design_step_6_text")}
            img="/design/installation.jpg"
            reverse
          />
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="text-center py-20 sm:py-32 px-4 bg-[#e3d6c9]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-gray-900">
          {t(lang, "design_cta_title")}
        </h2>

        <p className="text-gray-700 text-base sm:text-lg mt-4 mb-8 max-w-xl mx-auto">
          {t(lang, "design_cta_text")}
        </p>

        <Link
          href="https://t.me/Dinosh0109"
          target="_blank"
          className="inline-block px-10 sm:px-16 py-3 sm:py-4 rounded-xl bg-[#c8b59c] hover:bg-[#b79f88] text-white font-semibold shadow-lg transition"
        >
          {t(lang, "design_cta_btn")}
        </Link>
      </section>

      <Footer />
    </>
  );
}

/* ================= STORY BLOCK ================= */

function StoryBlock({
  number,
  title,
  text,
  img,
  reverse,
  callButton,
  callText,
}: StoryBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`flex flex-col md:flex-row items-center gap-10 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="md:w-1/2">
        <Image
          src={img}
          alt={title}
          width={900}
          height={600}
          className="rounded-3xl shadow-2xl object-cover w-full"
        />
      </div>

      <div className="md:w-1/2 text-center md:text-left">
        <span className="text-4xl sm:text-5xl font-serif text-[#c8b59c] block mb-3">
          {number}
        </span>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-3">
          {title}
        </h3>

        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
          {text}
        </p>

        {callButton && callText && (
          <a
            href="tel:+998977097789"
            className="inline-block mt-5 px-8 py-3 bg-[#c8b59c] hover:bg-[#b8a18a] text-white text-sm sm:text-lg font-semibold rounded-xl shadow-lg transition"
          >
            {callText}
          </a>
        )}
      </div>
    </motion.div>
  );
}
