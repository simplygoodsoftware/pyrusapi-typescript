import {FormFieldBase} from "./formFieldBase";
import {FormFieldType} from "../../enums/formFieldType";
import {AttachedFile} from "../attachedFile";

export type FormFieldFile = FormFieldBase & {
    type?: FormFieldType.File;
    value?: AttachedFile[];
};
