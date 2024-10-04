export type CreateRoleRequest = {
    name: string;
    external_id?: string;
    member_add?: number[];
};
