import {MeetingActionType} from "../enums/meetingActionType";
import {MeetingType} from "../enums/meetingType";
import {MeetingJoinParameters} from "./meetingJoinParameters";

export type MeetingActionInfo = {
    action_type: MeetingActionType;
    meeting_id?: number;
    type?: MeetingType;
    start_time?: Date;
    duration_minutes?: number;
    title?: string;
    note?: string;
    join_parameters?: MeetingJoinParameters;
};
