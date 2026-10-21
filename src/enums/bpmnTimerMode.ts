export const BpmnTimerMode = {
    RelativeTime: "RelativeTime",
    RelativeOrgWorkTime: "RelativeOrgWorkTime",
} as const;

export type BpmnTimerMode = typeof BpmnTimerMode[keyof typeof BpmnTimerMode];
