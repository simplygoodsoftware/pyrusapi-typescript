import {BaseApi} from "./baseApi";
import {Endpoints} from "../settings/endpoints";
import {ListsResponse} from "../responses/listsResponse";
import {toSearchParams} from "../helpers/functions";
import {TaskListRequest} from "../requests/taskListRequest";
import {TaskListResponse} from "../responses/taskListResponse";
import {InboxRequest} from "../requests/inboxRequest";
import {ById} from "../helpers/types";
import {CreateListRequest} from "../requests/createListRequest";
import {PlainListResponse} from "../responses/plainListResponse";
import {UpdateListRequest} from "../requests/updateListRequest";

export class ListsApi extends BaseApi {
    protected _moduleSubPath = Endpoints.Lists;

    public async getAll() {
        return await this.fetchApi<ListsResponse>(
            await this.getModulePath(),
            "GET",
        );
    }

    public async getTasksInList(listId: number, request?: TaskListRequest) {
        const searchParams = request ? toSearchParams(request) : "";

        return await this.fetchApi<TaskListResponse>(
            (await this.getModulePath()) +
                `/${listId}` +
                Endpoints.ListTasks +
                searchParams,
            "GET",
        );
    }

    public async getInbox(request?: InboxRequest) {
        await this.loginDone();

        const searchParams = request ? toSearchParams(request) : "";

        return await this.fetchApi<TaskListResponse>(
            this._settings.apiUrl + Endpoints.Inbox + searchParams,
            "GET",
        );
    }

    public async create(request: CreateListRequest) {
        return await this.fetchApi<PlainListResponse>(
            await this.getModulePath(),
            "PUT",
            JSON.stringify(request),
        );
    }

    public async delete(request: ById) {
        return await this.fetchApi<void>(
            (await this.getModulePath()) + `/${request.id}`,
            "DELETE",
            JSON.stringify(request),
        );
    }

    public async update(request: UpdateListRequest) {
        return await this.fetchApi<PlainListResponse>(
            (await this.getModulePath()) + `/${request.id}`,
            "POST",
            JSON.stringify(request),
        );
    }
}
