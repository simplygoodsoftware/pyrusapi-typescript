export type InboxRequest = {
    /**
     * The maximum number of tasks in the response
     * @remarks
     * default: 50
     */
    item_count: number;

    /**
     * The maximum number of tasks in a single task group
     * @remarks
     * default: 50
     */
    group_item_count: number;
};
