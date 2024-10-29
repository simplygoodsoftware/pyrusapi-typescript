import {FormFieldBase} from "./formFieldBase";
import {FormFieldType} from "../../enums/formFieldType";
import {FormLink} from "../formLink";

export type FormFieldFormLink = FormFieldBase & {
    type?: typeof FormFieldType.FormLink;
    value?: FormLink;
};
