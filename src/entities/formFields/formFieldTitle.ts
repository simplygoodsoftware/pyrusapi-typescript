import {FormFieldBase} from "./formFieldBase";
import {FormFieldType} from "../../enums/formFieldType";
import {Checkmark} from "../../enums/checkmark";
import {FormField} from "./formField";

export type FormFieldTitle = FormFieldBase & {
    type?: typeof FormFieldType.Title;
    value?: Title;
};

type Title = {
    checkmark?: Checkmark;
    fields?: FormField[];
};
