"use client";

import { useState, useSyncExternalStore } from "react";
import { useTranslations } from "next-intl";
import { ZIKIR_PRESETS } from "@/features/zikirmatik/domain/types";
import type { ZikirPresetId } from "@/features/zikirmatik/domain/types";
import {
  getServerZikirCountsSnapshot,
  getZikirCountsSnapshot,
  saveZikirCount,
  subscribeZikirCounts,
} from "@/features/zikirmatik/data/counter-storage";
import { PageHeader } from "@/shared/components/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ZikirmatikView() {
  const t = useTranslations("zikirmatik");
  const [presetId, setPresetId] = useState<ZikirPresetId>("subhanallah");
  const [customNote, setCustomNote] = useState("");
  const counts = useSyncExternalStore(
    subscribeZikirCounts,
    getZikirCountsSnapshot,
    getServerZikirCountsSnapshot,
  );

  const preset = ZIKIR_PRESETS.find((item) => item.id === presetId) ?? ZIKIR_PRESETS[0];
  const activePhrase =
    presetId === "custom" ? customNote.trim() : preset.phrase;
  const count = counts[presetId] ?? 0;

  function bump(next: number) {
    const normalized = Math.max(0, next);
    saveZikirCount(presetId, normalized);
    if (typeof navigator !== "undefined" && "vibrate" in navigator && next > count) {
      navigator.vibrate?.(10);
    }
  }

  return (
    <div className="flex flex-col gap-4 lg:gap-6">
      <PageHeader title={t("title")} className="mb-0" />
      <div className="space-y-5">
        <section className="rounded-xl border border-border p-4">
          <div className="mb-3 flex items-center gap-2 text-sm font-medium">
            {t("presets")}
          </div>
          <div className="flex flex-wrap gap-2">
            {ZIKIR_PRESETS.map((item) => {
              const selected = item.id === presetId;
              const label = item.id === "custom" ? t("custom") : item.phrase;
              return (
                <Button
                  key={item.id}
                  type="button"
                  variant={selected ? "default" : "outline"}
                  className="h-9 rounded-full px-3"
                  onClick={() => setPresetId(item.id)}
                >
                  {label}
                </Button>
              );
            })}
          </div>
        </section>

          {presetId === "custom" ? (
            <section className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-medium">
                {t("customNote")}
              </div>
              <Input
                value={customNote}
                onChange={(event) => setCustomNote(event.target.value)}
                placeholder={t("customPlaceholder")}
                className="h-11 rounded-xl"
              />
            </section>
          ) : null}

          <section className="relative rounded-xl border border-border px-4 pt-10 pb-8 text-center">
            <Button
              type="button"
              variant="ghost"
              className="absolute top-2 right-2 h-9 rounded-full px-3 text-xs"
              onClick={() => bump(0)}
              aria-label={t("reset")}
            >
              {t("reset")}
            </Button>
            <p className="text-sm text-muted-foreground">
              {activePhrase || t("custom")}
            </p>
            <p className="mt-3 font-heading text-6xl font-bold tracking-tight">
              {count}
            </p>
            <div className="mx-auto mt-4 flex max-w-[160px] items-center gap-3 text-muted-foreground">
              <span className="h-px flex-1 bg-border" />
              <span className="size-1.5 rounded-full bg-muted-foreground" />
              <span className="h-px flex-1 bg-border" />
            </div>
          </section>

          <div className="flex items-end justify-center gap-6">
            <Button
              type="button"
              variant="outline"
              className="h-12 w-12 shrink-0 rounded-full p-0 active:translate-y-0"
              onClick={() => bump(count - 1)}
              aria-label={t("minus")}
            >
              <span className="text-2xl leading-none" aria-hidden>−</span>
            </Button>
            <Button
              type="button"
              className="h-28 w-28 shrink-0 rounded-full p-0 active:translate-y-0"
              onClick={() => bump(count + 1)}
              aria-label={t("plus")}
            >
              <span className="text-5xl leading-none font-light" aria-hidden>+</span>
            </Button>
          </div>

        <p className="text-center text-xs text-muted-foreground">
          {t("autoSaveHint")}
        </p>
      </div>
    </div>
  );
}
