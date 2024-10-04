import {ResponseBase} from "./responseBase";
import {TaskList} from "../entities/taskList";

export type ListsResponse = ResponseBase & {
    lists: TaskList[];
};
