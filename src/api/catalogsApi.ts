import {BaseApi} from "./baseApi";
import {Endpoints} from "../settings/endpoints";
import {ById} from "../helpers/types";
import {CatalogsResponse} from "../responses/catalogsResponse";
import {CatalogResponse} from "../responses/catalogResponse";
import {CreateCatalogRequest} from "../requests/createCatalogRequest";
import {
    SyncCatalogRequest,
    SyncCatalogRequestApi,
} from "../requests/syncCatalogRequest";
import {SyncCatalogResponse} from "../responses/syncCatalogResponse";
import {prepareHeadersForCatalogApiRequest} from "../helpers/functions";

export class CatalogsApi extends BaseApi {
    protected _moduleSubPath = Endpoints.Catalogs;

    public async getAll() {
        return await this.fetchApi<CatalogsResponse>(
            await this.getModulePath(),
            "GET",
        );
    }

    public async get({id}: ById) {
        return await this.fetchApi<CatalogResponse>(
            (await this.getModulePath()) + `/${id}`,
            "GET",
        );
    }

    public async create(request: CreateCatalogRequest) {
        return await this.fetchApi<CatalogResponse>(
            await this.getModulePath(),
            "PUT",
            JSON.stringify(request),
        );
    }

    /**
     *  This method updates catalog headers and items.
     *  You must define all the values and text columns that need to remain in the catalog.
     *
     *  All unspecified items and text columns will be deleted
     * @param request
     */
    public async sync(request: SyncCatalogRequest) {
        const apiRequest: SyncCatalogRequestApi = {
            ...request,
            catalog_headers: prepareHeadersForCatalogApiRequest(
                request.catalog_headers,
            ),
        };

        return await this.fetchApi<SyncCatalogResponse>(
            (await this.getModulePath()) + `/${request.id}`,
            "POST",
            JSON.stringify(apiRequest),
        );
    }
}
