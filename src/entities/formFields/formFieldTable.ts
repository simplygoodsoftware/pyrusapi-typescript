import {FormFieldBase} from "./formFieldBase";
import {FormFieldType} from "../../enums/formFieldType";
import {FormField} from "./formField";

export type FormFieldTable = FormFieldBase & {
    type?: typeof FormFieldType.Table;
    value?: TableRow[];
};

type TableRow = {
    row_id: number;
    cells?: FormField[];
    delete?: boolean;
    deleted?: boolean;
};
