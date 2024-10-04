import {ResponseBase} from "./responseBase";
import {AnnouncementWithComments} from "../entities/announcementWithComments";

export type AnnouncementResponse = ResponseBase & {
    announcement: AnnouncementWithComments;
};
