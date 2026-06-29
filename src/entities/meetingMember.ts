import {MeetingPersonInfo} from "./meetingPersonInfo";
import {MeetingMemberStatus} from "../enums/meetingMemberStatus";

export type MeetingMember = {
    person: MeetingPersonInfo;
    status: MeetingMemberStatus;
};
