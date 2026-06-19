import {Settings} from "../entities/settings";

const isNode: boolean =
    typeof process !== "undefined" &&
    process.versions != null &&
    process.versions.node != null;
const env = isNode ? process.env : {};
const authUrlFromEnvironment = env["PYRUS_API_AUTH_URL"];
const apiUrlFromEnvironment = env["PYRUS_API_URL"];
const filesUrlFromEnvironment = env["PYRUS_API_FILES_URL"];

export const defaults: Settings = {
    authUrl: !!authUrlFromEnvironment
        ? authUrlFromEnvironment
        : "https://accounts.pyrus.com/api/v4",
    apiUrl: !!apiUrlFromEnvironment
        ? apiUrlFromEnvironment
        : "https://api.pyrus.com/v4",
    filesUrl: !!filesUrlFromEnvironment
        ? filesUrlFromEnvironment
        : "https://files.pyrus.com",
};
