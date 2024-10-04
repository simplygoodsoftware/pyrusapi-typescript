import {CatalogRequestBase} from "./catalogRequestBase";

export type SyncCatalogRequest = CatalogRequestBase & {
    id: number;
    apply: boolean;
    force_update_first_column?: boolean;
};
