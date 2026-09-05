import type {
  FlowKey,
  PrayerGuide,
  PrayerSection,
  RakatStep,
  SequenceItem,
} from "@/features/vakitler/domain/types";

const recite = (key: FlowKey, sacredTextSlug?: string): SequenceItem => ({
  type: "recite",
  key,
  sacredTextSlug,
});

function sitting(
  labelKey: "sitting" | "finalSitting",
  items: Array<
    "ettehiyyatu" | "salli" | "barik" | "rabbena" | "kunut"
  >,
): SequenceItem {
  return { type: "sitting", labelKey, items };
}

const opening: SequenceItem[] = [
  recite("subhaneke"),
  recite("euzu"),
  recite("besmele"),
  recite("fatiha"),
];

function withSurah(sacredTextSlug?: string): SequenceItem[] {
  return [
    recite("besmele"),
    recite("fatiha"),
    recite("aSurah", sacredTextSlug),
    recite("ruku"),
    recite("twoSajda"),
  ];
}

const fatihaOnly: SequenceItem[] = [
  recite("besmele"),
  recite("fatiha"),
  recite("ruku"),
  recite("twoSajda"),
];

function firstRakatWithSurah(sacredTextSlug?: string): SequenceItem[] {
  return [
    ...opening,
    recite("aSurah", sacredTextSlug),
    recite("ruku"),
    recite("twoSajda"),
  ];
}

function twoRakatSunnahOrFard(surahs?: [string, string]): RakatStep[] {
  return [
    { rakat: 1, sequence: firstRakatWithSurah(surahs?.[0]) },
    {
      rakat: 2,
      sequence: [
        ...withSurah(surahs?.[1]),
        sitting("finalSitting", ["ettehiyyatu", "salli", "barik", "rabbena"]),
      ],
    },
  ];
}

function fourRakatSunnah(): RakatStep[] {
  return [
    { rakat: 1, sequence: firstRakatWithSurah() },
    {
      rakat: 2,
      sequence: [...withSurah(), sitting("sitting", ["ettehiyyatu"])],
    },
    { rakat: 3, sequence: withSurah() },
    {
      rakat: 4,
      sequence: [
        ...withSurah(),
        sitting("finalSitting", ["ettehiyyatu", "salli", "barik", "rabbena"]),
      ],
    },
  ];
}

function fourRakatFard(surahs: [string, string]): RakatStep[] {
  return [
    { rakat: 1, sequence: firstRakatWithSurah(surahs[0]) },
    {
      rakat: 2,
      sequence: [...withSurah(surahs[1]), sitting("sitting", ["ettehiyyatu"])],
    },
    { rakat: 3, sequence: fatihaOnly },
    {
      rakat: 4,
      sequence: [
        ...fatihaOnly,
        sitting("finalSitting", ["ettehiyyatu", "salli", "barik", "rabbena"]),
      ],
    },
  ];
}

function threeRakatFard(surahs: [string, string]): RakatStep[] {
  return [
    { rakat: 1, sequence: firstRakatWithSurah(surahs[0]) },
    {
      rakat: 2,
      sequence: [...withSurah(surahs[1]), sitting("sitting", ["ettehiyyatu"])],
    },
    {
      rakat: 3,
      sequence: [
        ...fatihaOnly,
        sitting("finalSitting", ["ettehiyyatu", "salli", "barik", "rabbena"]),
      ],
    },
  ];
}

function threeRakatWitr(): RakatStep[] {
  return [
    { rakat: 1, sequence: firstRakatWithSurah() },
    {
      rakat: 2,
      sequence: [...withSurah(), sitting("sitting", ["ettehiyyatu"])],
    },
    {
      rakat: 3,
      sequence: [
        recite("besmele"),
        recite("fatiha"),
        recite("aSurah"),
        recite("tekbir"),
        recite("kunut"),
        recite("ruku"),
        recite("twoSajda"),
        sitting("finalSitting", ["ettehiyyatu", "salli", "barik", "rabbena"]),
      ],
    },
  ];
}

function section(
  partial: Omit<PrayerSection, "id"> & { id?: string },
): PrayerSection {
  return {
    id: partial.id ?? `${partial.kind}-${partial.rakat}`,
    ...partial,
  };
}

export const SURAH_ORDER_SLUGS = [
  "fatiha",
  "fil",
  "kureys",
  "maun",
  "kevser",
  "kafirun",
  "nasr",
  "tebbet",
  "ihlas",
  "felak",
  "nas",
] as const;

export const SUGGESTED_SURAH_SLUGS = [
  "fil",
  "kureys",
  "maun",
  "kevser",
  "kafirun",
  "nasr",
  "tebbet",
  "ihlas",
  "felak",
  "nas",
] as const;

