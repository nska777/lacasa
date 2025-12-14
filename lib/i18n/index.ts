import ru from "./ru";
import en from "./en";
import uz from "./uz";
import tr from "./tr";

export const dict = { ru, en, uz, tr };
export type Lang = keyof typeof dict;

export const getLang = (lang?: string | null): Lang => {
  if (lang === "ru" || lang === "en" || lang === "uz" || lang === "tr") return lang;
  return "ru";
};

export const t = (lang: Lang, key: string) => {
  const table = dict[lang] as Record<string, string>;
  return table[key] ?? (dict.ru as Record<string, string>)[key] ?? key;
};
