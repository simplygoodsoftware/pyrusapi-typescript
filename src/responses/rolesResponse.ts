import {ResponseBase} from "./responseBase";
import {Role} from "../entities/role";

export type RolesResponse = ResponseBase & {
    roles: Role[];
};
