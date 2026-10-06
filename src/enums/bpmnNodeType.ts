export const BpmnNodeType = {
    Start: "Start",
    Finish: "Finish",
    Xor: "XOR",
    AndSplit: "AND_Split",
    AndJoin: "AND_Join",
    Activity: "Activity",
    Subprocess: "Subprocess",
    Queue: "Queue",
    Timer: "Timer",
    AwaitingStatus: "AwaitingStatus",
} as const;

export type BpmnNodeType = typeof BpmnNodeType[keyof typeof BpmnNodeType];
