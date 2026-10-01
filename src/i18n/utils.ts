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

// "/download" for es, "/en/download" for the rest. Used for the download page.
export function getDownloadPath(lang: Lang) {
  return getDocPath(lang, "download");
}

// "/blog" for es, "/en/blog" for the rest. Used for the blog index.
export function getBlogPath(lang: Lang) {
  return getDocPath(lang, "blog");
}

// "/blog/2026/welcome" for es, "/en/blog/2026/welcome" for the rest.
// `post` is the path without language or "blog/" prefix ("2026/welcome").
export function getBlogPostPath(lang: Lang, post: string) {
  return getDocPath(lang, `blog/${post}`);
}

// Strip the locale prefix ("/en/privacy" -> "/privacy", "/en/" -> "/").
// Used to resolve the equivalent path in another locale.
export function stripLocalePrefix(pathname: string): string {
  for (const locale of localeList) {
    if (locale === defaultLang) continue;
    if (pathname === `/${locale}` || pathname === `/${locale}/`) return "/";
    if (pathname.startsWith(`/${locale}/`))
      return pathname.slice(locale.length + 1) || "/";
  }
  return pathname || "/";
}

// Resolve "/privacy" in `target` locale ("/privacy" or "/en/privacy").
export function localizePath(pathname: string, target: Lang): string {
  const rest = stripLocalePrefix(pathname);
  if (target === defaultLang) return rest;
  return rest === "/" ? `/${target}/` : `/${target}${rest}`;
}
