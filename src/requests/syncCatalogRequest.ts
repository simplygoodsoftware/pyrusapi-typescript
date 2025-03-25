import {CatalogRequestBase} from "./catalogRequestBase";
import {CatalogHeader} from "../entities/catalogHeader";

export type SyncCatalogRequestApi = CatalogRequestBase & {
    id: number;
    apply: boolean;
    force_update_first_column?: boolean;
};

export type SyncCatalogRequest = Omit<
    SyncCatalogRequestApi,
    "catalog_headers"
> & {
    catalog_headers: string[] | CatalogHeader[];
};
