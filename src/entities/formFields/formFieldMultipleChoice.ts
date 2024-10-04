import {FormFieldBase} from "./formFieldBase";
import {FormFieldType} from "../../enums/formFieldType";
import {FormField} from "./formField";

export type FormFieldMultipleChoice = FormFieldBase & {
    type?: FormFieldType.MultipleChoice;
    value?: MultipleChoice;
};

type MultipleChoice = {
    choice_id?: number;
    choice_ids?: number[];
    choice_names?: string[];
    fields?: FormField[];
};
