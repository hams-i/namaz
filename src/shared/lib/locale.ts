import type { AppLocale } from "@/i18n/routing";

export function pickLocale<T>(
  record: Record<AppLocale, T>,
  locale: string,
): T {
  if (locale === "en") {
    return record.en;
  }
  return record.tr;
}

export function isAppLocale(value: string): value is AppLocale {
  return value === "tr" || value === "en";
}
