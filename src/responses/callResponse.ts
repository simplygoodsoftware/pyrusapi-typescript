import {ResponseBase} from "./responseBase";

export type CallResponse = ResponseBase & {
    task_id: number;
};
