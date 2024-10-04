import {BaseApi} from "./baseApi";
import {Endpoints} from "../settings/endpoints";
import {AnnouncementsResponse} from "../responses/announcementsResponse";
import {ById} from "../helpers/types";
import {AnnouncementResponse} from "../responses/announcementResponse";
import {AnnouncementRequest} from "../requests/announcementRequest";
import {AnnouncementCommentRequest} from "../requests/announcementCommentRequest";

export class AnnouncementsApi extends BaseApi {
    protected _moduleSubPath = Endpoints.Announcements;

    public async getAll() {
        return await this.fetchApi<AnnouncementsResponse>(
            await this.getModulePath(),
            "GET",
        );
    }

    public async get({id}: ById) {
        return await this.fetchApi<AnnouncementResponse>(
            (await this.getModulePath()) + `/${id}`,
            "GET",
        );
    }

    public async create(request: AnnouncementRequest) {
        return await this.fetchApi<AnnouncementResponse>(
            await this.getModulePath(),
            "POST",
            JSON.stringify(request),
        );
    }

    public async addComment(id: number, request: AnnouncementCommentRequest) {
        return await this.fetchApi<AnnouncementResponse>(
            (await this.getModulePath()) +
                `/${id}` +
                Endpoints.AnnouncementComments,
            "POST",
            JSON.stringify(request),
        );
    }
}
