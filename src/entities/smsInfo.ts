import {SendSmsError} from "../enums/sendSmsError";
import {SendSmsStatus} from "../enums/sendSmsStatus";

export type SmsInfo = {
    error_code?: SendSmsError;
    status: SendSmsStatus;
    error_message?: string;
    sent_comment_id: number;
};
