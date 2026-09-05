"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import type { SacredCategory } from "@/features/dualar-sureler/domain/types";
import { LibraryView } from "@/features/dualar-sureler/presentation/library-view";

function LibraryPageContent() {
  const searchParams = useSearchParams();
  const initialTab: SacredCategory =
    searchParams.get("tab") === "surah" ? "surah" : "dua";
  return <LibraryView initialTab={initialTab} />;
}

export default function DualarSurelerPage() {
  return (
    <Suspense>
      <LibraryPageContent />
    </Suspense>
  );
}
