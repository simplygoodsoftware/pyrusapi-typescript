export const Status = {
    Open: "open",
    Closed: "closed",
} as const;

export type Status = typeof Status[keyof typeof Status];
