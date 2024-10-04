import {CatalogItem} from "../entities/catalogItem";

export type CatalogItemResponse = CatalogItem & {
    item_id: number;
};
