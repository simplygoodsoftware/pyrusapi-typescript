import {ResponseBase} from "./responseBase";
import {Task} from "../entities/task";

export type FormRegisterResponse = ResponseBase & {
    tasks: Task[];
};
