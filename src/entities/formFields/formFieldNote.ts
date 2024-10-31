import {FormFieldBase} from "./formFieldBase";
import {FormFieldType} from "../../enums/formFieldType";

export type FormFieldNote = FormFieldBase & {
    type?: typeof FormFieldType.Note;
    value?: string;
};
