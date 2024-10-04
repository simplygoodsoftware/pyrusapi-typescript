import {FormFieldBase} from "./formFieldBase";
import {FormFieldType} from "../../enums/formFieldType";
import {Flag} from "../../enums/flag";

export type FormFieldFlag = FormFieldBase & {
    type?: FormFieldType.Flag;
    value?: Flag;
};
