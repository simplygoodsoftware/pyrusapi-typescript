import {KnowledgeBaseEntityType} from "../enums/knowledgeBaseEntityType";

export type CreateKnowledgeBaseEntityRequest = {
    type: KnowledgeBaseEntityType;
    title: string;
    body?: string;
    parent_topic_id?: string;
};
