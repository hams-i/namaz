import type { ZikirPresetId } from "@/features/zikirmatik/domain/types";

const STORAGE_KEY = "namaz.zikir.counts";
const EMPTY_COUNTS: ZikirCounts = {};
const listeners = new Set<() => void>();
let snapshot: ZikirCounts = EMPTY_COUNTS;
let snapshotRaw: string | null = null;

export type ZikirCounts = Partial<Record<ZikirPresetId, number>>;

export function readZikirCounts(): ZikirCounts {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    const value = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "{}") as unknown;
    if (!value || typeof value !== "object" || Array.isArray(value)) {
      return {};
    }

    return Object.fromEntries(
      Object.entries(value).filter(
        ([, count]) => typeof count === "number" && Number.isFinite(count) && count >= 0,
      ),
    ) as ZikirCounts;
  } catch {
    return {};
  }
}

export function subscribeZikirCounts(onStoreChange: () => void) {
  listeners.add(onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    listeners.delete(onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

export function getServerZikirCountsSnapshot(): ZikirCounts {
  return EMPTY_COUNTS;
}

export function getZikirCountsSnapshot(): ZikirCounts {
  if (typeof window === "undefined") {
    return EMPTY_COUNTS;
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (raw === snapshotRaw) {
    return snapshot;
  }

  snapshotRaw = raw;
  snapshot = readZikirCounts();
  return snapshot;
}

export function saveZikirCount(presetId: ZikirPresetId, count: number) {
  if (typeof window === "undefined") {
    return;
  }

  const counts = readZikirCounts();
  counts[presetId] = Math.max(0, count);
  const raw = JSON.stringify(counts);
  window.localStorage.setItem(STORAGE_KEY, raw);
  snapshot = counts;
  snapshotRaw = raw;
  listeners.forEach((listener) => listener());
}
