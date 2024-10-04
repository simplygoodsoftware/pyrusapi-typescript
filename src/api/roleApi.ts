import {BaseApi} from "./baseApi";
import {CreateRoleRequest} from "../requests/createRoleRequest";
import {Endpoints} from "../settings/endpoints";
import {ById} from "../helpers/types";
import {RoleResponse} from "../responses/roleResponse";
import {RolesResponse} from "../responses/rolesResponse";
import {UpdateRoleRequest} from "../requests/updateRoleRequest";
import {GetAllRequest} from "../requests/getAllRequest";
import {toSearchParams} from "../helpers/functions";

export class RoleApi extends BaseApi {
    protected _moduleSubPath = Endpoints.Roles;

    public async create(request: CreateRoleRequest) {
        return await this.fetchApi<RoleResponse>(
            await this.getModulePath(),
            "POST",
            JSON.stringify(request),
        );
    }

    public async get({id}: ById) {
        return await this.fetchApi<RoleResponse>(
            (await this.getModulePath()) + `/${id}`,
            "GET",
        );
    }

    public async getAll(request?: GetAllRequest) {
        const searchParams = request ? toSearchParams(request) : "";

        return await this.fetchApi<RolesResponse>(
            (await this.getModulePath()) + searchParams,
            "GET",
        );
    }

    public async update(request: UpdateRoleRequest) {
        return await this.fetchApi<RoleResponse>(
            (await this.getModulePath()) + `/${request.id}`,
            "PUT",
            JSON.stringify(request),
        );
    }
}
