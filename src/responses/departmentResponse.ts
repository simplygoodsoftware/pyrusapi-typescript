import {ResponseBase} from "./responseBase";
import {Department} from "../entities/department";

export type DepartmentResponse = ResponseBase & Department;
