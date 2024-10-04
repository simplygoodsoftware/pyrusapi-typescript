import {ResponseBase} from "./responseBase";
import {Person} from "../entities/person";

export type MembersResponse = ResponseBase & {
    members: Person[];
};
