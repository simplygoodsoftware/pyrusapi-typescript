import {ResponseBase} from "./responseBase";
import {TaskWithComments} from "../entities/TaskWithComments";

export type CalendarResponse = ResponseBase & {
    tasks: TaskWithComments[];
    has_more: boolean;
};
