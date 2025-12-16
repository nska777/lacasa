"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const floors = Array.from({ length: 12 }, (_, i) => ({
  src: `/flooring/floor${i + 1}.jpg`,
}));

export default function FlooringSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [dragWidth, setDragWidth] = useState(0);
  const [x, setX] = useState(0);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    if (!sliderRef.current || !trackRef.current) return;
    setDragWidth(trackRef.current.scrollWidth - sliderRef.current.offsetWidth);
  }, []);

  const slideBy = 360;

  const slideLeft = () => {
    setX((prev) => Math.min(prev + slideBy, 0));
  };

  const slideRight = () => {
    setX((prev) => Math.max(prev - slideBy, -dragWidth));
  };

  return (
    <section className="w-full bg-[#EDE4DD] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-center text-gray-900 mb-12">
          Напольные модульные покрытия
        </h2>

        {/* ===== ARROWS ===== */}
        <button
          onClick={slideLeft}
          disabled={x === 0}
          className="
            hidden md:flex
            absolute left-0 top-1/2 -translate-y-1/2 z-20
            w-10 h-10 rounded-full
            bg-white/80 backdrop-blur
            shadow
            items-center justify-center
            text-xl
            hover:bg-white
            disabled:opacity-30 disabled:cursor-default
            cursor-pointer
          "
          aria-label="Previous"
        >
          ‹
        </button>

        <button
          onClick={slideRight}
          disabled={x === -dragWidth}
          className="
            hidden md:flex
            absolute right-0 top-1/2 -translate-y-1/2 z-20
            w-10 h-10 rounded-full
            bg-white/80 backdrop-blur
            shadow
            items-center justify-center
            text-xl
            hover:bg-white
            disabled:opacity-30 disabled:cursor-default
            cursor-pointer
          "
          aria-label="Next"
        >
          ›
        </button>

        {/* ===== SLIDER ===== */}
        <motion.div
          ref={sliderRef}
          className="overflow-hidden cursor-grab"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            ref={trackRef}
            className="flex gap-6"
            drag="x"
            dragConstraints={{ left: -dragWidth, right: 0 }}
            animate={{ x }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            {floors.map((item, i) => (
              <motion.div
                key={i}
                onClick={() => setActiveImage(item.src)}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="
                  relative shrink-0
                  w-[80vw] sm:w-[60vw] md:w-[40vw] lg:w-[320px]
                  h-[420px]
                  rounded-2xl overflow-hidden
                  shadow-xl bg-white
                  cursor-pointer
                "
              >
                <Image
                  src={item.src}
                  alt="Flooring"
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ===== MODAL ===== */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl bg-white rounded-2xl p-4 shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveImage(null)}
                className="
                  absolute -top-3 -right-3
                  w-9 h-9 rounded-full
                  bg-black text-white
                  flex items-center justify-center
                  text-lg
                  hover:bg-gray-800
                  transition
                  cursor-pointer
                "
                aria-label="Close"
              >
                ✕
              </button>

              <Image
                src={activeImage}
                alt="Flooring preview"
                width={1200}
                height={800}
                className="w-full rounded-xl object-contain"
                unoptimized
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
