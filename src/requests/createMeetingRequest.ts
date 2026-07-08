import {MeetingType} from "../enums/meetingType";

export type CreateMeetingRequest = {
    type: MeetingType;
    start_time: Date;
    duration_minutes: number;
    title: string;
    note?: string;
    member_ids?: number[];
    meeting_room_ids?: number[];
    task_ids?: number[];
    should_be_shared_to_external_person?: boolean;
};
