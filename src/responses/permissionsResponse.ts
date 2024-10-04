import {ResponseBase} from "./responseBase";
import {PermissionsDict} from "./permissionsDict";

export type PermissionsResponse = ResponseBase & {
    permissions: PermissionsDict;
};
