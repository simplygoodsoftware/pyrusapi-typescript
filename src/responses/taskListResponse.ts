import {ResponseBase} from "./responseBase";
import {TaskHeader} from "../entities/taskHeader";

export type TaskListResponse = ResponseBase & {
    tasks: TaskHeader[];
    has_more: boolean;
};
