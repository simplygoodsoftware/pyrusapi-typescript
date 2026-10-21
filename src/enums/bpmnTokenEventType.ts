export const BpmnTokenEventType = {
    Timer: "Timer",
    AwaitingStatus: "AwaitingStatus",
} as const;

export type BpmnTokenEventType =
    typeof BpmnTokenEventType[keyof typeof BpmnTokenEventType];
