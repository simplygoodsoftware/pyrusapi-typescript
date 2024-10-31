import {FormFieldBase} from "./formFieldBase";
import {FormFieldType} from "../../enums/formFieldType";

export type FormFieldNumber = FormFieldBase & {
    type?: typeof FormFieldType.Number;
    value?: number;
};
