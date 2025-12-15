"use client";

import Header from "@/components/Header";
import Section from "@/components/Section";
import FullpageSlider from "@/components/FullpageSlider";
import GastroSection from "@/components/GastroSection";
import SpaBlock from "@/components/SpaBlock";
import GastroSelection from "@/components/GastroSelection";
import EntertainmentSection from "@/components/EntertainmentSection";
import LocationBlock from "@/components/LocationBlock";
import PromoModal from "@/components/PromoModal";
import SubscribeBlock from "@/components/SubscribeBlock";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { t, getLang } from "@/lib/i18n";

export default function HomePage() {
  const searchParams = useSearchParams();
  const lang = getLang(searchParams.get("lang"));

  const cards = [
    { key: "curtains", img: "/cat-curtains.jpg", link: "/curtains" },
    { key: "hotel", img: "/cat-hotel.jpg", link: "/hotel" },
    { key: "flooring", img: "/cat-floor.jpg", link: "/flooring" },
    { key: "cornices", img: "/cat-cornices.jpg", link: "/cornices" },
  ];

  return (
    <>
      <Header />

      {/* ===== HERO ===== */}
      <section
        className="relative w-full min-h-screen bg-center bg-no-repeat bg-cover overflow-x-hidden"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

        {/* 🔧 УМЕНЬШИЛ padding-top НА МОБИЛКЕ */}
        <div className="relative pt-20 sm:pt-32 pb-6 flex flex-col items-center text-center px-4">
          <h2 className="text-white font-serif text-3xl sm:text-5xl xl:text-6xl tracking-wide drop-shadow-2xl">
            {t(lang, "categories_title")}
          </h2>

          <p className="text-white/70 font-light text-base sm:text-lg mt-3 max-w-xl">
            {t(lang, "categories_subtitle")}
          </p>
        </div>

        {/* ===== MOBILE carousel ===== */}
        <div className="sm:hidden relative w-full overflow-x-auto px-4 pb-4 no-scrollbar">
          <div className="flex gap-4 snap-x snap-mandatory pr-6">
            {cards.map((card) => (
              <Link
                key={card.key}
                href={`${card.link}?lang=${lang}`}
                className="
                  snap-center shrink-0
                  w-[85%] h-[300px]
                  relative rounded-2xl overflow-hidden
                  bg-black/30 backdrop-blur-md
                  shadow-[0_0_30px_-10px_rgba(0,0,0,0.6)]
                "
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${card.img})` }}
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center px-4">
                  <span className="text-white text-xl font-semibold text-center">
                    {t(lang, `category_${card.key}`)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {}
        <div className="hidden sm:flex relative w-full justify-center px-6 mt-10 overflow-x-hidden">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 max-w-7xl w-full">
            {cards.map((card) => (
              <Link
                key={card.key}
                href={`${card.link}?lang=${lang}`}
                className="
                  group relative
                  h-[260px] lg:h-96
                  rounded-2xl overflow-hidden
                  bg-black/30 backdrop-blur-md
                  shadow-[0_0_40px_-10px_rgba(0,0,0,0.6)]
                  transition-all duration-700
                "
              >
                <div
                  className="
                    absolute inset-0 bg-cover bg-center
                    scale-105 group-hover:scale-100
                    transition-all duration-700
                  "
                  style={{ backgroundImage: `url(${card.img})` }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700" />
                <div className="absolute inset-0 flex items-center justify-center px-4">
                  <span className="text-white text-lg lg:text-2xl font-semibold text-center">
                    {t(lang, `category_${card.key}`)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Section />
      <FullpageSlider />
      <GastroSection />
      <SpaBlock />
      <GastroSelection />
      <EntertainmentSection />
      <LocationBlock />
      <PromoModal />
      <SubscribeBlock />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
