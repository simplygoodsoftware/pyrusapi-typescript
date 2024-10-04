import {TaskCommentRequest} from "../requests/taskCommentRequest";

export type CommentDescription = {
    task_id: number;
    previous_note_id: number;
    comment: TaskCommentRequest;
};
