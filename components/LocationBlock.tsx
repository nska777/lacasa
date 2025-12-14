"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { t, getLang } from "@/lib/i18n";

export default function LocationBlock() {
  const searchParams = useSearchParams();
  const lang = getLang(searchParams.get("lang"));

  const reviews = [
    {
      text: t(lang, "review_1_text"),
      author: t(lang, "review_1_author"),
      role: t(lang, "review_1_role"),
    },
    {
      text: t(lang, "review_2_text"),
      author: t(lang, "review_2_author"),
      role: t(lang, "review_2_role"),
    },
    {
      text: t(lang, "review_3_text"),
      author: t(lang, "review_3_author"),
      role: t(lang, "review_3_role"),
    },
    {
      text: t(lang, "review_4_text"),
      author: t(lang, "review_4_author"),
      role: t(lang, "review_4_role"),
    },
    {
      text: t(lang, "review_5_text"),
      author: t(lang, "review_5_author"),
      role: t(lang, "review_5_role"),
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <section className="w-full bg-[#FFFFFF] py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* LEFT — TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <h2 className="text-4xl font-serif text-gray-900 font-bold mb-6">
            {t(lang, "clients_title")}
          </h2>

          <p className="text-gray-700 leading-relaxed max-w-xl text-lg">
            {t(lang, "clients_text")}
          </p>
        </motion.div>

        {/* RIGHT — AUTO SLIDER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
          className="w-full bg-white rounded-xl shadow-xl p-10 min-h-[320px] flex flex-col justify-between"
        >
          {/* PROGRESS */}
          <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mb-6">
            <motion.div
              key={index}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 4, ease: "linear" }}
              className="h-full bg-gray-900"
            />
          </div>

          {/* REVIEW */}
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-gray-800 text-lg leading-relaxed mb-6 italic">
              “{reviews[index].text}”
            </p>

            <h4 className="text-xl font-semibold text-gray-900">
              {reviews[index].author}
            </h4>

            <p className="text-gray-500 text-sm">{reviews[index].role}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
