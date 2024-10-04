import {SourceType} from "../enums/sourceType";
import {ColumnSettings} from "./columnSettings";

export type CatalogInfo = {
    catalog_id: number;
    name: number;
    source_type: SourceType;
    external_id?: string;
    version: number;
    external_version?: number;
    deleted: boolean;
    supervisors?: number[];
    column_settings?: ColumnSettings[];
    links?: CatalogLink[];
};

type CatalogLink = {
    catalog_id: number;
    column_name: string;
};
