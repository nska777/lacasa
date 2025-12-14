"use client";

import { motion, type Variants } from "framer-motion";

const itemVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: i * 0.12,
      ease: "easeOut",
    },
  }),
};

export default function ServicesSection() {
  const included = [
    "testtesttest",
    "testtesttest",
    "testtesttest",
    "testtesttest",
    "testtesttest",
    "testtesttest",
    "testtesttest",
    "testtesttest",
  ];

  const extra = [
    "test2test2test2",
    "test2test2test2",
    "test2test2test2",
    "test2test2test2",
  ];

  return (
    <section className="w-full bg-[#EDE4DD] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-10 items-start">
          {/* ЛЕВАЯ КОЛОНКА */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="col-span-12 md:col-span-4"
          >
            <h2 className="text-[32px] leading-[1.2] font-serif text-[#1A1A1A] mb-6">
              Персонализированные
              <br />
              услуги
            </h2>

            <p className="text-[17px] text-[#4F4F4F] leading-[1.65] mb-10">
              В LaCasa мы сопровождаем каждый проект: от подбора тканей до
              установки карнизов и финальной драпировки. Мы создаём ощущение
              премиального сервиса в каждом доме.
            </p>

            <button className="px-8 py-3 bg-[#1A1A1A] text-white rounded-md text-[15px] tracking-wide hover:bg-black/80 transition">
              ПОДРОБНЕЕ
            </button>
          </motion.div>

          {/* СРЕДНЯЯ КОЛОНКА */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="col-span-12 md:col-span-4"
          >
            <h3 className="text-[20px] font-semibold text-[#1A1A1A] mb-4 border-b border-[#D9D6D3] pb-3">
              Включено
            </h3>

            <ul className="space-y-4 text-[16px] text-[#4F4F4F] leading-[1.7]">
              {included.map((item, i) => (
                <motion.li
                  key={i}
                  variants={itemVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  custom={i}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* ПРАВАЯ КОЛОНКА */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="col-span-12 md:col-span-4"
          >
            <h3 className="text-[20px] font-semibold text-[#1A1A1A] mb-4 border-b border-[#D9D6D3] pb-3">
              Дополнительно оплачиваются
            </h3>

            <ul className="space-y-4 text-[16px] text-[#4F4F4F] leading-[1.7]">
              {extra.map((item, i) => (
                <motion.li
                  key={i}
                  variants={itemVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  custom={i}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
