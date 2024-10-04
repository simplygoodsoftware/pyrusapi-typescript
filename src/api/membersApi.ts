import {BaseApi} from "./baseApi";
import {Endpoints} from "../settings/endpoints";
import {ById} from "../helpers/types";
import {MembersResponse} from "../responses/membersResponse";
import {MemberResponse} from "../responses/memberResponse";
import {CreateMemberRequest} from "../requests/createMemberRequest";
import {UpdateMemberRequest} from "../requests/updateMemberRequest";
import {toSearchParams} from "../helpers/functions";
import {GetAllRequest} from "../requests/getAllRequest";

export class MembersApi extends BaseApi {
    protected _moduleSubPath = Endpoints.Members;

    /**
     *
     * @param request
     * "email" and one of "first_name" or "last_name" are required
     */
    public async create(request: CreateMemberRequest) {
        return await this.fetchApi<MemberResponse>(
            await this.getModulePath(),
            "POST",
            JSON.stringify(request),
        );
    }

    public async get({id}: ById) {
        return await this.fetchApi<MemberResponse>(
            (await this.getModulePath()) + `/${id}`,
            "GET",
        );
    }

    public async getAll(request?: GetAllRequest) {
        const searchParams = request ? toSearchParams(request) : "";

        return await this.fetchApi<MembersResponse>(
            (await this.getModulePath()) + searchParams,
            "GET",
        );
    }

    public async update(request: UpdateMemberRequest) {
        return await this.fetchApi<MemberResponse>(
            (await this.getModulePath()) + `/${request.id}`,
            "PUT",
            JSON.stringify(request),
        );
    }

    public async delete({id}: ById) {
        return await this.fetchApi<MemberResponse>(
            (await this.getModulePath()) + `/${id}`,
            "DELETE",
        );
    }
}
