import {FormField} from "../entities/formFields/formField";
import {PrintForm} from "../entities/printForm";

export type FormResponse = {
    id: number;
    name: string;
    steps?: TaskSteps;
    fields: FormField[];
    print_forms?: PrintForm[];
    deleted_or_closed: boolean;
    business_owners?: number[];
    folder?: string[];
};

type TaskSteps = {
    [index: number]: string;
};
