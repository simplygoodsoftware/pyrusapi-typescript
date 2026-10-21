import {BpmnNodeType} from "../../enums/bpmnNodeType";
import {BpmnTokenStatus} from "../../enums/bpmnTokenStatus";
import {BpmnTokenEventType} from "../../enums/bpmnTokenEventType";
import {Person} from "../person";

export type BpmnToken = {
    token_id: number;
    node_id: number;
    node_name?: string;
    node_type?: BpmnNodeType;
    status: BpmnTokenStatus;
    person?: Person;
    event_type?: BpmnTokenEventType;
    event_time?: Date;
};
