import {BpmnDiagramVersionInfo} from "../entities/bpmn/bpmnDiagramVersionInfo";

export type FormBpmnVersionsResponse = {
    form_id: number;
    active_bpmn_version?: number | null;
    versions: BpmnDiagramVersionInfo[];
};
