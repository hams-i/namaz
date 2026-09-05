"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/shared/components/app-link";
import {
  PRAYER_GUIDES,
  PRAYER_ORDER,
  SUGGESTED_SURAH_SLUGS,
  SURAH_ORDER_SLUGS,
  getPrayerGuide,
} from "@/features/vakitler/data/prayer-guides";
import { getSacredText } from "@/features/dualar-sureler/data/catalog";
import type {
  FlowKey,
  NoteKind,
  PrayerId,
  PrayerSection,
  SequenceItem,
} from "@/features/vakitler/domain/types";
import { pickLocale } from "@/shared/lib/locale";
import { InfoCard } from "@/shared/components/info-card";
import { PrayerCountdown } from "@/features/vakitler/presentation/prayer-countdown";
import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

const FLOW_DETAIL_SLUGS: Partial<Record<FlowKey, string>> = {
  subhaneke: "subhaneke",
  euzu: "euzu",
  besmele: "besmele",
  fatiha: "fatiha",
  ruku: "subhane-rabbiyel-azim",
  twoSajda: "subhane-rabbiyel-ala",
  ettehiyyatu: "ettehiyyatu",
  salli: "allahumme-salli",
  barik: "allahumme-barik",
  rabbena: "rabbena-atina",
  kunut: "kunut",
};

const FARD_SURAH_LABELS_TR: Record<string, string> = {
  fil: "Fil",
  kureys: "Kureyş",
  maun: "Mâûn",
  kevser: "Kevser",
  kafirun: "Kâfirûn",
  nasr: "Nasr",
  tebbet: "Tebbet (Mesed)",
  ihlas: "İhlâs",
  felak: "Felak",
  nas: "Nâs",
};

function FlowPronunciation({
  keyName,
  sacredTextSlug,
}: {
  keyName: FlowKey;
  sacredTextSlug?: string;
}) {
  const t = useTranslations("vakitler");
  const locale = useLocale();
  const slug = sacredTextSlug ?? FLOW_DETAIL_SLUGS[keyName];
  const text = slug ? getSacredText(slug) : undefined;
  let pronunciation = text
    ? pickLocale(text.transliteration, locale)
    : keyName === "tekbir"
      ? t("tekbirPronunciation")
      : undefined;

  if (keyName === "ruku" && pronunciation) {
    pronunciation = t("repeatThree", { text: pronunciation });
  }

  return pronunciation ? (
    <p className="mt-1 whitespace-pre-line text-sm leading-6 text-muted-foreground">
      {pronunciation}
    </p>
  ) : null;
}

