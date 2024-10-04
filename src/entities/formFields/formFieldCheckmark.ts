import {FormFieldBase} from "./formFieldBase";
import {FormFieldType} from "../../enums/formFieldType";
import {Checkmark} from "../../enums/checkmark";

export type FormFieldCheckmark = FormFieldBase & {
    type?: FormFieldType.Checkmark;
    value?: Checkmark;
};
