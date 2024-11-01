import {FormFieldBase} from "./formFieldBase";
import {FormFieldType} from "../../enums/formFieldType";

export type FormFieldDueDate = FormFieldBase & {
    type: typeof FormFieldType.DueDate;
    value?: Date;
};
