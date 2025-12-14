"use client";

import HTMLFlipBook from "react-pageflip";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function CatalogBookFloor() {
  const TOTAL_PAGES = 43;

  const pages = Array.from({ length: TOTAL_PAGES }, (_, i) => {
    const num = String(i + 1).padStart(4, "0");
    return `/catalog-floor/floor_page-${num}.jpg`;
  });

  // ✅ ВАЖНО: ЯВНЫЙ ТИП
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(1);

  const PAGE_WIDTH = 1200;
  const PAGE_HEIGHT = 900;
  const BOOK_WIDTH = PAGE_WIDTH;

  useEffect(() => {
    const applyScale = () => {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const containerHeight = window.innerHeight * 0.85;

      const scaleX = containerWidth / BOOK_WIDTH;
      const scaleY = containerHeight / PAGE_HEIGHT;

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
            useMouseEvents
            autoSize={false}
            mobileScrollSupport
            maxShadowOpacity={0.3}
            startZIndex={5}
            className="shadow-2xl rounded-xl overflow-hidden"
          >
            {pages.map((src, i) => (
              <div key={i} className="relative w-full h-full bg-white">
                <Image
                  src={src}
                  alt={`floor-page-${i + 1}`}
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
