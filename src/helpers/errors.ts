import {ErrorResponse} from "../responses/errorResponse";
import {ErrorCodeType} from "../enums/errorCodeType";

export class ApiError extends Error {
    name = "ApiError";
    public readonly errorCode: ErrorCodeType;

    constructor({code, error}: {code: number; error: ErrorResponse}) {
        const message = `${code} (${error.error_code}) - ${error.error}`;
        super(message);
        this.errorCode = error.error_code;
    }
}
