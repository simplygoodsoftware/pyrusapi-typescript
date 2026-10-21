import {BpmnConditionType} from "../../enums/bpmnConditionType";

export type BpmnCondition = {
    field_id: number;
    condition_type: BpmnConditionType;
    value?: string;
    values?: string[];
    catalog_column?: number | null;
    children?: BpmnCondition[];
};
