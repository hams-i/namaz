"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { CalculationMethod, Coordinates, Prayer, PrayerTimes } from "adhan";
import { useTranslations } from "next-intl";
import {
  getPreferencesSnapshot,
  getServerPreferencesSnapshot,
  subscribePreferences,
} from "@/features/settings/data/preferences-storage";
import { getProvince } from "@/features/settings/data/turkey-provinces";

function prayerTimes(date: Date, coordinates: Coordinates) {
  const parameters = CalculationMethod.Turkey();
  return new PrayerTimes(coordinates, date, parameters);
}

function dateInTurkey(now: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/Istanbul",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).formatToParts(now);
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return new Date(
    Number(values.year),
    Number(values.month) - 1,
    Number(values.day),
    12,
  );
}

function nextBoundary(now: Date, coordinates: Coordinates) {
  const calendarDate = dateInTurkey(now);
  const today = prayerTimes(calendarDate, coordinates);
  const tomorrowDate = new Date(calendarDate);
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const tomorrow = prayerTimes(tomorrowDate, coordinates);
  const currentPrayer = today.currentPrayer(now);
  const nextPrayer = today.nextPrayer(now);

  if (currentPrayer === Prayer.Isha || nextPrayer === Prayer.None) {
    return { time: tomorrow.fajr, waiting: false };
  }

  const time = today.timeForPrayer(nextPrayer);
  if (!time) {
    return { time: tomorrow.fajr, waiting: false };
  }

  return {
    time,
    waiting:
      currentPrayer === Prayer.None || currentPrayer === Prayer.Sunrise,
  };
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
