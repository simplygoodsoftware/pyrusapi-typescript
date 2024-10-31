import {ErrorCodeType} from "../enums/errorCodeType";

export type ErrorResponse = {
    error: string;
    error_code: ErrorCodeType;
    error_message?: string;
};
