export type TaskListRequest = {
    include_archived?: "y";
    modified_before?: Date;
    modified_after?: Date;
    created_before?: Date;
    created_after?: Date;
    closed_before?: Date;
    closed_after?: Date;
    /**
     * @remarks
     * Default: 200
     */
    item_count?: number;
};
