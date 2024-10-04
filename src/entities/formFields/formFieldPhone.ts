import {FormFieldBase} from "./formFieldBase";
import {FormFieldType} from "../../enums/formFieldType";

export type FormFieldPhone = FormFieldBase & {
    type?: FormFieldType.Phone;
    value?: string;
};
