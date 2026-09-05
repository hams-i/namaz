"use client";

import { useSyncExternalStore } from "react";
import { useLocale, useTranslations } from "next-intl";
import type { SacredText } from "@/features/dualar-sureler/domain/types";
import { pickLocale } from "@/shared/lib/locale";
import { BackButton } from "@/shared/components/back-button";
import {
  getPreferencesSnapshot,
  getServerPreferencesSnapshot,
  subscribePreferences,
} from "@/features/settings/data/preferences-storage";

export function TextDetailView({ text }: { text: SacredText }) {
  const t = useTranslations("library");
  const locale = useLocale();
  const title = pickLocale(text.title, locale);
  const preferences = useSyncExternalStore(
    subscribePreferences,
    getPreferencesSnapshot,
    getServerPreferencesSnapshot,
  );

  const cards = [
    {
      key: "arabic",
      title: t("arabic"),
      body: text.arabic,
      rtl: true,
      className: "font-arabic text-2xl leading-[2.1]",
    },
    {
      key: "pronunciation",
      title: t("pronunciation"),
      body: pickLocale(text.transliteration, locale),
      rtl: false,
      className: "text-base leading-8",
    },
    {
      key: "meaning",
      title: t("meaning"),
      body: pickLocale(text.meaning, locale),
      rtl: false,
      className: "text-base leading-7",
    },
  ];

  return (
    <div>
      <div className="mb-5 flex items-start gap-2">
        <BackButton
          label={t("back")}
          fallbackHref={`/dualar-sureler?tab=${text.category}`}
        />
        <h1 className="font-heading text-3xl font-bold tracking-tight">{title}</h1>
      </div>
      <div className="space-y-3">
        {cards
          .filter((card) => card.key !== "arabic" || preferences.showArabic)
          .map((card) => (
            <article
              key={card.key}
              className="rounded-xl border border-border p-4"
            >
              <div className="mb-3">
                <h2 className="font-semibold">{card.title}</h2>
              </div>
              <p
                dir={card.rtl ? "rtl" : "ltr"}
                className={`whitespace-pre-line ${card.className}`}
              >
                {card.body}
              </p>
            </article>
          ))}
      </div>
    </div>
  );
}
