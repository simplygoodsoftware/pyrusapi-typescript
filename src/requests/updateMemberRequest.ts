export type UpdateMemberRequest = {
    id: number;
    first_name?: string;
    last_name?: string;
    native_first_name?: string;
    native_last_name?: string;
    email?: string;
    status?: string;
    banned?: boolean;
    position?: string;
    department_id?: number;
    drop_department?: boolean;
    skype?: string;
    phone?: string;
};
