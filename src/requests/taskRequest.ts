import {FormField} from "../entities/formFields/formField";
import {NewFile} from "../entities/newFile";
import {PersonIdentity} from "./personIdentity";

export type TaskRequest = {
    text?: string;
    formatted_text?: string;
    subject?: string;
    parent_task_id?: number;

    due_date?: Date;
    due?: Date;
    scheduled_date?: Date;
    scheduled_datetime_utc?: Date;
    cancel_schedule?: boolean;
    duration?: number;
    form_id?: number;
    attachments?: NewFile[];
    responsible?: PersonIdentity;
    fields?: FormField[];
    approvals?: PersonIdentity[][];
    subscribers?: PersonIdentity[];
    participants?: PersonIdentity[];
    list_ids?: number[];
    fill_defaults?: boolean;
};
