import {BpmnPosition} from "./bpmnPosition";
import {BpmnSize} from "./bpmnSize";

export type BpmnFrame = {
    id: number;
    description?: string;
    position?: BpmnPosition;
    size?: BpmnSize;
};
