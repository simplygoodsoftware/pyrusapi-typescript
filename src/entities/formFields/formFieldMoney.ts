import {FormFieldBase} from "./formFieldBase";
import {FormFieldType} from "../../enums/formFieldType";

export type FormFieldMoney = FormFieldBase & {
    type?: typeof FormFieldType.Money;
    value?: number;
};
