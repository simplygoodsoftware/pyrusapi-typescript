export type UpdateKnowledgeBaseEntityRequest = {
    title?: string;
    body?: string;
    parent_topic_id_changed?: boolean;
    parent_topic_id?: string;
};