function FlowPiece({ item, detailed }: { item: SequenceItem; detailed: boolean }) {
  const t = useTranslations("flow");

  if (item.type === "recite") {
    return (
      <div>
        <LinkedFlow
          keyName={item.key}
          sacredTextSlug={item.sacredTextSlug}
        />
        {detailed ? (
          <FlowPronunciation
            keyName={item.key}
            sacredTextSlug={item.sacredTextSlug}
          />
        ) : null}
      </div>
    );
  }

  if (detailed) {
    return (
      <div>
        <p>{t(item.labelKey)}</p>
        <ul className="mt-2 space-y-3 border-l border-border pl-3">
          {item.items.map((key) => (
            <li key={key}>
              <LinkedFlow keyName={key} />
              <FlowPronunciation keyName={key} />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <span>
      {t(item.labelKey)}:{" "}
      {item.items.map((key, index) => (
        <span key={key}>
          {index > 0 ? ", " : null}
          <LinkedFlow keyName={key} />
        </span>
      ))}
    </span>
  );
}

function LinkedFlow({
  keyName,
  sacredTextSlug,
}: {
  keyName: FlowKey;
  sacredTextSlug?: string;
}) {
  const t = useTranslations("flow");
  const locale = useLocale();
  if (sacredTextSlug) {
    const text = getSacredText(sacredTextSlug);
    if (text) {
      const title = pickLocale(text.title, locale);
      const shortTitle = locale === "tr"
        ? title.replace(/ Suresi$/, "")
        : title.replace(/^Surah /, "");
      return (
        <span>
          {locale === "tr"
            ? FARD_SURAH_LABELS_TR[sacredTextSlug] ?? shortTitle
            : shortTitle}
        </span>
      );
    }
  }
  return <span>{t(keyName)}</span>;
}

function StepsList({ section, detailed }: { section: PrayerSection; detailed: boolean }) {
  const t = useTranslations("vakitler");

  return (
    <ol className="space-y-4">
      {section.steps.map((step) => (
        <li key={step.rakat}>
          <p className="font-semibold">{t("rakat", { count: step.rakat })}</p>
          <ol className="mt-2 space-y-1.5 border-l border-border pl-3">
            {step.sequence.map((item, index) => (
              <li key={`${step.rakat}-${index}`} className="leading-relaxed">
                <FlowPiece item={item} detailed={detailed} />
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

function NoteCards({ notes, delayBase }: { notes: NoteKind[]; delayBase: number }) {
  const t = useTranslations("vakitler");
  const locale = useLocale();

  return (
    <>
      {notes.map((note, index) => {
        const delay = delayBase + index * 70;
        if (note === "surahOrder") {
          return (
            <InfoCard
              key={note}
              title={t("surahOrderTitle")}
              delayMs={delay}
            >
              <p className="mb-3 text-muted-foreground">{t("surahOrderIntro")}</p>
              <ol className="space-y-2">
                {SURAH_ORDER_SLUGS.map((slug, order) => {
                  const text = getSacredText(slug);
                  const title = text
                    ? pickLocale(text.title, locale)
                    : slug;
                  return (
                    <li key={slug}>
                      <div className="flex items-center gap-2 py-0.5">
                        <span className="w-5 text-muted-foreground">
                          {order + 1}.
                        </span>
                        <span>{title}</span>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </InfoCard>
          );
        }

        if (note === "suggestions") {
          const names = SUGGESTED_SURAH_SLUGS.map((slug) => {
            const text = getSacredText(slug);
            return text ? pickLocale(text.title, locale) : slug;
          }).join(", ");
          return (
            <InfoCard
              key={note}
              title={t("surahSuggestions")}
              delayMs={delay}
            >
              <p>{names}</p>
            </InfoCard>
          );
        }

        const meta = {
          fardFour: { icon: "info", title: t("importantNote"), body: t("notes.fardFour") },
          fardThree: { icon: "info", title: t("importantNote"), body: t("notes.fardThree") },
          fardTwo: { icon: "info", title: t("importantNote"), body: t("notes.fardTwo") },
          lastSunnah: { icon: "bell", title: t("reminder"), body: t("notes.lastSunnah") },
          sunnahFour: { icon: "info", title: t("importantNote"), body: t("notes.sunnahFour") },
          witr: { icon: "info", title: t("importantNote"), body: t("notes.witr") },
        }[note];

        return (
          <InfoCard key={note} title={meta.title}>
            <p>{meta.body}</p>
          </InfoCard>
        );
      })}
    </>
  );
}

export function VakitlerView({
  prayerId,
  sectionId,
}: {
  prayerId: PrayerId;
  sectionId: string;
}) {
  const t = useTranslations("vakitler");
  const tPrayers = useTranslations("prayers");
  const tSections = useTranslations("sections");
  const locale = useLocale();
  const [showDetails, setShowDetails] = useState(false);
  const guide = getPrayerGuide(prayerId) ?? PRAYER_GUIDES[1];
  const activeSection =
    guide.sections.find((section) => section.id === sectionId) ??
    guide.sections[0];

  return (
    <div>
      <header className="mb-5 flex items-start justify-between gap-3">
        <h1 className="font-heading text-3xl font-bold tracking-tight">{t("title")}</h1>
        <PrayerCountdown />
      </header>

      <div className="mb-4 grid grid-cols-5 gap-2">
        {PRAYER_ORDER.map((id) => {
          const active = id === guide.id;
          const firstSection = getPrayerGuide(id)?.sections[0];
          return (
            <Link
              key={id}
              href={`/vakitler?vakit=${id}&bolum=${firstSection?.id ?? ""}`}
              className={cn(
                buttonVariants({ variant: active ? "default" : "outline" }),
                "h-auto min-h-11 flex-col gap-1 rounded-xl px-1 py-2.5 text-[11px] sm:text-xs",
                active && "shadow-sm",
              )}
            >
              {tPrayers(id)}
            </Link>
          );
        })}
      </div>

      <div className="mb-4 flex w-full gap-0 overflow-x-auto overscroll-x-contain border-b border-border">
        {guide.sections.map((section) => {
          const active = section.id === activeSection.id;
          return (
            <Link
              key={section.id}
              href={`/vakitler?vakit=${guide.id}&bolum=${section.id}`}
              className={cn(
                "relative inline-flex min-h-11 shrink-0 items-center px-3 py-2 text-sm font-medium touch-manipulation",
                active ? "text-foreground" : "text-muted-foreground",
              )}
            >
              {tSections(section.kind, { count: section.rakat })}
              {active ? (
                <span className="absolute inset-x-0 -bottom-px h-0.5 bg-foreground" />
              ) : null}
            </Link>
          );
        })}
      </div>

      <div className="mt-4 space-y-3">
        <InfoCard title={t("niyet")}>
          <p>{pickLocale(activeSection.niyet, locale)}</p>
        </InfoCard>
        <InfoCard
          title={t("steps")}
          headerAction={(
            <div className="flex shrink-0 items-center gap-2">
              <Label htmlFor="rakat-details" className="text-xs text-muted-foreground">
                {t("detail")}
              </Label>
              <Switch
                id="rakat-details"
                checked={showDetails}
                onCheckedChange={setShowDetails}
                aria-label={t("detail")}
              />
            </div>
          )}
        >
          <StepsList section={activeSection} detailed={showDetails} />
        </InfoCard>
        <NoteCards notes={activeSection.notes} delayBase={180} />
      </div>
    </div>
  );
}
