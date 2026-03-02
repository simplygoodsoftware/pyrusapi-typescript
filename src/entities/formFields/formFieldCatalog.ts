import {FormFieldBase} from "./formFieldBase";
import {FormFieldType} from "../../enums/formFieldType";

export type FormFieldCatalog = FormFieldBase & {
    type?: typeof FormFieldType.Catalog;
    value?: CatalogValue;
};

type CatalogValue = {
    item_id?: number;
    item_ids?: number[];
    item_names?: string[];
    headers?: string[];
    values?: string[];
    rows?: string[][];
};
