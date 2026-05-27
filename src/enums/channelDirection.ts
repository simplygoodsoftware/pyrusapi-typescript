export const ChannelDirection = {
    Inbound: "inbound",
    Outbound: "outbound",
} as const;

export type ChannelDirection = typeof ChannelDirection[keyof typeof ChannelDirection];
