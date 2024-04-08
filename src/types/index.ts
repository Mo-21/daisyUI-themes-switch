export type BasicStatsType = {
  key: string;
  fn: number;
};

export type CharStatsType = {
  key: string;
  fn: number;
  note: string;
};

export type AdvancedStatsType = {
  key: string;
  fn: number | string;
  tooltip: string;
};

export type RepeatedWordsType = {
  key: string;
  fn: {
    word: string;
    count: number;
  }[];
  tooltip: string;
};

export type StatsReturnType<M extends "BASIC" | "ADVANCED"> = M extends "BASIC"
  ? { basic_stats: BasicStatsType[]; char_stats: CharStatsType[] }
  : {
      advanced_stats: AdvancedStatsType[];
      repeated_words: RepeatedWordsType[];
    };
