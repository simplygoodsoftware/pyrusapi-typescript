import {KnowledgeBaseEntityType} from "../enums/knowledgeBaseEntityType";
import {KnowledgeBasePermissionLevel} from "../enums/knowledgeBasePermissionLevel";
import {KnowledgeBasePersonInfo} from "../entities/knowledgeBasePersonInfo";

export type KnowledgeBaseEntityResponse = {
    id: string;
    title: string;
    type: KnowledgeBaseEntityType;
    body: string;
    parent_topic_id: string;
    author: KnowledgeBasePersonInfo;
    created_at: Date;
    updated_at: Date;
    last_edited_by: KnowledgeBasePersonInfo;
    version: number;
    access_right: KnowledgeBasePermissionLevel;
    is_open_for_organization: boolean;
    is_public: boolean;
};
