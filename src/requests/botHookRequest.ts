import {TaskResponse} from "../responses/taskResponse";

export type BotHookRequest = {
    event: "Comment" | "Close";
    access_token: string;
    user_id: number;
    bot_settings: string;
    task_id: number;

    task: TaskResponse;
};
