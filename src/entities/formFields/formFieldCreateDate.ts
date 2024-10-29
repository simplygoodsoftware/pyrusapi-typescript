import {FormFieldBase} from "./formFieldBase";
import {FormFieldType} from "../../enums/formFieldType";

export type FormFieldCreateDate = FormFieldBase & {
    type: typeof FormFieldType.CreationDate;
    value?: Date;
};
