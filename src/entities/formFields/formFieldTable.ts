import {FormFieldBase} from "./formFieldBase";
import {FormFieldType} from "../../enums/formFieldType";
import {FormFieldCommon} from "./formField";

export type FormFieldTable = FormFieldBase & {
    type?: typeof FormFieldType.Table;
    value?: TableRow[];
};

type TableRow = {
    row_id: number;
    cells?: FormFieldCommon[];
    delete?: boolean;
    deleted?: boolean;
    position?: number;
};
