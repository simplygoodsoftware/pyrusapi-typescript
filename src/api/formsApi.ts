import {BaseApi} from "./baseApi";
import {Endpoints} from "../settings/endpoints";
import {ById} from "../helpers/types";
import {FormResponse} from "../responses/formResponse";
import {FormsResponse} from "../responses/formsResponse";
import {FormRegisterRequest} from "../requests/formRegisterRequest";
import {FormRegisterResponse} from "../responses/formRegisterResponse";
import {processFilters, toJson} from "../helpers/functions";
import {PermissionsResponse} from "../responses/permissionsResponse";
import {ChangePermissionsRequest} from "../requests/changePermissionsRequest";

export class FormsApi extends BaseApi {
    protected _moduleSubPath = Endpoints.Forms;

    public async get({id}: ById) {
        return await this.fetchApi<FormResponse>(
            (await this.getModulePath()) + `/${id}`,
            "GET",
        );
    }

    public async getAll() {
        return await this.fetchApi<FormsResponse>(
            await this.getModulePath(),
            "GET",
        );
    }

    public async getTasks(id: number, request: FormRegisterRequest) {
        const processedRequest = {
            ...request,
            ...processFilters(request && request.filters),
        };
        if (processedRequest.filters) delete processedRequest.filters;

        return await this.fetchApi<
            typeof request.format extends string ? FormRegisterResponse : Blob
        >(
            (await this.getModulePath()) + `/${id}` + Endpoints.FormsRegister,
            "POST",
            toJson(processedRequest),
        );
    }

    public async getPermissions({id}: ById) {
        return await this.fetchApi<PermissionsResponse>(
            (await this.getModulePath()) +
                `/${id}` +
                Endpoints.FormsPermissions,
            "GET",
        );
    }

    public async setPermissions(id: number, request: ChangePermissionsRequest) {
        return await this.fetchApi<PermissionsResponse>(
            (await this.getModulePath()) +
                `/${id}` +
                Endpoints.FormsPermissions,
            "POST",
            JSON.stringify(request),
        );
    }
}
