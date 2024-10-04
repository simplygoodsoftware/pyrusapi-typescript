import {FormFieldFile} from "./formFieldFile";
import {NewFile} from "../newFile";

export type FormFieldNewFile = FormFieldFile & {
    value?: NewFile[];
};
