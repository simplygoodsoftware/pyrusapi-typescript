export type CatalogHeader = {
    name: string;
    type: CatalogHeaderType;
};

enum CatalogHeaderType {
    Text = "text",
    Workflow = "workflow",
}
