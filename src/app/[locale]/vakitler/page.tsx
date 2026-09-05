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

export default async function VakitlerPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const query = await searchParams;
  const vakitRaw = Array.isArray(query.vakit) ? query.vakit[0] : query.vakit;
  const bolumRaw = Array.isArray(query.bolum) ? query.bolum[0] : query.bolum;
  const prayerId = vakitRaw && isPrayerId(vakitRaw) ? vakitRaw : "dhuhr";
  const guide = getPrayerGuide(prayerId) ?? PRAYER_GUIDES[1];
  const sectionId =
    bolumRaw && guide.sections.some((section) => section.id === bolumRaw)
      ? bolumRaw
      : guide.sections[0].id;

  return <VakitlerView prayerId={prayerId} sectionId={sectionId} />;
}
