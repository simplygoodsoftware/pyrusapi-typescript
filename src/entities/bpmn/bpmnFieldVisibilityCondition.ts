import {BpmnCondition} from "./bpmnCondition";

export type BpmnFieldVisibilityCondition = {
    field_id: number;
    condition: BpmnCondition;
};
