export const SendSmsStatus = {
    Sent: "sent",
    Delivered: "delivered",
    DeliveryFailed: "delivery_failed",
    SendFailed: "send_failed",
} as const;

export type SendSmsStatus = typeof SendSmsStatus[keyof typeof SendSmsStatus];
