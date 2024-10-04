export type SessionRestriction = {
    disable: boolean;
    max_count?: number;
};

export type SessionRestrictionUpdate = {
    drop: boolean;
    disable?: boolean;
    max_count?: number;
};
