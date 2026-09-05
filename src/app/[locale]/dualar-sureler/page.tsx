import { LibraryView } from "@/features/dualar-sureler/presentation/library-view";
import type { SacredCategory } from "@/features/dualar-sureler/domain/types";

export default async function DualarSurelerPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const query = await searchParams;
  const tabRaw = Array.isArray(query.tab) ? query.tab[0] : query.tab;
  const initialTab: SacredCategory = tabRaw === "surah" ? "surah" : "dua";
  return <LibraryView initialTab={initialTab} />;
}
