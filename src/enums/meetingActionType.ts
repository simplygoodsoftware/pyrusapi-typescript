export const MeetingActionType = {
    Added: "added",
    Updated: "updated",
    Deleted: "deleted",
} as const;

export type MeetingActionType =
    typeof MeetingActionType[keyof typeof MeetingActionType];
