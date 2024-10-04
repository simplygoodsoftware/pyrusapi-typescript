import {BaseApi} from "./baseApi";
import {Endpoints} from "../settings/endpoints";
import {ContactsRequest} from "../requests/contactsRequest";
import {ContactsResponse} from "../responses/contactsResponse";
import {toSearchParams} from "../helpers/functions";

export class ContactsApi extends BaseApi {
    protected _moduleSubPath = Endpoints.Contacts;

    public async getAll(request?: ContactsRequest) {
        const searchParams = request ? toSearchParams(request) : "";
        return await this.fetchApi<ContactsResponse>(
            (await this.getModulePath()) + searchParams,
            "GET",
        );
    }
}
