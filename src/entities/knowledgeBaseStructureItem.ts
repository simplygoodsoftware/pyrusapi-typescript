import {KnowledgeBaseEntityType} from "../enums/knowledgeBaseEntityType";
import {KnowledgeBasePermissionLevel} from "../enums/knowledgeBasePermissionLevel";

export type KnowledgeBaseStructureItem = {
    id: string;
    title: string;
    type: KnowledgeBaseEntityType;
    parent_topic_id: string;
    created_at: Date;
    updated_at: Date;
    access_right: KnowledgeBasePermissionLevel;
    is_open_for_organization: boolean;
    children: KnowledgeBaseStructureItem[];
};
