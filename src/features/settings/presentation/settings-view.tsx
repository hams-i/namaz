"use client";

import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { Globe, Monitor, Moon, Sun } from "lucide-react";
import { getPathname, usePathname } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { PwaInstallCard } from "@/features/settings/presentation/pwa-install-card";
import {
  getPreferencesSnapshot,
  getServerPreferencesSnapshot,
  savePreferences,
  subscribePreferences,
} from "@/features/settings/data/preferences-storage";
import { PageHeader } from "@/shared/components/page-header";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { TURKEY_PROVINCES } from "@/features/settings/data/turkey-provinces";

export function SettingsView() {
  const t = useTranslations("settings");
  const locale = useLocale();
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );
  const preferences = useSyncExternalStore(
    subscribePreferences,
    getPreferencesSnapshot,
    getServerPreferencesSnapshot,
  );
  function changeLocation(value: string) {
    savePreferences({
      ...preferences,
      provinceCode: value,
    });
  }

  function changeLocale(next: AppLocale) {
    if (next === locale) {
      return;
    }
    window.location.assign(getPathname({ href: pathname, locale: next }));
  }

  const languages: { id: AppLocale; label: string }[] = [
    { id: "tr", label: t("turkish") },
    { id: "en", label: t("english") },
  ];

  const themes = [
    { id: "system", label: t("themeSystem"), icon: Monitor },
    { id: "light", label: t("themeLight"), icon: Sun },
    { id: "dark", label: t("themeDark"), icon: Moon },
  ] as const;

  return (
    <div>
      <PageHeader title={t("title")} />
      <div className="space-y-3">
        <section className="rounded-xl border border-border p-4">
          <div className="mb-3">
            <h2 className="font-semibold">{t("location")}</h2>
            <p className="text-sm text-muted-foreground">{t("locationHint")}</p>
          </div>
          <label htmlFor="location-select" className="sr-only">
            {t("location")}
          </label>
          <select
            id="location-select"
            value={preferences.provinceCode}
            onChange={(event) => changeLocation(event.target.value)}
            className="h-12 w-full rounded-xl border border-border bg-background px-3 text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {TURKEY_PROVINCES.map((province) => (
              <option key={province.code} value={province.code}>
                {province.code} {province.name}
              </option>
            ))}
          </select>
        </section>

        <section className="flex min-h-16 items-center gap-4 rounded-xl border border-border p-4">
          <div className="min-w-0 flex-1">
            <h2 className="font-semibold">{t("showArabic")}</h2>
            <p className="text-sm text-muted-foreground">{t("showArabicHint")}</p>
          </div>
          <Switch
            checked={preferences.showArabic}
            onCheckedChange={(showArabic) =>
              savePreferences({ ...preferences, showArabic })
            }
            aria-label={t("showArabic")}
          />
        </section>

        <section className="rounded-xl border border-border p-4">
          <div className="mb-3 flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-full bg-muted">
              <Globe className="size-4" />
            </span>
            <div>
              <h2 className="font-semibold">{t("language")}</h2>
              <p className="text-sm text-muted-foreground">{t("languageHint")}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {languages.map((item) => (
              <Button
                key={item.id}
                type="button"
                variant={locale === item.id ? "default" : "outline"}
                className="h-11 rounded-xl"
                onClick={() => changeLocale(item.id)}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-border p-4">
          <div className="mb-3 flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-full bg-muted">
              <Monitor className="size-4" />
            </span>
            <div>
              <h2 className="font-semibold">{t("theme")}</h2>
              <p className="text-sm text-muted-foreground">{t("themeHint")}</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {themes.map((item) => {
              const Icon = item.icon;
              const active = mounted && theme === item.id;
              return (
                <Button
                  key={item.id}
                  type="button"
                  variant={active ? "default" : "outline"}
                  className={cn("h-11 rounded-xl")}
                  onClick={() => setTheme(item.id)}
                >
                  <Icon className="size-4" />
                  {item.label}
                </Button>
              );
            })}
          </div>
        </section>

        <PwaInstallCard />
      </div>
    </div>
  );
}
