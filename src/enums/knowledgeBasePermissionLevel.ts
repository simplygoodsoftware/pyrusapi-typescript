export const KnowledgeBasePermissionLevel = {
    None: "none",
    Read: "read",
    Write: "write",
} as const;

export type KnowledgeBasePermissionLevel =
    typeof KnowledgeBasePermissionLevel[keyof typeof KnowledgeBasePermissionLevel];
