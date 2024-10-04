import {BaseApi} from "./baseApi";
import {Endpoints} from "../settings/endpoints";
import {CallRequest} from "../requests/callRequest";
import {CallResponse} from "../responses/callResponse";
import {AttachCallRecordRequest} from "../requests/attachCallRecordRequest";
import {ResponseBase} from "../responses/responseBase";

export class CallApi extends BaseApi {
    protected _moduleSubPath = Endpoints.Integrations;

    public async registerCall(request: CallRequest) {
        return await this.fetchApi<CallResponse>(
            (await this.getModulePath()) + Endpoints.Call,
            "POST",
            JSON.stringify(request),
        );
    }

    public async attachCallRecord(request: AttachCallRecordRequest) {
        return await this.fetchApi<ResponseBase>(
            (await this.getModulePath()) + Endpoints.AttachCallRecord,
            "POST",
            JSON.stringify(request),
        );
    }
}
