import {BpmnTimerMode} from "../../enums/bpmnTimerMode";

export type BpmnTimer = {
    mode: BpmnTimerMode;
    days?: number | null;
    hours?: number | null;
    minutes?: number | null;
};
