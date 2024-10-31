import {FormFieldBase} from "./formFieldBase";
import {FormFieldType} from "../../enums/formFieldType";

export type FormFieldText = FormFieldBase & {
    type?: typeof FormFieldType.Text;
    value?: string;
};
