export const BpmnParticipantAction = {
    Approve: "Approve",
    Reject: "Reject",
    Acknowledge: "Acknowledge",
    Complete: "Complete",
    Sign: "Sign",
} as const;

export type BpmnParticipantAction =
    typeof BpmnParticipantAction[keyof typeof BpmnParticipantAction];
