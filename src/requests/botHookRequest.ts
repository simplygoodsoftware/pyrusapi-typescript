import {TaskResponse} from "../responses/taskResponse";

export type BotHookRequest = TaskResponse & {
    event: "comment" | "close";
    access_token: string;
    user_id: number;
    bot_settings: string;
    task_id: number;
};
