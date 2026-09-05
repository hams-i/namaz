export const FLOW_KEYS = [
  "subhaneke",
  "euzu",
  "besmele",
  "fatiha",
  "aSurah",
  "ruku",
  "twoSajda",
  "ettehiyyatu",
  "salli",
  "barik",
  "rabbena",
  "kunut",
  "tekbir",
] as const;

export type FlowKey = (typeof FLOW_KEYS)[number];

export type PrayerId = "fajr" | "dhuhr" | "asr" | "maghrib" | "isha";

export type SectionKind = "firstSunnah" | "sunnah" | "fard" | "lastSunnah" | "witr";

export type SequenceItem =
  | { type: "recite"; key: FlowKey; sacredTextSlug?: string }
  | { type: "sitting"; labelKey: "sitting" | "finalSitting"; items: FlowKey[] };

export type RakatStep = {
  rakat: number;
  sequence: SequenceItem[];
};

export type NoteKind =
  | "surahOrder"
  | "fardFour"
  | "fardThree"
  | "fardTwo"
  | "lastSunnah"
  | "sunnahFour"
  | "suggestions"
  | "witr";

export type PrayerSection = {
  id: string;
  kind: SectionKind;
  rakat: number;
  niyet: Record<"tr" | "en", string>;
  steps: RakatStep[];
  notes: NoteKind[];
};

export type PrayerGuide = {
  id: PrayerId;
  sections: PrayerSection[];
};

export const FLOW_LINKS: Partial<Record<FlowKey, string>> = {
  subhaneke: "subhaneke",
  euzu: "euzu",
  besmele: "besmele",
  fatiha: "fatiha",
  ettehiyyatu: "ettehiyyatu",
  salli: "allahumme-salli",
  barik: "allahumme-barik",
  rabbena: "rabbena-atina",
  kunut: "kunut",
};
