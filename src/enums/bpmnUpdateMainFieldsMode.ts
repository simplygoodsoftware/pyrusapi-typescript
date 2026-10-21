export const BpmnUpdateMainFieldsMode = {
    Immediately: "Immediately",
    OnStep: "OnStep",
} as const;

export type BpmnUpdateMainFieldsMode =
    typeof BpmnUpdateMainFieldsMode[keyof typeof BpmnUpdateMainFieldsMode];
