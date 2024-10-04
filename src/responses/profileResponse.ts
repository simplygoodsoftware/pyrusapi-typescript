import {ResponseBase} from "./responseBase";
import {Organization} from "../entities/organization";

export type ProfileResponse = ResponseBase & {
    person_id: number;
    first_name?: string;
    last_name?: string;
    email: string;
    locale?: string;
    organization_id: number;
    organization: Organization;
    timezone_offset?: number;
};
