"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { VakitlerView } from "@/features/vakitler/presentation/vakitler-view";
import {
  PRAYER_GUIDES,
  PRAYER_ORDER,
  getPrayerGuide,
} from "@/features/vakitler/data/prayer-guides";
import type { PrayerId } from "@/features/vakitler/domain/types";

function isPrayerId(value: string): value is PrayerId {
  return (PRAYER_ORDER as readonly string[]).includes(value);
}

function VakitlerPageContent() {
  const searchParams = useSearchParams();
  const vakitRaw = searchParams.get("vakit");
  const bolumRaw = searchParams.get("bolum");
  const prayerId = vakitRaw && isPrayerId(vakitRaw) ? vakitRaw : "dhuhr";
  const guide = getPrayerGuide(prayerId) ?? PRAYER_GUIDES[1];
  const sectionId =
    bolumRaw && guide.sections.some((section) => section.id === bolumRaw)
      ? bolumRaw
      : guide.sections[0].id;

  return <VakitlerView prayerId={prayerId} sectionId={sectionId} />;
}

export default function VakitlerPage() {
  return (
    <Suspense>
      <VakitlerPageContent />
    </Suspense>
  );
}
