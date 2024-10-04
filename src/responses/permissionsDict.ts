import {PermissionLevel} from "../enums/permissionLevel";

export type PermissionsDict = {
    [index: string | number]: PermissionLevel;
};
