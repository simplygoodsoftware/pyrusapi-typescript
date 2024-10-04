import {ResponseBase} from "./responseBase";

export type UploadResponse = ResponseBase & {
    guid: string;
    md5_hash: string;
};
