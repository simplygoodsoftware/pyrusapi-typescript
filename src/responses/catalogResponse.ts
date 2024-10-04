import {ResponseBase} from "./responseBase";
import {CatalogHeader} from "../entities/catalogHeader";
import {ColumnSettings} from "../entities/columnSettings";
import {SourceType} from "../enums/sourceType";
import {CatalogItemResponse} from "./catalogItemResponse";

export type CatalogResponse = ResponseBase & {
    catalog_id: number;
    name: string;
    external_id?: string;
    version: number;
    external_version?: number;
    deleted: boolean;
    supervisors?: number[];
    catalog_headers: CatalogHeader[];
    column_settings?: ColumnSettings[];
    items?: CatalogItemResponse[];
    source_type: SourceType;
};
