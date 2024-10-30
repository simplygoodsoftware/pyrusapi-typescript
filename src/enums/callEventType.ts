export const CallEventType = {
    Show: "show",
} as const;

export type CallEventType = typeof CallEventType[keyof typeof CallEventType];
