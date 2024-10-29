import {FormFieldType} from "../../enums/formFieldType";
import {FormFieldInfo} from "../formFieldInfo";

export type FormFieldBase = {
    id?: number;
    type?: typeof FormFieldType[keyof typeof FormFieldType];
    name?: string;
    info?: FormFieldInfo;
    parent_id?: number;
    row_id?: number;
    code?: string;
};
