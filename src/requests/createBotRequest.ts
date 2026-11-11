export type CreateBotRequest = {
    name: string;
    hook_url?: string;
    add_supervisors?: number[];
    external_id?: string;
};
