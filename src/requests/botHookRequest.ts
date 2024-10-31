import {TaskResponse} from "../responses/taskResponse";

export type BotHookRequest = TaskResponse & {
    event: "Comment" | "Close";
    access_token: string;
    user_id: number;
    bot_settings: string;
    task_id: number;
};
