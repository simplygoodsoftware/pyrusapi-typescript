import {FormMapping} from "../entities/formMapping";

export type GetMessageRequest = {
    account_id: string;
    channel_id: string;
    sender_name?: string;
    message_type?: string;
    message_text: string;
    mappings?: FormMapping[];
    attachments?: string[];
};
