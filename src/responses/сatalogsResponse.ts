import {ResponseBase} from "./responseBase";
import {CatalogInfo} from "../entities/catalogInfo";

export type CatalogsResponse = ResponseBase & {
    catalogs: CatalogInfo[];
};
