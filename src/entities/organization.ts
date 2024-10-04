import {Person} from "./person";
import {Role} from "./role";

export type Organization = {
    organization_id: number;
    name: string;
    persons: Person[];
    roles: Role[];
    department_catalog_id?: number;
};
