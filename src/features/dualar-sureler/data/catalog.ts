import { DUAS } from "@/features/dualar-sureler/data/duas";
import { SURAHS } from "@/features/dualar-sureler/data/surahs";
import type { SacredCategory, SacredText } from "@/features/dualar-sureler/domain/types";

export const SACRED_TEXTS: SacredText[] = [...DUAS, ...SURAHS];

export function getSacredText(slug: string): SacredText | undefined {
  return SACRED_TEXTS.find((item) => item.slug === slug);
}

const DUA_ORDER = [
  "subhaneke",
  "ettehiyyatu",
  "allahumme-salli",
  "allahumme-barik",
  "rabbena-atina",
  "kunut",
  "tesbihat",
];

const SURAH_ORDER = [
  "fatiha",
  "fil",
  "kureys",
  "maun",
  "kevser",
  "kafirun",
  "nasr",
  "tebbet",
  "ihlas",
  "felak",
  "nas",
];

function sortByPreferredOrder(items: SacredText[], order: string[]) {
  return [...items].sort((a, b) => {
    const ai = order.indexOf(a.slug);
    const bi = order.indexOf(b.slug);
    const ao = ai === -1 ? order.length + 1 : ai;
    const bo = bi === -1 ? order.length + 1 : bi;
    return ao - bo;
  });
}

export function getSacredTextsByCategory(category: SacredCategory): SacredText[] {
  const items = SACRED_TEXTS.filter((item) => item.category === category);
  if (category === "dua") {
    return sortByPreferredOrder(items, DUA_ORDER);
  }
  return sortByPreferredOrder(items, SURAH_ORDER);
}

export function searchSacredTexts(
  category: SacredCategory,
  query: string,
  locale: "tr" | "en",
): SacredText[] {
  const items = getSacredTextsByCategory(category);
  const normalized = query.trim().toLocaleLowerCase(locale === "tr" ? "tr" : "en");
  if (!normalized) {
    return items;
  }
  return items.filter((item) => {
    const title = item.title[locale].toLocaleLowerCase(locale === "tr" ? "tr" : "en");
    return title.includes(normalized) || item.slug.includes(normalized);
  });
}
