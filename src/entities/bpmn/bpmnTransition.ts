import {BpmnNodeType} from "../../enums/bpmnNodeType";
import {BpmnTokenStatus} from "../../enums/bpmnTokenStatus";

export type BpmnTransition = {
    token_id: number;
    node_id?: number;
    node_name?: string;
    node_type?: BpmnNodeType;
    status?: BpmnTokenStatus;
};
