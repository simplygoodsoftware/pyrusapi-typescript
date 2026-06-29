import {BaseApi} from "./baseApi";
import {Endpoints} from "../settings/endpoints";
import {toJson} from "../helpers/functions";
import {CreateMeetingRequest} from "../requests/createMeetingRequest";
import {UpdateMeetingRequest} from "../requests/updateMeetingRequest";
import {UpdateMeetingTasksRequest} from "../requests/updateMeetingTasksRequest";
import {UpdateMeetingMyStatusRequest} from "../requests/updateMeetingMyStatusRequest";
import {MeetingResponse} from "../responses/meetingResponse";
import {MeetingRoomsResponse} from "../responses/meetingRoomsResponse";
import {DeleteMeetingResponse} from "../responses/deleteMeetingResponse";

export class MeetingsApi extends BaseApi {
    protected _moduleSubPath = Endpoints.Meetings;

    public async create(request: CreateMeetingRequest) {
        return await this.fetchApi<MeetingResponse>(
            await this.getModulePath(),
            "POST",
            toJson(request),
        );
    }

    public async get(id: number) {
        return await this.fetchApi<MeetingResponse>(
            (await this.getModulePath()) + `/${id}`,
            "GET",
        );
    }

    public async update(id: number, request: UpdateMeetingRequest) {
        return await this.fetchApi<MeetingResponse>(
            (await this.getModulePath()) + `/${id}`,
            "PUT",
            toJson(request),
        );
    }

    public async updateTasks(id: number, request: UpdateMeetingTasksRequest) {
        return await this.fetchApi<MeetingResponse>(
            (await this.getModulePath()) + `/${id}` + Endpoints.Tasks,
            "POST",
            toJson(request),
        );
    }

    public async updateMyStatus(
        id: number,
        request: UpdateMeetingMyStatusRequest,
    ) {
        return await this.fetchApi<MeetingResponse>(
            (await this.getModulePath()) + `/${id}` + Endpoints.MyStatus,
            "PUT",
            toJson(request),
        );
    }

    public async delete(id: number) {
        return await this.fetchApi<DeleteMeetingResponse>(
            (await this.getModulePath()) + `/${id}`,
            "DELETE",
        );
    }

    public async getMeetingRooms() {
        return await this.fetchApi<MeetingRoomsResponse>(
            (await this.getModulePath()) + Endpoints.MeetingRooms,
            "GET",
        );
    }
}
