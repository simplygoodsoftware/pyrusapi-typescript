export type CatalogItem = {
    item_id?: number;
    external_id?: number;
    values: string[];
    deleted?: boolean;
    links?: CatalogItemLink[];
};

type CatalogItemLink = {
    item_id: number;
    catalog_id: number;
};
