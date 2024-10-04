import {BaseApi} from "./baseApi";
import {Endpoints} from "../settings/endpoints";
import {UploadResponse} from "../responses/uploadResponse";
import {ById} from "../helpers/types";

export class FilesApi extends BaseApi {
    public async upload(file: Blob, filename: string) {
        const formData = new FormData();
        formData.append(filename, file, filename);

        return await this.fetchApi<UploadResponse>(
            (await this._filePath()) + Endpoints.Upload,
            "POST",
            formData,
            await this.authorisationHeader(),
        );
    }

    public async download({id}: ById) {
        return await this.fetchApi<Blob>(
            (await this._filePath()) + Endpoints.Download + `/${id}`,
            "GET",
        );
    }

    private async _filePath() {
        await this.loginDone();

        if (this._settings.filesUrl)
            return this._settings.filesUrl + Endpoints.V4 + Endpoints.Files;
        return this._settings.apiUrl + Endpoints.Files;
    }
}
