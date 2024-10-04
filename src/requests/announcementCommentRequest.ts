import {NewFile} from "../entities/newFile";

export type AnnouncementCommentRequest = {
    text?: string;
    formatted_text?: string;
    attachments?: NewFile[];
};
