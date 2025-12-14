"use client";

import HTMLFlipBook from "react-pageflip";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CatalogBookHotel() {
  const TOTAL_PAGES = 18;

  const pages = Array.from({ length: TOTAL_PAGES }, (_, i) => {
    const num = String(i + 1).padStart(4, "0");
    return `/catalog-hotel/hotel_page-${num}.jpg`;
  });

  const [isMobile, setIsMobile] = useState(false);
  const [bookSize, setBookSize] = useState({
    width: 640,
    height: 820,
  });

  useEffect(() => {
    const updateLayout = () => {
      const w = window.innerWidth;

      if (w < 768) {
        // 📱 MOBILE
        const width = Math.min(w - 32, 380);
        setIsMobile(true);
        setBookSize({
          width,
          height: Math.round(width * 1.3),
        });
      } else {
        // 🖥 DESKTOP (уменьшенный, аккуратный)
        setIsMobile(false);
        setBookSize({
          width: 640,
          height: 820,
        });
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  return (
    <section className="w-full bg-[#EDE4DD] py-12 sm:py-20 flex justify-center overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex justify-center w-full"
      >
        <HTMLFlipBook
          width={bookSize.width}
          height={bookSize.height}
          size="fixed"
          showCover={false}
          usePortrait={isMobile}
          drawShadow={!isMobile}
          mobileScrollSupport={true}
          maxShadowOpacity={0.2}
          clickEventForward={true}
          className="shadow-xl rounded-lg overflow-hidden bg-white"
        >
          {pages.map((src, i) => (
            <div key={i} className="relative w-full h-full bg-white">
              <Image
                src={src}
                alt={`hotel-page-${i + 1}`}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          ))}
        </HTMLFlipBook>
      </motion.div>
    </section>
  );
}
