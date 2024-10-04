import {ResponseBase} from "./responseBase";
import {Organization} from "../entities/organization";

export type ContactsResponse = ResponseBase & {
    organizations: Organization[];
};
