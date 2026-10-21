export const BpmnTokenStatus = {
    Active: "Active",
    Waiting: "Waiting",
    Completed: "Completed",
    Suspended: "Suspended",
    Terminated: "Terminated",
} as const;

export type BpmnTokenStatus =
    typeof BpmnTokenStatus[keyof typeof BpmnTokenStatus];
