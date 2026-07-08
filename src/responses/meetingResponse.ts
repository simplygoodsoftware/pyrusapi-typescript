import {MeetingType} from "../enums/meetingType";
import {MeetingPersonInfo} from "../entities/meetingPersonInfo";
import {MeetingMember} from "../entities/meetingMember";
import {MeetingRoom} from "../entities/meetingRoom";
import {MeetingJoinParameters} from "../entities/meetingJoinParameters";

export type MeetingResponse = {
    id: number;
    type: MeetingType;
    start_time: Date;
    duration_minutes: number;
    title?: string;
    note?: string;
    creator: MeetingPersonInfo;
    task_ids: number[];
    members: MeetingMember[];
    meeting_rooms: MeetingRoom[];
    join_parameters?: MeetingJoinParameters;
    shared_calendar_event_id: string;
    should_be_shared_to_external_person: boolean;
};
