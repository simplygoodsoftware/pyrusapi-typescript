import {CatalogRequestBase} from "./catalogRequestBase";
import {SourceType} from "../enums/sourceType";

export type CreateCatalogRequest = CatalogRequestBase & {
    name: string;
    source_type?: SourceType;
};
