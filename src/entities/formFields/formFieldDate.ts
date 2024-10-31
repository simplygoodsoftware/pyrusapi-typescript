import {FormFieldBase} from "./formFieldBase";
import {FormFieldType} from "../../enums/formFieldType";

export type FormFieldDate = FormFieldBase & {
    type: typeof FormFieldType.Date;
    value?: Date;
};
