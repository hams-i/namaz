export type SacredCategory = "dua" | "surah" | "tesbih";

export type SacredText = {
  slug: string;
  category: SacredCategory;
  icon: string;
  surahNumber?: number;
  title: Record<"tr" | "en", string>;
  arabic: string;
  transliteration: Record<"tr" | "en", string>;
  meaning: Record<"tr" | "en", string>;
};

export const BISMILLAH_ARABIC = "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ";
