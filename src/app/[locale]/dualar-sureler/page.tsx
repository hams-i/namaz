"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import type { SacredCategory } from "@/features/dualar-sureler/domain/types";
import { LibraryView } from "@/features/dualar-sureler/presentation/library-view";

function LibraryPageContent() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");
  const initialTab: SacredCategory =
    tab === "surah" || tab === "tesbih" ? tab : "dua";
  return <LibraryView initialTab={initialTab} />;
}

export default function DualarSurelerPage() {
  return (
    <Suspense>
      <LibraryPageContent />
    </Suspense>
  );
}
