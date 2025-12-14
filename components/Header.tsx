"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { t, getLang } from "@/lib/i18n";

const LANGS = ["ru", "uz", "en", "tr"] as const;

export default function Header() {
  const [hideTop, setHideTop] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentLang = getLang(searchParams.get("lang"));

  const switchLang = (nextLang: (typeof LANGS)[number]) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", nextLang);
    router.push(`${pathname}?${params.toString()}`);
    setMenuOpen(false);
  };

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const isMobile = window.innerWidth < 768;

      if (isMobile) setHideTop(false);
      else setHideTop(window.scrollY > lastY && window.scrollY > 20);

      lastY = window.scrollY;
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  const isActive = (href: string) => pathname === href;

  return (
    <header className="fixed top-0 left-0 w-full z-50 overflow-x-hidden">
      {/* TOP BAR */}
      <div
        className={`
          backdrop-blur-xl bg-white/10 border-b border-white/20
          transition-all duration-500 text-white
          ${
            hideTop
              ? "-translate-y-full opacity-0"
              : "translate-y-0 opacity-100"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between relative">
          <div className="hidden md:block w-40" />

          <button
            onClick={scrollTop}
            className="
              absolute left-1/2 -translate-x-1/2
              text-lg sm:text-2xl font-semibold tracking-wide
              hover:opacity-80 transition cursor-pointer
            "
          >
            Textile LaCasa
          </button>

          <div className="flex items-center gap-4 sm:gap-6">
            {/* LANG desktop */}
            <div className="hidden md:flex items-center gap-3 text-sm font-medium">
              {LANGS.map((l) => (
                <button
                  key={l}
                  onClick={() => switchLang(l)}
                  className={`uppercase transition cursor-pointer ${
                    currentLang === l
                      ? "text-white underline underline-offset-4"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* ORDER desktop */}
            {!hideTop && (
              <a
                href="https://t.me/Dinosh0109"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  hidden md:flex min-w-[180px] h-[38px]
                  items-center justify-center rounded-xl
                  bg-[#c8b59c]/80 hover:bg-[#c8b59c]
                  text-white font-semibold text-sm shadow transition whitespace-nowrap
                  cursor-pointer
                "
              >
                {t(currentLang, "order")}
              </a>
            )}

            {/* Burger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-[5px] cursor-pointer"
              aria-label="Open menu"
            >
              <span className="w-5 h-[2px] bg-white" />
              <span className="w-5 h-[2px] bg-white" />
              <span className="w-5 h-[2px] bg-white" />
            </button>
          </div>
        </div>
      </div>

      {/* LOWER NAV */}
      <div
        className={`
          w-full backdrop-blur-xl border-b transition-all duration-[1200ms]
          ${
            scrolled
              ? "bg-[#EDE4DD] border-gray-300 text-black shadow-md md:fixed md:top-0"
              : "bg-white/10 border-white/10 text-white"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between">
          <div className="hidden md:block w-40">
            {scrolled && (
              <button
                onClick={scrollTop}
                className="text-lg font-semibold hover:opacity-70 transition cursor-pointer"
              >
                Textile LaCasa
              </button>
            )}
          </div>

          <nav className="hidden md:flex gap-8 text-sm">
            {[
              ["/", "home"],
              ["/catalog", "catalog"],
              ["/design", "design"],
              ["/portfolio", "portfolio"],
              ["/contacts", "contacts"],
            ].map(([href, key]) => (
              <Link
                key={href}
                href={`${href}?lang=${currentLang}`}
                className={`hover:opacity-80 ${
                  isActive(href) ? "font-semibold" : "opacity-80"
                }`}
              >
                {t(currentLang, key)}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex w-40 justify-end">
            {scrolled && (
              <a
                href="https://t.me/Dinosh0109"
                className="
                  min-w-[180px] h-[38px]
                  flex items-center justify-center rounded-xl bg-[#c8b59c]
                  font-semibold text-sm shadow cursor-pointer
                "
              >
                {t(currentLang, "order")}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden fixed top-[64px] left-0 w-full bg-[#EDE4DD] shadow-xl z-40">
          <nav className="flex flex-col items-center gap-6 py-8 text-base">
            {[
              ["/", "home"],
              ["/catalog", "catalog"],
              ["/design", "design"],
              ["/portfolio", "portfolio"],
              ["/contacts", "contacts"],
            ].map(([href, key]) => (
              <Link
                key={href}
                href={`${href}?lang=${currentLang}`}
                onClick={() => setMenuOpen(false)}
                className="font-medium"
              >
                {t(currentLang, key)}
              </Link>
            ))}

            <div className="flex gap-4 mt-4 text-sm">
              {LANGS.map((l) => (
                <button
                  key={l}
                  onClick={() => switchLang(l)}
                  className={`uppercase cursor-pointer ${
                    currentLang === l ? "font-bold underline" : ""
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            <a
              href="https://t.me/Dinosh0109"
              className="mt-6 px-8 py-3 rounded-xl bg-[#c8b59c] text-white font-semibold text-sm cursor-pointer"
            >
              {t(currentLang, "order")}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
