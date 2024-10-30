export const CallStatus = {
    Answered: "answered",
    NoAnswer: "no answer",
    Busy: "busy",
    Error: "error",
    Other: "other",
} as const;

export type CallStatus = typeof CallStatus[keyof typeof CallStatus];
