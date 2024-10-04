import {ListType} from "../enums/listType";

export type UpdateListRequest = {
    id: number;
    name?: string;
    color?: string;
    list_type?: ListType;
    added_managers?: number[];
    removed_managers?: number[];
    added_members?: number[];
    removed_members?: number[];
    external_version?: number;
    external_id?: number;
    is_private?: boolean;
};
