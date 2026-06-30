import {Settings} from "../entities/settings";
import {trimTrailingSlash} from "../helpers/functions";

export const defaults: Settings = {
    authUrl: "https://accounts.pyrus.com/api/v4",
    apiUrl: "https://api.pyrus.com/v4",
    filesUrl: "https://files.pyrus.com",
};

// Overrides the default URLs used by clients created without explicit settings.
// Only the provided fields are applied; empty/undefined values are ignored.
export function setDefaults(settings: Partial<Settings>): void {
    if (settings.authUrl)
        defaults.authUrl = trimTrailingSlash(settings.authUrl);
    if (settings.apiUrl) defaults.apiUrl = trimTrailingSlash(settings.apiUrl);
    if (settings.filesUrl)
        defaults.filesUrl = trimTrailingSlash(settings.filesUrl);
}
