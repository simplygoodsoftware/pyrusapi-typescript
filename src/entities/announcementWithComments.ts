import {Person} from "./person";
import {AttachedFile} from "./attachedFile";
import {AnnouncementComment} from "./announcementComment";

export type AnnouncementWithComments = {
    id: number;
    text: string;
    formatted_text: string;
    create_date: Date;
    last_modified_date: Date;
    author: Person;
    attachments?: AttachedFile[];
    comments?: AnnouncementComment[];
};
