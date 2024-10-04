import {FormFieldBase} from "./formFieldBase";
import {FormFieldType} from "../../enums/formFieldType";

export type FormFieldDueDateTime = FormFieldBase & {
    type?: FormFieldType.DueDateTime;
    value?: Date;
};
