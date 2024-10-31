import {FormFieldBase} from "./formFieldBase";
import {FormFieldType} from "../../enums/formFieldType";
import {Flag} from "../../enums/flag";

export type FormFieldFlag = FormFieldBase & {
    type?: typeof FormFieldType.Flag;
    value?: Flag;
};
