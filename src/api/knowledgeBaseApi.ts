import {BaseApi} from "./baseApi";
import {Endpoints} from "../settings/endpoints";
import {KnowledgeBaseEntityResponse} from "../responses/knowledgeBaseEntityResponse";
import {KnowledgeBaseDeleteResponse} from "../responses/knowledgeBaseDeleteResponse";
import {KnowledgeBaseStructureResponse} from "../responses/knowledgeBaseStructureResponse";
import {KnowledgeBasePermissionsResponse} from "../responses/knowledgeBasePermissionsResponse";
import {CreateKnowledgeBaseEntityRequest} from "../requests/createKnowledgeBaseEntityRequest";
import {UpdateKnowledgeBaseEntityRequest} from "../requests/updateKnowledgeBaseEntityRequest";
import {UpdateKnowledgeBasePermissionsRequest} from "../requests/updateKnowledgeBasePermissionsRequest";
import {GetKnowledgeBaseStructureRequest} from "../requests/getKnowledgeBaseStructureRequest";
import {toSearchParams} from "../helpers/functions";

export class KnowledgeBaseApi extends BaseApi {
    protected _moduleSubPath = Endpoints.KnowledgeBase;

    public async get(id: string) {
        return await this.fetchApi<KnowledgeBaseEntityResponse>(
            (await this.getModulePath()) + `/${id}`,
            "GET",
        );
    }

    public async create(request: CreateKnowledgeBaseEntityRequest) {
        return await this.fetchApi<KnowledgeBaseEntityResponse>(
            await this.getModulePath(),
            "POST",
            JSON.stringify(request),
        );
    }

    public async update(id: string, request: UpdateKnowledgeBaseEntityRequest) {
        return await this.fetchApi<KnowledgeBaseEntityResponse>(
            (await this.getModulePath()) + `/${id}`,
            "PUT",
            JSON.stringify(request),
        );
    }

    public async delete(id: string, deleteWithChildren: boolean = false) {
        return await this.fetchApi<KnowledgeBaseDeleteResponse>(
            (await this.getModulePath()) +
                `/${id}?delete_with_children=${deleteWithChildren}`,
            "DELETE",
        );
    }

    public async getStructure(request?: GetKnowledgeBaseStructureRequest) {
        const basePath = (await this.getModulePath()) + Endpoints.Structure;
        const url = request ? basePath + toSearchParams(request) : basePath;
        return await this.fetchApi<KnowledgeBaseStructureResponse>(url, "GET");
    }

    public async getPermissions(id: string) {
        return await this.fetchApi<KnowledgeBasePermissionsResponse>(
            (await this.getModulePath()) + `/${id}` + Endpoints.Permissions,
            "GET",
        );
    }

    public async updatePermissions(
        id: string,
        request: UpdateKnowledgeBasePermissionsRequest,
    ) {
        return await this.fetchApi<KnowledgeBasePermissionsResponse>(
            (await this.getModulePath()) + `/${id}` + Endpoints.Permissions,
            "PUT",
            JSON.stringify(request),
        );
    }
}
