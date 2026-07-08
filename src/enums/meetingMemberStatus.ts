export const MeetingMemberStatus = {
    Undefined: "undefined",
    Going: "going",
    MayBe: "maybe",
    NotGoing: "not_going",
    GoingVirtually: "going_virtually",
    GoingToMeetingRoom: "going_to_meeting_room",
} as const;

export type MeetingMemberStatus =
    typeof MeetingMemberStatus[keyof typeof MeetingMemberStatus];
