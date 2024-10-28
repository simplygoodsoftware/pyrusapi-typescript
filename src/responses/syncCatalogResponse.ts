import {CatalogHeader} from "../entities/catalogHeader";
import {CatalogItemResponse} from "./catalogItemResponse";

export type SyncCatalogResponse = {
    apply: boolean;
    added?: CatalogItemResponse[];
    deleted?: CatalogItemResponse[];
    updated?: CatalogItemResponse[];
    catalog_headers: CatalogHeader[];
};
