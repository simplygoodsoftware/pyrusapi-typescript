import {ResponseBase} from "./responseBase";
import {Department} from "../entities/department";

export type DepartmentsResponse = ResponseBase & {
    departments: Department[];
};
