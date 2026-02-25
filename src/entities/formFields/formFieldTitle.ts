import {FormFieldBase} from "./formFieldBase";
import {FormFieldType} from "../../enums/formFieldType";
import {Checkmark} from "../../enums/checkmark";
import {FormFieldCommon} from "./formField";

export type FormFieldTitle = FormFieldBase & {
    type?: typeof FormFieldType.Title;
    value?: Title;
};

type Title = {
    checkmark?: Checkmark;
    fields?: FormFieldCommon[];
};
