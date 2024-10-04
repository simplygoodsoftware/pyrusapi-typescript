import {ResponseBase} from "./responseBase";
import {CatalogHeader} from "../entities/catalogHeader";
import {CatalogItemResponse} from "./catalogItemResponse";

export type SyncCatalogResponse = ResponseBase & {
    apply: boolean;
    added?: CatalogItemResponse[];
    deleted?: CatalogItemResponse[];
    updated?: CatalogItemResponse[];
    catalog_headers: CatalogHeader[];
};
