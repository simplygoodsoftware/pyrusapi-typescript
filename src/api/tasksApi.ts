import {BaseApi} from "./baseApi";
import {Endpoints} from "../settings/endpoints";
import {ById} from "../helpers/types";
import {TaskResponse} from "../responses/taskResponse";
import {TaskRequest} from "../requests/taskRequest";
import {toJson} from "../helpers/functions";
import {TaskCommentRequest} from "../requests/taskCommentRequest";

export class TasksApi extends BaseApi {
    protected _moduleSubPath = Endpoints.Tasks;

    public async get({id}: ById) {
        return await this.fetchApi<TaskResponse>(
            (await this.getModulePath()) + `/${id}`,
            "GET",
        );
    }

    /**
     *
     * @param request
     * If "form_id" specified it will be Form task,
     * else - Simple task.
     */
    public async create(request: TaskRequest) {
        return await this.fetchApi<TaskResponse>(
            await this.getModulePath(),
            "POST",
            toJson(request),
        );
    }

    public async addComment(id: number, request: TaskCommentRequest) {
        return await this.fetchApi<TaskResponse>(
            (await this.getModulePath()) + `/${id}` + Endpoints.TasksComments,
            "POST",
            toJson(request),
        );
    }
}
