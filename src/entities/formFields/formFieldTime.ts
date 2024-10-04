import {FormFieldBase} from "./formFieldBase";
import {FormFieldType} from "../../enums/formFieldType";

export type FormFieldTime = FormFieldBase & {
    type?: FormFieldType.Time;
    value?: Date;
};
