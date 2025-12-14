"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function VerticalGallerySection() {
  const images = ["/gallery/1.jpg", "/gallery/2.jpg", "/gallery/3.jpg"];
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [index, setIndex] = useState(0);
  const [active, setActive] = useState(false);
  const [cooldown, setCooldown] = useState(false);

  // Активируем блок, когда он полностью в зоне
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActive(true);
        } else {
          setActive(false);
        }
      },
      { threshold: 0.95 } // блок активен почти на весь экран
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // ГЛАВНЫЙ СКРОЛЛ-ЛОК МЕХАНИЗМ
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (!active) {
        // Разблокировка страницы если вышли из блока
        document.body.style.overflow = "auto";
        return;
      }

      const last = images.length - 1;

      const goingDown = e.deltaY > 0;
      const goingUp = e.deltaY < 0;

      // ЕСЛИ МЫ ЕЩЁ НЕ НА ПОСЛЕДНЕМ СЛАЙДЕ И КРУТИМ ВНИЗ → ЛОЧИМ
      if (goingDown && index < last) {
        e.preventDefault();
        document.body.style.overflow = "hidden";
      }

      // ЕСЛИ МЫ ЕЩЁ НЕ НА ПЕРВОМ СЛАЙДЕ И КРУТИМ ВВЕРХ → ЛОЧИМ
      if (goingUp && index > 0) {
        e.preventDefault();
        document.body.style.overflow = "hidden";
      }

      // Если на краях — возвращаем сайту скролл
      if ((goingDown && index === last) || (goingUp && index === 0)) {
        document.body.style.overflow = "auto";
        return;
      }

      // cooldown чтобы не летало
      if (cooldown) {
        e.preventDefault();
        return;
      }

      setCooldown(true);

      if (goingDown && index < last) {
        setIndex((p) => p + 1);
      }
      if (goingUp && index > 0) {
        setIndex((p) => p - 1);
      }

      setTimeout(() => setCooldown(false), 400);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", onWheel);
      document.body.style.overflow = "auto"; // страховка
    };
  }, [active, index]);

  return (
    <section
      ref={sectionRef}
      className="w-full h-screen bg-[#EDE4DD] flex items-center justify-center gap-20 px-16"
    >
      {/* Слайдер */}
      <div className="relative w-[55%] h-[80%] rounded-xl overflow-hidden shadow-xl">
        <Image
          key={index}
          src={images[index]}
          alt="slide"
          fill
          className="object-cover transition-all duration-500"
        />

        {/* Индикатор */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/40 text-white px-4 py-1 rounded-full text-sm backdrop-blur-md">
          {index + 1} / {images.length}
        </div>
      </div>

      {/* Текст */}
      <div className="w-[35%]">
        <h3 className="text-3xl font-semibold text-black mb-4">
          Премиальные шторы LaCasa
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Откройте коллекцию роскошных тканей и дизайнов...
        </p>

        <button className="px-6 py-3 border border-black text-black hover:bg-black hover:text-white transition uppercase text-sm tracking-wide">
          Подробнее
        </button>
      </div>
    </section>
  );
}
