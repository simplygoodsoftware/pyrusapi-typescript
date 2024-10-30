export const DisconnectParty = {
    Agent: "agent",
    Client: "client",
    Error: "error",
    Other: "other",
} as const;

export type DisconnectParty =
    typeof DisconnectParty[keyof typeof DisconnectParty];
