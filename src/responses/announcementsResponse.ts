import {ResponseBase} from "./responseBase";
import {AnnouncementWithComments} from "../entities/announcementWithComments";

export type AnnouncementsResponse = ResponseBase & {
    announcements: AnnouncementWithComments[];
};
