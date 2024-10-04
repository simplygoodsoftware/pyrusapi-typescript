import {ResponseBase} from "./responseBase";

export type AuthResponse = ResponseBase & {
    access_token: string;
    api_url?: string;
    files_url?: string;
};
