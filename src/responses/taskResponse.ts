import {ResponseBase} from "./responseBase";
import {TaskWithComments} from "../entities/TaskWithComments";

export type TaskResponse = ResponseBase & {
    task: TaskWithComments;
};
