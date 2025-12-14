"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const images = ["/v1.jpg", "/v2.jpg", "/v3.jpg"];

export default function VerticalGalleryScrollLock() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onWheel = (e: WheelEvent) => {
      const rect = section.getBoundingClientRect();

      // Проверяем, что пользователь находится внутри секции
      const inside = rect.top <= 0 && rect.bottom >= window.innerHeight;

      if (!inside) return;

      e.preventDefault(); // останавливаем обычный скролл

      setLocked(true);

      // Листаем слайды
      if (e.deltaY > 0 && index < images.length - 1) {
        setIndex((i) => i + 1);
      } else if (e.deltaY < 0 && index > 0) {
        setIndex((i) => i - 1);
      } else if (index === images.length - 1 && e.deltaY > 0) {
        // ПОСЛЕДНИЙ СЛАЙД — разблокируем страницу
        setLocked(false);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
    };
  }, [index]);

  // Когда блок активен — запрещаем прокрутку BODY
  useEffect(() => {
    document.body.style.overflow = locked ? "hidden" : "auto";
  }, [locked]);

  return (
    <section
      ref={sectionRef}
      className="w-full h-screen flex items-center justify-center bg-[#EDE4DD] overflow-hidden relative"
    >
      {/* IMAGE */}
      <div className="relative w-[50%] h-[80%] rounded-xl shadow-xl overflow-hidden">
        <Image
          key={index}
          src={images[index]}
          alt="slide"
          fill
          className="object-cover transition-all duration-700"
        />
      </div>

      {/* TEXT */}
      <div className="w-[40%] pl-16">
        <h2 className="text-3xl font-semibold mb-6 text-gray-900">
          Сюжеты и коллекции
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Наши лучшие коллекции премиальных штор созданы для того, чтобы каждое
          пространство выглядело утончённым, роскошным и гармоничным.
        </p>

        <button className="px-6 py-3 border border-black hover:bg-black hover:text-white transition">
          Смотреть коллекции
        </button>
      </div>
    </section>
  );
}
