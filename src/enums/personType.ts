export const PersonType = {
    User: "user",
    Bot: "bot",
    Role: "role",
} as const;

export type PersonType = typeof PersonType[keyof typeof PersonType];
