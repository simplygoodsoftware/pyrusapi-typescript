export const PermissionLevel = {
    None: "none",
    Manager: "manager",
    Member: "member",
    Administrator: "administrator",
} as const;

export type PermissionLevel =
    typeof PermissionLevel[keyof typeof PermissionLevel];
