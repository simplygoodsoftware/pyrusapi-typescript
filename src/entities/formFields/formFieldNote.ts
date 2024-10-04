import {FormFieldBase} from "./formFieldBase";
import {FormFieldType} from "../../enums/formFieldType";

export type FormFieldNote = FormFieldBase & {
    type?: FormFieldType.Note;
    value?: string;
};
