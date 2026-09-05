import type { RecordFilter, ZikirRecord } from "@/features/zikirmatik/domain/types";

const STORAGE_KEY = "namaz.zikir.records";
const EMPTY_RECORDS: ZikirRecord[] = [];
const listeners = new Set<() => void>();

let snapshot: ZikirRecord[] = EMPTY_RECORDS;
let snapshotRaw: string | null = null;

function canUseStorage() {
  return typeof window !== "undefined";
}

function parseRecords(raw: string | null): ZikirRecord[] {
  if (!raw) {
    return EMPTY_RECORDS;
  }
  try {
    const parsed = JSON.parse(raw) as ZikirRecord[];
    if (!Array.isArray(parsed)) {
      return EMPTY_RECORDS;
    }
    return parsed.sort(
      (a, b) => new Date(b.savedAt).getTime() - new Date(a.savedAt).getTime(),
    );
  } catch {
    return EMPTY_RECORDS;
  }
}

export function subscribeZikirRecords(onStoreChange: () => void) {
  listeners.add(onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    listeners.delete(onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

function notifyZikirRecords() {
  listeners.forEach((listener) => listener());
}

export function getServerZikirRecordsSnapshot(): ZikirRecord[] {
  return EMPTY_RECORDS;
}

export function getZikirRecordsSnapshot(): ZikirRecord[] {
  if (!canUseStorage()) {
    return EMPTY_RECORDS;
  }
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (raw === snapshotRaw) {
    return snapshot;
  }
  snapshotRaw = raw;
  snapshot = parseRecords(raw);
  return snapshot;
}

export function saveZikirRecords(records: ZikirRecord[]) {
  if (!canUseStorage()) {
    return;
  }
  const next = [...records].sort(
    (a, b) => new Date(b.savedAt).getTime() - new Date(a.savedAt).getTime(),
  );
  const raw = JSON.stringify(next);
  window.localStorage.setItem(STORAGE_KEY, raw);
  snapshot = next.length === 0 ? EMPTY_RECORDS : next;
  snapshotRaw = raw;
  notifyZikirRecords();
}

export function startOfDay(date: Date) {
  const next = new Date(date);
  next.setHours(0, 0, 0, 0);
  return next;
}

export function startOfWeek(date: Date) {
  const next = startOfDay(date);
  const day = next.getDay();
  const diff = day === 0 ? 6 : day - 1;
  next.setDate(next.getDate() - diff);
  return next;
}

export function startOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

export function filterZikirRecords(
  records: ZikirRecord[],
  filter: RecordFilter,
  now = new Date(),
): ZikirRecord[] {
  if (filter === "all") {
    return records;
  }
  const from =
    filter === "today"
      ? startOfDay(now)
      : filter === "week"
        ? startOfWeek(now)
        : startOfMonth(now);
  return records.filter((record) => new Date(record.savedAt) >= from);
}

export function countThisMonth(records: ZikirRecord[], now = new Date()) {
  return filterZikirRecords(records, "month", now).length;
}
