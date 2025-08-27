import {TaskHeader} from "./taskHeader";

export type TaskGroup = {
    id: number;
    name: string;
    has_more: boolean;
    tasks: TaskHeader[];
};
