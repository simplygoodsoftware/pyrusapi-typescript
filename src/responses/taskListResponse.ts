import {TaskHeader} from "../entities/taskHeader";

export type TaskListResponse = {
    tasks: TaskHeader[];
    has_more: boolean;
};
