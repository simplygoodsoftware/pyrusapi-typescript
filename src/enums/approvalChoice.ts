export const ApprovalChoice = {
    Waiting: "waiting",
    Approved: "approved",
    Rejected: "rejected",
    Revoked: "revoked",
    Acknowledged: "acknowledged",
} as const;

export type ApprovalChoice = typeof ApprovalChoice[keyof typeof ApprovalChoice];
