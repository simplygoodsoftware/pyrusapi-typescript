export type Bot = {
    id: number;
    name: string;
    external_id?: string;
    is_enabled: boolean;
    fired?: boolean;
    hook_url: string;
    description: string;
    bot_settings: string;
    version: string;
    login: string;
    send_only_last_comment: boolean;
    locale?: string;
    time_zone_offset?: number;
};
