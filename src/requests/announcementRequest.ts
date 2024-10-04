import {NewFile} from "../entities/newFile";

export type AnnouncementRequest = {
    text: string;
    formatted_text?: string;
    attachments?: NewFile[];
};
