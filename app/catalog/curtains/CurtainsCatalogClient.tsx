"use client";

import CatalogBook from "@/components/CatalogBook";
import { useSearchParams } from "next/navigation";
import { t, getLang } from "@/lib/i18n";

export default function CurtainsCatalogClient() {
  const searchParams = useSearchParams();
  const lang = getLang(searchParams.get("lang"));

  return (
    <section
      className="
        relative w-full
        pt-28 sm:pt-32 md:pt-40
        pb-10 sm:pb-14 md:pb-20
        px-4 sm:px-6
        text-center
        bg-gradient-to-b from-[#AD9785] via-[#EDE4DD] to-[#EDE4DD]
        overflow-hidden
      "
    >
      <div className="absolute inset-0 -z-10 bg-softShadowAnimated" />

      <h1
        className="
          font-serif font-semibold text-gray-900
          text-3xl sm:text-4xl md:text-6xl
          drop-shadow-2xl
        "
      >
        {t(lang, "catalog_curtains_title")}
      </h1>

      <p
        className="
          text-gray-700
          text-[15px] sm:text-[17px] md:text-xl
          max-w-xl md:max-w-3xl
          mx-auto
          mt-4 sm:mt-5 md:mt-6
          mb-8 sm:mb-10 md:mb-12
          leading-relaxed
        "
      >
        {t(lang, "curtains_text")}
      </p>

      <CatalogBook />
    </section>
  );
}
