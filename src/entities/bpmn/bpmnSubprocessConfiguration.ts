import {BpmnSubprocessFieldMapping} from "./bpmnSubprocessFieldMapping";
import {BpmnUpdateMainFieldsMode} from "../../enums/bpmnUpdateMainFieldsMode";

export type BpmnSubprocessConfiguration = {
    subprocess_form_id: number;
    wait_until_subprocess_finished: boolean;
    field_mappings?: BpmnSubprocessFieldMapping[];
    update_main_fields_mode: BpmnUpdateMainFieldsMode;
    update_main_fields_on_step?: number | null;
    finish_subprocess_tasks_when_main_is_finished: boolean;
    subprocess_guid?: string;
    map_changes_only_on_subprocess_step: boolean;
};
