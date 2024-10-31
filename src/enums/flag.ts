export const Flag = {
    None: "none",
    Checked: "checked",
    Unchecked: "unchecked",
} as const;

export type Flag = typeof Flag[keyof typeof Flag];
