import {KnowledgeBaseStructureItem} from "../entities/knowledgeBaseStructureItem";

export type KnowledgeBaseStructureResponse = {
    parent_topic_id?: string;
    depth?: number;
    items: KnowledgeBaseStructureItem[];
};
