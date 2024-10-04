import {BaseApi} from "./baseApi";
import {Endpoints} from "../settings/endpoints";
import {CalendarTasksRequest} from "../requests/calendarTasksRequest";
import {toSearchParams} from "../helpers/functions";
import {CalendarResponse} from "../responses/calendarResponse";

export class CalendarApi extends BaseApi {
    protected _moduleSubPath = Endpoints.Calendar;

    public async getTasks(request: CalendarTasksRequest) {
        return await this.fetchApi<CalendarResponse>(
            (await this.getModulePath()) + toSearchParams(request),
            "GET",
        );
    }
}
