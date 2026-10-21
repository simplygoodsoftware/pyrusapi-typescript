import {Person} from "../entities/person";
import {BpmnNode} from "../entities/bpmn/bpmnNode";
import {BpmnFieldVisibilityCondition} from "../entities/bpmn/bpmnFieldVisibilityCondition";
import {BpmnFrame} from "../entities/bpmn/bpmnFrame";

export type FormBpmnDiagramResponse = {
    form_id: number;
    bpmn_version: number;
    active_bpmn_version?: number | null;
    description?: string;
    create_date?: Date | null;
    delete_date?: Date | null;
    author?: Person;
    active_task_nodes?: number[];
    nodes?: BpmnNode[];
    deleted_nodes?: BpmnNode[];
    field_visibility_conditions?: BpmnFieldVisibilityCondition[];
    frames?: BpmnFrame[];
};
