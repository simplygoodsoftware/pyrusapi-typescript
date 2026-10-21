import {BpmnFieldUpdateDirection} from "../../enums/bpmnFieldUpdateDirection";
import {BpmnSubprocessConstantValue} from "./bpmnSubprocessConstantValue";

export type BpmnSubprocessFieldMapping = {
    local_id?: number | null;
    subprocess_field_local_id?: number | null;
    direction: BpmnFieldUpdateDirection;
    is_constant?: boolean;
    constant_value?: BpmnSubprocessConstantValue;
};
