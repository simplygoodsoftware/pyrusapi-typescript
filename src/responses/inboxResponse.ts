import {TaskGroup} from "../entities/taskGroup";
import {TaskListResponse} from "./taskListResponse";

export type InboxResponse = TaskListResponse & {
    task_groups: TaskGroup[];
};
