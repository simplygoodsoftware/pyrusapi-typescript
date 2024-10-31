import {TaskWithComments} from "../entities/TaskWithComments";

export type CalendarResponse = {
    tasks: TaskWithComments[];
    has_more: boolean;
};
