"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { CalculationMethod, Coordinates, Madhab, PrayerTimes } from "adhan";
import { useTranslations } from "next-intl";
import {
  getPreferencesSnapshot,
  getServerPreferencesSnapshot,
  subscribePreferences,
} from "@/features/settings/data/preferences-storage";
import { getProvince } from "@/features/settings/data/turkey-provinces";

function prayerTimes(date: Date, coordinates: Coordinates) {
  const parameters = CalculationMethod.Turkey();
  parameters.madhab = Madhab.Hanafi;
  return new PrayerTimes(coordinates, date, parameters);
}

function nextBoundary(now: Date, coordinates: Coordinates) {
  const today = prayerTimes(now, coordinates);
  const tomorrowDate = new Date(now);
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const tomorrow = prayerTimes(tomorrowDate, coordinates);

  if (now < today.fajr) return { time: today.fajr, waiting: false };
  if (now < today.sunrise) return { time: today.sunrise, waiting: false };
  if (now < today.dhuhr) return { time: today.dhuhr, waiting: true };
  if (now < today.asr) return { time: today.asr, waiting: false };
  if (now < today.maghrib) return { time: today.maghrib, waiting: false };
  if (now < today.isha) return { time: today.isha, waiting: false };
  return { time: tomorrow.fajr, waiting: false };
}

export function PrayerCountdown() {
  const t = useTranslations("vakitler");
  const [now, setNow] = useState<number | null>(null);
  const preferences = useSyncExternalStore(
    subscribePreferences,
    getPreferencesSnapshot,
    getServerPreferencesSnapshot,
  );

  useEffect(() => {
    const update = () => setNow(Date.now());
    const initial = window.setTimeout(update, 0);
    const timer = window.setInterval(update, 30_000);
    return () => {
      window.clearTimeout(initial);
      window.clearInterval(timer);
    };
  }, []);

  const province = getProvince(preferences.provinceCode);
  const coordinates = province
    ? new Coordinates(province.latitude, province.longitude)
    : null;
  const boundary = now !== null && coordinates
    ? nextBoundary(new Date(now), coordinates)
    : null;
  const minutes = boundary
    ? Math.max(0, Math.ceil((boundary.time.getTime() - now!) / 60_000))
    : null;

  const locationName = province?.name ?? "Antalya";

  return (
    <div
      className="shrink-0 rounded-xl border border-border px-3 py-2 text-right"
      title={locationName}
    >
      <p className="text-[11px] leading-tight text-muted-foreground">
        {t(boundary?.waiting ? "nextPrayer" : "timeRemaining")}
      </p>
      <p className="mt-0.5 text-sm font-semibold tabular-nums">
        {minutes === null
          ? "—"
          : `${locationName} · ${t("minutesRemaining", { count: minutes })}`}
      </p>
    </div>
  );
}
