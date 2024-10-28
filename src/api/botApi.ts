import {BaseApi} from "./baseApi";
import {Endpoints} from "../settings/endpoints";
import {CreateBotRequest} from "../requests/createBotRequest";
import {BotResponse} from "../responses/botResponse";
import {BotsResponse} from "../responses/botsResponse";
import {UpdateBotRequest} from "../requests/updateBotRequest";
import {DeleteBotRequest} from "../requests/deleteBotRequest";
import {toSearchParams} from "../helpers/functions";
import {GetAllRequest} from "../requests/getAllRequest";

export class BotApi extends BaseApi {
    protected _moduleSubPath = Endpoints.Bots;

    public async create(request: CreateBotRequest) {
        return await this.fetchApi<BotResponse>(
            await this.getModulePath(),
            "POST",
            JSON.stringify(request),
        );
    }

    public async getAll(request?: GetAllRequest) {
        const searchParams = request ? toSearchParams(request) : "";

        return await this.fetchApi<BotsResponse>(
            (await this.getModulePath()) + searchParams,
            "GET",
        );
    }

    public async update(request: UpdateBotRequest) {
        return await this.fetchApi<BotResponse>(
            (await this.getModulePath()) + `/${request.id}`,
            "PUT",
            JSON.stringify(request),
        );
    }

    public async delete(request: DeleteBotRequest) {
        return await this.fetchApi<BotResponse>(
            (await this.getModulePath()) + `/${request.id}`,
            "DELETE",
            JSON.stringify(request),
        );
    }
}
