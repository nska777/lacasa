"use client";

import { useSearchParams } from "next/navigation";
import { t, getLang } from "@/lib/i18n";

export default function SubscribeBlock() {
  const searchParams = useSearchParams();
  const lang = getLang(searchParams.get("lang"));

  return (
    <section className="w-full bg-[#F7F4F1] py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* TITLE */}
        <h2 className="text-5xl font-serif text-gray-900 leading-tight">
          {t(lang, "subscribe_title")}
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-700 text-lg max-w-2xl mt-6 leading-relaxed">
          {t(lang, "subscribe_text")}
        </p>

        {/* FORM */}
        <form className="mt-14 flex flex-col gap-5 md:flex-row">
          <input
            type="text"
            placeholder={t(lang, "subscribe_name")}
            className="flex-1 px-5 py-4 bg-[#F1EDE9] rounded-md border border-transparent
                       focus:border-gray-400 focus:bg-white outline-none transition"
          />

          <input
            type="text"
            placeholder={t(lang, "subscribe_lastname")}
            className="flex-1 px-5 py-4 bg-[#F1EDE9] rounded-md border border-transparent
                       focus:border-gray-400 focus:bg-white outline-none transition"
          />

          <input
            type="email"
            placeholder={t(lang, "subscribe_email")}
            className="flex-1 px-5 py-4 bg-[#F1EDE9] rounded-md border border-transparent
                       focus:border-gray-400 focus:bg-white outline-none transition"
          />

          <button
            type="submit"
            className="whitespace-nowrap px-8 py-4 border border-black rounded-md text-black
                       hover:bg-black hover:text-white transition uppercase"
          >
            {t(lang, "subscribe_btn")}
          </button>
        </form>

        {/* FOOTNOTE */}
        <p className="text-sm text-gray-600 max-w-3xl mt-6 leading-relaxed">
          {t(lang, "subscribe_policy_before")}
          <a href="#" className="underline ml-1">
            {t(lang, "subscribe_terms")}
          </a>
          {t(lang, "subscribe_policy_middle")}
          <a href="#" className="underline ml-1">
            {t(lang, "subscribe_privacy")}
          </a>
          {t(lang, "subscribe_policy_after")}
        </p>
      </div>
    </section>
  );
}
