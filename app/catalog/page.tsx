"use client";

import Header from "@/components/Header";
import { Suspense } from "react";
import Footer from "@/components/Footer";
import { useSearchParams } from "next/navigation";
import { t, getLang } from "@/lib/i18n";

export default function CatalogPage() {
  const searchParams = useSearchParams();
  const lang = getLang(searchParams.get("lang"));

  const cards = [
    {
      key: "catalog_unified",
      img: "/cat-curtains.jpg",
      link: "/catalog/curtains",
    },
    {
      key: "catalog_blackout",
      img: "/cat-blackout.jpg",
      link: "/catalog/blackout",
    },
    {
      key: "catalog_hotel",
      img: "/cat-hotel.jpg",
      link: "/catalog/hotel",
    },
    {
      key: "catalog_floor",
      img: "/cat-floor.jpg",
      link: "/catalog/floor",
    },
    {
      key: "catalog_cornices",
      img: "/cat-cornices.jpg",
      link: "/catalog/cornices",
    },
  ];

  return (
    <>
      <Suspense fallback={null}>
        <Header />
      </Suspense>

      <section className="relative w-full min-h-screen pt-40 pb-32 px-6 text-center overflow-hidden">
        {/* TOP GRADIENT */}
        <div
          className="
            absolute top-0 left-0 w-full h-64 z-0
            bg-gradient-to-b
            from-[#5c4433]
            via-[#bca792]
            to-transparent
          "
        />

        <div className="absolute inset-0 -z-10 bg-softShadowAnimated" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* TITLE */}
          <h1 className="text-5xl md:text-6xl font-serif text-gray-900 font-semibold drop-shadow-2xl">
            {t(lang, "catalog_title")}
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-700 text-xl max-w-2xl mx-auto mt-6 mb-16 leading-relaxed">
            {t(lang, "catalog_text")}
          </p>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-10">
            {cards.map((card, i) => (
              <a
                key={card.key}
                href={`${card.link}?lang=${lang}`}
                className="
                  group relative h-80 rounded-2xl overflow-hidden
                  bg-black/30 backdrop-blur-md
                  border border-white/10
                  shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)]
                  opacity-0 translate-y-10 animate-card-appear
                  transition-all duration-700
                "
                style={{ animationDelay: `${0.2 + i * 0.15}s` }}
              >
                {/* IMAGE */}
                <div
                  className="
                    absolute inset-0 bg-cover bg-center
                    blur-[2px] opacity-90
                    group-hover:blur-none group-hover:opacity-100
                    transition-all duration-700
                    scale-105 group-hover:scale-100
                  "
                  style={{ backgroundImage: `url(${card.img})` }}
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700" />

                {/* FRAME */}
                <div
                  className="
                    absolute inset-3 rounded-xl
                    border border-white/40
                    opacity-80 transition-all duration-700
                    group-hover:opacity-0
                  "
                />

                {/* TEXT */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-2xl font-semibold tracking-wide text-center transition-all duration-500 group-hover:opacity-0">
                    {t(lang, card.key)}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
