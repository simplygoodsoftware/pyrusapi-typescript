import {CatalogItem} from "../entities/catalogItem";
import {ColumnSettings} from "../entities/columnSettings";

export type CatalogRequestBase = {
    id?: number;
    external_id?: string;
    name?: string;
    external_version?: number;
    catalog_headers: string[];
    items?: CatalogItem[];
    add_supervisors?: number[];
    remove_supervisors?: number[];
    add_workflow_headers?: string[];
    delete_workflow_headers?: string[];
    column_settings?: ColumnSettings[];
};
