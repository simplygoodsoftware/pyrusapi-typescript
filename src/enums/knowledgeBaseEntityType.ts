export const KnowledgeBaseEntityType = {
    Article: "article",
    Topic: "topic",
} as const;

export type KnowledgeBaseEntityType =
    typeof KnowledgeBaseEntityType[keyof typeof KnowledgeBaseEntityType];
