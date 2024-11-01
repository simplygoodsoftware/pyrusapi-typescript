import {FormFieldBase} from "./formFieldBase";
import {FormFieldType} from "../../enums/formFieldType";

export type FormFieldStep = FormFieldBase & {
    type?: typeof FormFieldType.Step;
    value?: number;
};
