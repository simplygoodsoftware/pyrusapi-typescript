import {BpmnCondition} from "./bpmnCondition";
import {BpmnPosition} from "./bpmnPosition";

export type BpmnFlow = {
    id: number;
    to_node_id: number;
    condition?: BpmnCondition;
    is_default: boolean;
    vertex_no?: number | null;
    to_vertex_no?: number | null;
    hint_position?: BpmnPosition;
};
