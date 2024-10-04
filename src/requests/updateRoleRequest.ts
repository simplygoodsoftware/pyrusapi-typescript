export type UpdateRoleRequest = {
    id: number;
    name?: string;
    external_id?: string;
    banned?: boolean;
    member_add?: number[];
    member_remove?: number[];
};
