import {BaseApi} from "./baseApi";
import {toSearchParams} from "../helpers/functions";
import {Endpoints} from "../settings/endpoints";

type LogsParameters = {
    after?: number;
    count?: number;
};

export class LogsApi extends BaseApi {
    public async getEvents(request?: LogsParameters) {
        await this.loginDone();
        const searchParams = request ? toSearchParams(request) : "";

        return await this.fetchApi<Blob>(
            this._settings.apiUrl + Endpoints.EventHistory + searchParams,
            "GET",
        );
    }

    public async getFileAccess(request?: LogsParameters) {
        await this.loginDone();
        const searchParams = request ? toSearchParams(request) : "";

        return await this.fetchApi<Blob>(
            this._settings.apiUrl + Endpoints.FileAccessHistory + searchParams,
            "GET",
        );
    }

    public async getTaskAccess(request?: LogsParameters) {
        await this.loginDone();
        const searchParams = request ? toSearchParams(request) : "";

        return await this.fetchApi<Blob>(
            this._settings.apiUrl + Endpoints.TaskAccessHistory + searchParams,
            "GET",
        );
    }

    public async getTaskExport(request?: LogsParameters) {
        await this.loginDone();
        const searchParams = request ? toSearchParams(request) : "";

        return await this.fetchApi<Blob>(
            this._settings.apiUrl + Endpoints.TaskExportHistory + searchParams,
            "GET",
        );
    }

    public async getRegistryDownload(request?: LogsParameters) {
        await this.loginDone();
        const searchParams = request ? toSearchParams(request) : "";

        return await this.fetchApi<Blob>(
            this._settings.apiUrl +
                Endpoints.RegistryDownloadHistory +
                searchParams,
            "GET",
        );
    }
}
