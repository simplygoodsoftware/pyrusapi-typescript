import {Task} from "./task";
import {TaskComment} from "./taskComment";
import {Step} from "./step";

export type TaskWithComments = Task & {
    comments: TaskComment[];
    steps?: Step[];
};
