import {Person} from "../person";
import {BpmnWorkflowCatalogColumn} from "./bpmnWorkflowCatalogColumn";
import {BpmnWorkflowByDepartmentColumn} from "./bpmnWorkflowByDepartmentColumn";

export type BpmnParticipant = {
    person?: Person;
    contact_field_id?: number | null;
    contact_field_form_field_id?: number | null;
    queue_node_id?: number | null;
    workflow_catalog_column?: BpmnWorkflowCatalogColumn;
    workflow_by_department_column?: BpmnWorkflowByDepartmentColumn;
};
