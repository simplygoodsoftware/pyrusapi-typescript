import {BaseApi} from "./baseApi";
import {Endpoints} from "../settings/endpoints";
import {ProfileResponse} from "../responses/profileResponse";
import {ProfileRequest} from "../requests/profileRequest";
import {toSearchParams} from "../helpers/functions";

export class ProfileApi extends BaseApi {
    protected _moduleSubPath = Endpoints.Profile;

    public async get(request?: ProfileRequest) {
        const searchParams = request ? toSearchParams(request) : "";

        return await this.fetchApi<ProfileResponse>(
            (await this.getModulePath()) + searchParams,
            "GET",
        );
    }
}
