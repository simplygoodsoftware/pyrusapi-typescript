export const SourceType = {
    Default: "default",
    FillTable: "fill_table",
} as const;

export type SourceType = typeof SourceType[keyof typeof SourceType];
