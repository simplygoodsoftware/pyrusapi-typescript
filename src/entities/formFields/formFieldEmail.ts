import {FormFieldBase} from "./formFieldBase";
import {FormFieldType} from "../../enums/formFieldType";

export type FormFieldEmail = FormFieldBase & {
    type?: FormFieldType.Email;
    value?: string;
};
