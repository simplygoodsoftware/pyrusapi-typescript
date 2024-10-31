export const ActivityAction = {
    Finished: "finished",
    Reopened: "reopened",
} as const;

export type ActivityAction = typeof ActivityAction[keyof typeof ActivityAction];
