import {PersonType} from "../enums/personType";

export type Person = {
    id: number;
    first_name: string;
    last_name: string;
    native_first_name?: string;
    native_last_name?: string;
    email: string;
    status?: string;
    type: PersonType;
    department_id?: string;
    department_name?: string;
    banned: boolean;
    fired?: boolean;
    task_receiver?: number;
    position: string;
    skype: string;
    phone: string;
};
