import {PlainTaskList} from "./plainTaskList";

export type TaskList = PlainTaskList & {
    children?: TaskList[];
};
