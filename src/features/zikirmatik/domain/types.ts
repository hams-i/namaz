export const ZIKIR_PRESET_IDS = [
  "subhanallah",
  "elhamdulillah",
  "allahu-ekber",
  "estagfirullah",
  "salavat",
  "la-ilahe-illallah",
  "custom",
] as const;

export type ZikirPresetId = (typeof ZIKIR_PRESET_IDS)[number];

export type ZikirPreset = {
  id: ZikirPresetId;
  phrase: string;
  icon: string;
};

export const ZIKIR_PRESETS: ZikirPreset[] = [
  { id: "subhanallah", phrase: "Sübhanallah", icon: "star" },
  { id: "elhamdulillah", phrase: "Elhamdülillah", icon: "heart" },
  { id: "allahu-ekber", phrase: "Allahu Ekber", icon: "sparkles" },
  { id: "estagfirullah", phrase: "Estağfirullah", icon: "rotateCcw" },
  { id: "salavat", phrase: "Salavat", icon: "heart" },
  { id: "la-ilahe-illallah", phrase: "Lâ ilâhe illallah", icon: "moonStar" },
  { id: "custom", phrase: "", icon: "pencil" },
];

export type ZikirRecord = {
  id: string;
  presetId: ZikirPresetId;
  phrase: string;
  count: number;
  savedAt: string;
};

export type RecordFilter = "all" | "today" | "week" | "month";
