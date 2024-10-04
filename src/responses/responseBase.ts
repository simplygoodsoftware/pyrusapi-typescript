import {ErrorCodeType} from "../enums/errorCodeType";

export type ResponseBase = {
    error?: string;
    error_code?: ErrorCodeType;
    error_message?: string;
};
