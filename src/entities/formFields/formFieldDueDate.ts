import {FormFieldBase} from "./formFieldBase";
import {FormFieldType} from "../../enums/formFieldType";

export type FormFieldDueDate = FormFieldBase & {
    type?: FormFieldType.DueDate;
    value?: Date;
};
