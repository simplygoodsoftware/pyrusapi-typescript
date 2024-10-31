import {FormFieldBase} from "./formFieldBase";
import {FormFieldType} from "../../enums/formFieldType";

export type FormFieldEmail = FormFieldBase & {
    type?: typeof FormFieldType.Email;
    value?: string;
};
