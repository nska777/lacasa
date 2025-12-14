"use client";

import HTMLFlipBook from "react-pageflip";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function CatalogBookBlackout() {
  const TOTAL_PAGES = 12;

  const pages = Array.from({ length: TOTAL_PAGES }, (_, i) => {
    const num = String(i + 1).padStart(4, "0");
    return `/catalog-blackout/blackout_page-${num}.jpg`;
  });

  // ✅ ЯВНЫЙ ТИП
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(1);

  const PAGE_WIDTH = 600;
  const PAGE_HEIGHT = 850;
  const BOOK_WIDTH = PAGE_WIDTH * 2;

  useEffect(() => {
    const applyScale = () => {
      if (!containerRef.current) return;

      const cw = containerRef.current.offsetWidth;
      const ch = window.innerHeight * 0.85;

      const scaleX = cw / BOOK_WIDTH;
      const scaleY = ch / PAGE_HEIGHT;

      setScale(Math.min(scaleX, scaleY, 1));
    };

    applyScale();
    window.addEventListener("resize", applyScale);
    return () => window.removeEventListener("resize", applyScale);
  }, []);

  return (
    <section className="w-full bg-[#EDE4DD] py-24 flex justify-center">
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-full max-w-[1500px] flex justify-center"
      >
        <div
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "top center",
          }}
        >
          <HTMLFlipBook
            width={PAGE_WIDTH}
            height={PAGE_HEIGHT}
            showCover={false}
            size="fixed"
            drawShadow
            autoSize={false}
            clickEventForward
            mobileScrollSupport
            maxShadowOpacity={0.3}
            startZIndex={5}
            usePortrait={false}
            style={{ margin: "0 auto", borderRadius: "18px" }}
            className="shadow-2xl rounded-xl overflow-hidden"
          >
            {pages.map((src, i) => (
              <div
                key={i}
                className="relative w-full h-full bg-white shadow-inner"
              >
                <Image
                  src={src}
                  alt={`blackout-page-${i + 1}`}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            ))}
          </HTMLFlipBook>
        </div>
      </motion.div>
    </section>
  );
}
