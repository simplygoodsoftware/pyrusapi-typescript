import {FormField} from "../entities/formFields/formField";
import {PrintForm} from "../entities/printForm";

export type FormResponse = {
    id: number;
    name: string;
    steps?: TaskSteps;
    use_bpmn_for_new_tasks?: boolean;
    bpmn_version?: number;
    fields: FormField[];
    print_forms?: PrintForm[];
    deleted_or_closed: boolean;
    business_owners?: number[];
    folder?: string[];
};

type TaskSteps = {
    [index: number]: string;
};
