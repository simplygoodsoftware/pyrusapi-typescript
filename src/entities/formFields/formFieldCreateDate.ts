import {FormFieldBase} from "./formFieldBase";
import {FormFieldType} from "../../enums/formFieldType";

export type FormFieldCreateDate = FormFieldBase & {
    type?: FormFieldType.CreationDate;
    value?: Date;
};
