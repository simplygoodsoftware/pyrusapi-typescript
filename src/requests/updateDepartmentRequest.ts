export type UpdateDepartmentRequest = {
    id: number;
    remove_manager: boolean;
    parent_id?: number;
    manager_id?: number;
    department_name?: string;
    external_id?: number;
};
