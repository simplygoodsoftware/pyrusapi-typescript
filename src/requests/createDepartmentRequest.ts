export type CreateDepartmentRequest = {
    parent_id?: number;
    manager_id?: number;
    department_name: string;
    external_id?: number;
};
