import {KnowledgeBasePermissionLevel} from "../enums/knowledgeBasePermissionLevel";
import {KnowledgeBasePersonInfo} from "../entities/knowledgeBasePersonInfo";

export type KnowledgeBasePermissionsResponse = {
    global_permission: KnowledgeBasePermissionLevel;
    inherit: boolean;
    readers: KnowledgeBasePersonInfo[];
    editors: KnowledgeBasePersonInfo[];
};
