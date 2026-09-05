"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import { useLocale, useTranslations } from "next-intl";
import { searchSacredTexts } from "@/features/dualar-sureler/data/catalog";
import type { SacredCategory, SacredText } from "@/features/dualar-sureler/domain/types";
import { pickLocale } from "@/shared/lib/locale";
import { EmptyState } from "@/shared/components/empty-state";
import { PageHeader } from "@/shared/components/page-header";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useRouter } from "@/i18n/navigation";
import {
  getPreferencesSnapshot,
  getServerPreferencesSnapshot,
  subscribePreferences,
} from "@/features/settings/data/preferences-storage";

function TextList({
  items,
  locale,
  expandedSlug,
  onToggle,
  showArabic,
}: {
  items: SacredText[];
  locale: "tr" | "en";
  expandedSlug: string | null;
  onToggle: (slug: string) => void;
  showArabic: boolean;
}) {
  const t = useTranslations("library");
  if (items.length === 0) {
    return <EmptyState title={t("empty")} className="mt-4" />;
  }

  return (
    <ul className="mt-4 space-y-2">
      {items.map((item) => (
        <li
          key={item.slug}
          className="overflow-hidden rounded-xl border border-border bg-card"
        >
          <button
            type="button"
            aria-expanded={expandedSlug === item.slug}
            aria-controls={`sacred-text-${item.slug}`}
            onClick={() => onToggle(item.slug)}
            className="flex min-h-12 w-full items-center gap-3 px-4 py-3 text-left touch-manipulation hover:bg-muted/60"
          >
            <span className="flex-1 font-medium">
              {pickLocale(item.title, locale)}
            </span>
            <span className="text-xl leading-none text-muted-foreground" aria-hidden>
              {expandedSlug === item.slug ? "−" : "+"}
            </span>
          </button>
          {expandedSlug === item.slug ? (
            <div
              id={`sacred-text-${item.slug}`}
              className="space-y-5 border-t border-border px-4 py-5"
            >
              {showArabic ? (
                <section>
                  <h3 className="mb-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    {t("arabic")}
                  </h3>
                  <p
                    dir="rtl"
                    className="whitespace-pre-line font-arabic text-2xl leading-[2.1]"
                  >
                    {item.arabic}
                  </p>
                </section>
              ) : null}
              <section>
                <h3 className="mb-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  {t("pronunciation")}
                </h3>
                <p className="whitespace-pre-line leading-7">
                  {pickLocale(item.transliteration, locale)}
                </p>
              </section>
              <section>
                <h3 className="mb-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  {t("meaning")}
                </h3>
                <p className="whitespace-pre-line leading-7">
                  {pickLocale(item.meaning, locale)}
                </p>
              </section>
            </div>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export function LibraryView({ initialTab }: { initialTab: SacredCategory }) {
  const t = useTranslations("library");
  const router = useRouter();
  const locale = useLocale() === "en" ? "en" : "tr";
  const [tab, setTab] = useState<SacredCategory>(initialTab);
  const [query, setQuery] = useState("");
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);
  const preferences = useSyncExternalStore(
    subscribePreferences,
    getPreferencesSnapshot,
    getServerPreferencesSnapshot,
  );
  const items = useMemo(
    () => searchSacredTexts(tab, query, locale),
    [tab, query, locale],
  );

  function selectTab(nextTab: SacredCategory) {
    setTab(nextTab);
    setQuery("");
    setExpandedSlug(null);
    router.replace(`/dualar-sureler?tab=${nextTab}`, { scroll: false });
  }

  return (
    <div className="flex flex-col gap-4 lg:gap-6">
      <PageHeader title={t("title")} className="mb-0" />
      <div className="grid h-12 grid-cols-2 gap-2 lg:gap-3">
        <button
          type="button"
          onClick={() => selectTab("dua")}
          className={cn(
            "flex h-12 items-center justify-center gap-1.5 rounded-xl border text-sm font-medium transition-colors",
            tab === "dua"
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border text-foreground",
          )}
        >
          {t("duas")}
        </button>
        <button
          type="button"
          onClick={() => selectTab("surah")}
          className={cn(
            "flex h-12 items-center justify-center gap-1.5 rounded-xl border text-sm font-medium transition-colors",
            tab === "surah"
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border text-foreground",
          )}
        >
          {t("surahs")}
        </button>
      </div>
      <div>
        <div>
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t("search")}
            autoComplete="off"
            className="h-11 rounded-xl bg-muted/60 px-3"
            aria-label={t("search")}
          />
        </div>
        <p className="mt-2 text-xs text-muted-foreground">{t("hint")}</p>
        <TextList
          items={items}
          locale={locale}
          expandedSlug={expandedSlug}
          onToggle={(slug) =>
            setExpandedSlug((current) => (current === slug ? null : slug))
          }
          showArabic={preferences.showArabic}
        />
      </div>
    </div>
  );
}
