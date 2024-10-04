import {PersonRights} from "../enums/personRights";

export type UpdateBotRequest = {
    id: number;
    name?: string;
    hook_url?: string;
    is_enabled?: boolean;
    bot_settings?: string;
    description?: string;
    rights?: PersonRights;
    send_only_last_comment?: boolean;
    locale?: string;
    time_zone_offset?: number;
};
