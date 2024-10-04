import {Person} from "./person";
import {AttachedFile} from "./attachedFile";
import {TaskComment} from "./taskComment";

export type AnnouncementComment = {
    id: number;
    text?: string;
    formatted_text?: string;
    create_date: Date;
    author: Person;
    attachments?: AttachedFile[];
    comments?: TaskComment[];
};
