import {DueFilter} from "../entities/dueFilter";
import {FormFilter} from "./formFilter";

export type FormRegisterRequest = {
    steps?: number[];
    include_archived?: "y";
    modified_before?: Date;
    modified_after?: Date;
    created_before?: Date;
    created_after?: Date;
    closed_before?: Date;
    closed_after?: Date;
    filters?: FormFilter[];
    format?: "csv";
    delimiter?: string;
    simple_format?: boolean;
    encoding?: string;
    field_ids?: number[];
    task_ids?: number[];
    due_filter?: DueFilter;
    /**
     * Max. number of tasks in request
     * @remarks
     * More than 0, and less than or equal to 20000
     */
    item_count?: number;
};
