import {Settings} from "../entities/settings";
import {AuthResponse} from "../responses/authResponse";
import {ErrorResponse} from "../responses/errorResponse";
import {HTTPMethod} from "../helpers/types";
import {fromJson, trimTrailingSlash} from "../helpers/functions";
import {ApiError} from "../helpers/errors";

export interface BaseApiParams {
    token?: string;
    settings?: Settings;
    authRequest?: Promise<AuthResponse>;
}

export abstract class BaseApi {
    protected _token: string;
    protected _settings: Settings;
    protected _authRequest: Promise<AuthResponse> = null;
    protected _moduleSubPath: string = "";

    protected constructor({token, authRequest, settings}: BaseApiParams) {
        if (token) this._token = token;
        if (authRequest) this._authRequest = authRequest;
        if (settings) {
            this._settings = settings;
        }
    }

    protected async loginDone() {
        if (!this._authRequest) {
            return;
        }

        const {access_token, api_url, files_url} = await this._authRequest;
        this._token = access_token;
        if (api_url && files_url) {
            this._settings.apiUrl = trimTrailingSlash(api_url);
            this._settings.filesUrl = trimTrailingSlash(files_url);
        } else {
            this._settings.apiUrl =
                this._settings.apiUrl ?? this._settings.authUrl;
            if (!this._settings.filesUrl) {
                const authUrl = new URL(this._settings.authUrl);
                this._settings.filesUrl = authUrl.origin;
            }
        }
        this._authRequest = null;
    }

    protected async fetchApi<T>(
        url: string,
        method: HTTPMethod,
        body?: BodyInit,
        headersOverride?: HeadersInit,
    ) {
        await this.loginDone();

        const resp = await fetch(url, {
            method: method,
            headers: headersOverride || (await this.defaultHeaders()),
            body: body,
        });

        return (await this._checkResponse(resp)) as T;
    }

    protected async _checkResponse(resp: Response) {
        if (resp.ok) {
            const contentType = resp.headers.get("Content-Type");
            if (contentType && contentType.includes("application/json")) {
                return fromJson(await resp.text());
            }
            return await resp.blob();
        } else {
            const error = (await resp.json()) as ErrorResponse;
            throw new ApiError({code: resp.status, error});
        }
    }

    protected async getModulePath() {
        await this.loginDone();
        return this._settings.apiUrl + this._moduleSubPath;
    }

    protected async authorisationHeader(): Promise<Record<string, string>> {
        await this.loginDone();

        return {
            Authorization: `Bearer ${this._token}`,
        };
    }

    private async defaultHeaders(): Promise<Record<string, string>> {
        return {
            ...(await this.authorisationHeader()),
            "Content-Type": "application/json",
        };
    }
}
