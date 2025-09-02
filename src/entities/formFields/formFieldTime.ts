import {FormFieldBase} from "./formFieldBase";
import {FormFieldType} from "../../enums/formFieldType";

export type FormFieldTime = FormFieldBase & {
    type: typeof FormFieldType.Time;
    value?: string;
};
