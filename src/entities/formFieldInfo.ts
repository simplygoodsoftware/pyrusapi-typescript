import {FormField} from "./formFields/formField";

export type FormFieldInfo = {
    required_step?: number;
    immutable_step?: number;
    options?: ChoiceOption[];
    catalog_id?: number;
    columns?: FormField[];
    fields?: FormField[];
    form_id?: number;
    code?: string;
    decimal_places?: number;
    multiple_choice?: boolean;
    multiline?: boolean;
};

type ChoiceOption = {
    choice_id: number;
    choice_value: string;
    deleted: boolean;
    fields: FormField[];
};