export const PRAYER_GUIDES: PrayerGuide[] = [
  {
    id: "fajr",
    sections: [
      section({
        kind: "sunnah",
        rakat: 2,
        niyet: {
          tr: "Niyet ettim Allah rızası için sabah namazının iki rekât sünnetini kılmaya.",
          en: "I intend to pray the two rak'ahs of the sunnah of Fajr for the sake of Allah.",
        },
        steps: twoRakatSunnahOrFard(),
        notes: ["surahOrder"],
      }),
      section({
        kind: "fard",
        rakat: 2,
        niyet: {
          tr: "Niyet ettim Allah rızası için sabah namazının iki rekât farzını kılmaya.",
          en: "I intend to pray the two rak'ahs of the fard of Fajr for the sake of Allah.",
        },
        steps: twoRakatSunnahOrFard(["fil", "kureys"]),
        notes: ["fardTwo"],
      }),
    ],
  },
  {
    id: "dhuhr",
    sections: [
      section({
        kind: "firstSunnah",
        rakat: 4,
        niyet: {
          tr: "Niyet ettim Allah rızası için öğle namazının dört rekât ilk sünnetini kılmaya.",
          en: "I intend to pray the four rak'ahs of the first sunnah of Dhuhr for the sake of Allah.",
        },
        steps: fourRakatSunnah(),
        notes: ["surahOrder"],
      }),
      section({
        kind: "fard",
        rakat: 4,
        niyet: {
          tr: "Niyet ettim Allah rızası için öğle namazının dört rekât farzını kılmaya.",
          en: "I intend to pray the four rak'ahs of the fard of Dhuhr for the sake of Allah.",
        },
        steps: fourRakatFard(["maun", "kevser"]),
        notes: ["fardFour"],
      }),
      section({
        kind: "lastSunnah",
        rakat: 2,
        niyet: {
          tr: "Niyet ettim Allah rızası için öğle namazının son iki rekât sünnetini kılmaya.",
          en: "I intend to pray the last two rak'ahs of the sunnah of Dhuhr for the sake of Allah.",
        },
        steps: twoRakatSunnahOrFard(),
        notes: ["lastSunnah", "suggestions"],
      }),
    ],
  },
  {
    id: "asr",
    sections: [
      section({
        kind: "sunnah",
        rakat: 4,
        niyet: {
          tr: "Niyet ettim Allah rızası için ikindi namazının dört rekât sünnetini kılmaya.",
          en: "I intend to pray the four rak'ahs of the sunnah of Asr for the sake of Allah.",
        },
        steps: fourRakatSunnah(),
        notes: ["surahOrder"],
      }),
      section({
        kind: "fard",
        rakat: 4,
        niyet: {
          tr: "Niyet ettim Allah rızası için ikindi namazının dört rekât farzını kılmaya.",
          en: "I intend to pray the four rak'ahs of the fard of Asr for the sake of Allah.",
        },
        steps: fourRakatFard(["kafirun", "nasr"]),
        notes: ["fardFour"],
      }),
    ],
  },
  {
    id: "maghrib",
    sections: [
      section({
        kind: "fard",
        rakat: 3,
        niyet: {
          tr: "Niyet ettim Allah rızası için akşam namazının üç rekât farzını kılmaya.",
          en: "I intend to pray the three rak'ahs of the fard of Maghrib for the sake of Allah.",
        },
        steps: threeRakatFard(["tebbet", "ihlas"]),
        notes: ["fardThree"],
      }),
      section({
        kind: "lastSunnah",
        rakat: 2,
        niyet: {
          tr: "Niyet ettim Allah rızası için akşam namazının iki rekât sünnetini kılmaya.",
          en: "I intend to pray the two rak'ahs of the sunnah of Maghrib for the sake of Allah.",
        },
        steps: twoRakatSunnahOrFard(),
        notes: ["lastSunnah", "suggestions"],
      }),
    ],
  },
  {
    id: "isha",
    sections: [
      section({
        kind: "firstSunnah",
        rakat: 4,
        niyet: {
          tr: "Niyet ettim Allah rızası için yatsı namazının dört rekât ilk sünnetini kılmaya.",
          en: "I intend to pray the four rak'ahs of the first sunnah of Isha for the sake of Allah.",
        },
        steps: fourRakatSunnah(),
        notes: ["surahOrder"],
      }),
      section({
        kind: "fard",
        rakat: 4,
        niyet: {
          tr: "Niyet ettim Allah rızası için yatsı namazının dört rekât farzını kılmaya.",
          en: "I intend to pray the four rak'ahs of the fard of Isha for the sake of Allah.",
        },
        steps: fourRakatFard(["felak", "nas"]),
        notes: ["fardFour"],
      }),
      section({
        kind: "lastSunnah",
        rakat: 2,
        niyet: {
          tr: "Niyet ettim Allah rızası için yatsı namazının son iki rekât sünnetini kılmaya.",
          en: "I intend to pray the last two rak'ahs of the sunnah of Isha for the sake of Allah.",
        },
        steps: twoRakatSunnahOrFard(),
        notes: ["lastSunnah", "suggestions"],
      }),
      section({
        kind: "witr",
        rakat: 3,
        niyet: {
          tr: "Niyet ettim Allah rızası için üç rekât vitir vacip namazını kılmaya.",
          en: "I intend to pray the three rak'ahs of Witr Wajib for the sake of Allah.",
        },
        steps: threeRakatWitr(),
        notes: ["witr"],
      }),
    ],
  },
];

export function getPrayerGuide(id: string): PrayerGuide | undefined {
  return PRAYER_GUIDES.find((guide) => guide.id === id);
}

export const PRAYER_ORDER = [
  "fajr",
  "dhuhr",
  "asr",
  "maghrib",
  "isha",
] as const;
