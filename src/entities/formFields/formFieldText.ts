import {FormFieldBase} from "./formFieldBase";
import {FormFieldType} from "../../enums/formFieldType";

export type FormFieldText = FormFieldBase & {
    type?: FormFieldType.Text;
    value?: string;
};
