import {ListType} from "../enums/listType";

export type PlainTaskList = {
    id: number;
    parent_id?: number;
    name: string;
    color?: string;
    deleted: boolean;
    list_type: ListType;
    has_form?: boolean;
    manager_ids: number[];
    member_ids?: number[];
    version: number;
    external_version?: number;
    external_id?: number;
};
