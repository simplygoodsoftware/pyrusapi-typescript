import {FormFieldBase} from "./formFieldBase";
import {FormFieldType} from "../../enums/formFieldType";

export type FormFieldNumber = FormFieldBase & {
    type?: FormFieldType.Number;
    value?: number;
};
