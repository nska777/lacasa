"use client";

import HTMLFlipBook from "react-pageflip";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function CatalogBookCornices() {
  const TOTAL_PAGES = 6;

  const pages = Array.from({ length: TOTAL_PAGES }, (_, i) => {
    const num = String(i + 1).padStart(4, "0");
    return `/catalog-cornices/catalog_page-${num}.jpg`;
  });

  // ✅ ЯВНЫЙ ТИП — ОБЯЗАТЕЛЬНО
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(1);

  const PAGE_WIDTH = 600;
  const PAGE_HEIGHT = 700;
  const BOOK_WIDTH = PAGE_WIDTH * 2;

  useEffect(() => {
    function applyScale() {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const newScale = Math.min(containerWidth / BOOK_WIDTH, 1);
      setScale(newScale);
    }

    applyScale();
    window.addEventListener("resize", applyScale);
    return () => window.removeEventListener("resize", applyScale);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full flex justify-center min-h-screen"
    >
      <div ref={containerRef} className="w-full flex justify-center">
        <div
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "top center",
          }}
        >
          <HTMLFlipBook
            width={PAGE_WIDTH}
            height={PAGE_HEIGHT}
            size="fixed"
            minWidth={300}
            maxWidth={PAGE_WIDTH}
            minHeight={400}
            maxHeight={PAGE_HEIGHT}
            showCover={false}
            mobileScrollSupport
            useMouseEvents
            className="shadow-xl rounded-xl bg-white"
          >
            {pages.map((src, idx) => (
              <div key={idx} className="bg-white rounded-xl">
                <Image
                  src={src}
                  alt={`page-${idx + 1}`}
                  width={PAGE_WIDTH}
                  height={PAGE_HEIGHT}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            ))}
          </HTMLFlipBook>
        </div>
      </div>
    </motion.div>
  );
}
