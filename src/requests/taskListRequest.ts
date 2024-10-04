export type TaskListRequest = {
    include_archived?: "y";
    modified_before?: Date;
    modified_after?: Date;
    /**
     * @remarks
     * Default: 200
     */
    item_count?: number;
};
