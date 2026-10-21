import {BpmnNodeType} from "../../enums/bpmnNodeType";
import {BpmnParticipant} from "./bpmnParticipant";
import {BpmnSubprocessConfiguration} from "./bpmnSubprocessConfiguration";
import {BpmnTimer} from "./bpmnTimer";
import {BpmnParticipantAction} from "../../enums/bpmnParticipantAction";
import {BpmnPosition} from "./bpmnPosition";
import {BpmnFlow} from "./bpmnFlow";

export type BpmnNode = {
    id: number;
    node_type: BpmnNodeType;
    description?: string;
    participant?: BpmnParticipant;
    subprocess_configuration?: BpmnSubprocessConfiguration;
    timer?: BpmnTimer;
    awaiting_statuses?: number[];
    task_status?: number | null;
    actions?: BpmnParticipantAction[];
    reference_node_id?: number | null;
    flow_group_id?: number | null;
    position?: BpmnPosition;
    flows?: BpmnFlow[];
    deleted_flows?: BpmnFlow[];
};
