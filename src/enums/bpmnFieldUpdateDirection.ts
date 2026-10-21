export const BpmnFieldUpdateDirection = {
    MainToSubprocess: "MainToSubprocess",
    SubprocessToMain: "SubprocessToMain",
} as const;

export type BpmnFieldUpdateDirection =
    typeof BpmnFieldUpdateDirection[keyof typeof BpmnFieldUpdateDirection];
