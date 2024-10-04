import {FilterMask} from "../enums/filterMask";

export type CalendarTasksRequest = {
    start_date_utc?: Date;
    end_date_utc: Date;
    /**
     * Maximum number of tasks that will be returned in reply
     * @remarks
     * 50 default, 100 max
     */
    item_count?: number;
    /**
     * @remarks
     * Whether all tasks accessible to user must be returned,
     * including all roles of user and all tasks from forms
     * accessible to user. Otherwise, only tasks where the user
     * is an assignee or approver, that have not yet been approved,
     * will be returned.
     */
    all_accessed_tasks?: boolean;
    /**
     * Bit mask that determines filter combination
     */
    filter_mask?: FilterMask;
};
