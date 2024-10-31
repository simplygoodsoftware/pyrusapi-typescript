export const Checkmark = {
    Checked: "checked",
    Unchecked: "unchecked",
} as const;

export type Checkmark = typeof Checkmark[keyof typeof Checkmark];
