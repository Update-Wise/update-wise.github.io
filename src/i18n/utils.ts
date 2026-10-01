import { ui, languages, defaultLang, type Lang, type UIKey } from "./ui";

export const localeList = Object.keys(languages) as Lang[];

export function getLang(url: URL): Lang {
  const [, seg] = url.pathname.split("/");
  return seg in ui ? (seg as Lang) : defaultLang;
}

export function useTranslations(lang: Lang) {
  return (key: UIKey) => ui[lang][key] ?? ui[defaultLang][key];
}

// Default locale (es) has no URL prefix; the rest use /<lang>/
export function getLocalePath(lang: Lang) {
  return lang === defaultLang ? "/" : `/${lang}/`;
}

// "/privacy" for es, "/en/privacy" for the rest. Used for collection "pages" links.
export function getDocPath(lang: Lang, slug: string) {
  return lang === defaultLang ? `/${slug}` : `/${lang}/${slug}`;
}