import {FormFieldBase} from "./formFieldBase";
import {FormFieldType} from "../../enums/formFieldType";
import {Status} from "../../enums/status";

export type FormFieldStatus = FormFieldBase & {
    type?: typeof FormFieldType.Status;
    value?: Status;
};
