export type UpdateCatalogRequest = {
    id: number;
    upsert?: {values: string[]}[];
    delete?: string[];
};
