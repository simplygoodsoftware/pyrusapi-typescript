export type CreateMemberRequest = {
    first_name?: string;
    last_name?: string;
    email: string;
    status?: string;
    position?: string;
    department_id?: number;
    skype?: string;
    phone?: string;
    external_id?: string;
    login_phone?: string;
};
