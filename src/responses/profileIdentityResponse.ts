import {ResponseBase} from "./responseBase";

export type ProfileIdentityResponse = ResponseBase & {
    email: string;
    organization_id: number;
};
