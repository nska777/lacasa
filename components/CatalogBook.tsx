"use client";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import HTMLFlipBook from "react-pageflip";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function CatalogBook() {
  const TOTAL_PAGES = 26;

  // Генерация списка страниц
  const pages = Array.from({ length: TOTAL_PAGES }, (_, i) => {
    const num = String(i + 1).padStart(4, "0");
    return `/catalog/catalog_page-${num}.jpg`;
  });

  // 🔴 ВАЖНО: ЯВНЫЙ ТИП
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(1);

  // Базовые размеры книги
  const PAGE_WIDTH = 600;
  const PAGE_HEIGHT = 850;
  const BOOK_WIDTH = PAGE_WIDTH * 2;

  useEffect(() => {
    const applyScale = () => {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const containerHeight = window.innerHeight * 0.85;

      const scaleX = containerWidth / BOOK_WIDTH;
      const scaleY = containerHeight / PAGE_HEIGHT;

      const finalScale = Math.min(scaleX, scaleY, 1);
      setScale(finalScale);
    };

    applyScale();
    window.addEventListener("resize", applyScale);
    return () => window.removeEventListener("resize", applyScale);
  }, []);

  return (
    <section
      id="catalog"
      className="w-full bg-[#EDE4DD] py-24 flex justify-center"
    >
      {/* АНИМАЦИЯ ВЫЕЗДА */}
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-full max-w-[1500px] flex justify-center"
      >
        {/* SCALE */}
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
            clickEventForward
            mobileScrollSupport
            maxShadowOpacity={0.3}
            startZIndex={5}
            usePortrait={false}
            style={{
              margin: "0 auto",
              borderRadius: "18px",
            }}
            className="shadow-2xl rounded-xl overflow-hidden"
          >
            {pages.map((src, i) => (
              <div
                key={i}
                className="relative w-full h-full bg-white shadow-inner"
              >
                <Image
                  src={src}
                  alt={`page-${i + 1}`}
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
