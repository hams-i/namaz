const STORAGE_KEY = "namaz.preferences";
const DEFAULT_PREFERENCES: AppPreferences = {
  showArabic: true,
  provinceCode: "07",
};
const listeners = new Set<() => void>();

export type AppPreferences = {
  showArabic: boolean;
  provinceCode: string;
};

let snapshot = DEFAULT_PREFERENCES;
let snapshotRaw: string | null = null;

function parsePreferences(raw: string | null): AppPreferences {
  if (!raw) {
    return DEFAULT_PREFERENCES;
  }

  try {
    const value = JSON.parse(raw) as Partial<AppPreferences> & {
      locationMode?: string;
    };
    return {
      showArabic:
        typeof value.showArabic === "boolean"
          ? value.showArabic
          : DEFAULT_PREFERENCES.showArabic,
      provinceCode:
        value.locationMode !== "device" && typeof value.provinceCode === "string"
          ? value.provinceCode
          : DEFAULT_PREFERENCES.provinceCode,
    };
  } catch {
    return DEFAULT_PREFERENCES;
  }
}

export function subscribePreferences(onStoreChange: () => void) {
  listeners.add(onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    listeners.delete(onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

export function getServerPreferencesSnapshot() {
  return DEFAULT_PREFERENCES;
}

export function getPreferencesSnapshot() {
  if (typeof window === "undefined") {
    return DEFAULT_PREFERENCES;
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (raw === snapshotRaw) {
    return snapshot;
  }

  snapshotRaw = raw;
  snapshot = parsePreferences(raw);
  return snapshot;
}

export function savePreferences(next: AppPreferences) {
  if (typeof window === "undefined") {
    return;
  }

  const raw = JSON.stringify(next);
  window.localStorage.setItem(STORAGE_KEY, raw);
  snapshot = next;
  snapshotRaw = raw;
  listeners.forEach((listener) => listener());
}
