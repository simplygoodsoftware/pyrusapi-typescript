import {AttachedFile} from "./attachedFile";
import {FormField} from "./formFields/formField";
import {Approval} from "./approval";
import {Subscriber} from "./subscriber";
import {Person} from "./person";
import {TaskHeader} from "./taskHeader";

export type Task = TaskHeader & {
    due_date?: Date;
    due?: Date;
    scheduled_date?: Date;
    scheduled_datetime_utc?: Date;
    cancel_schedule?: boolean;
    duration?: number;
    form_id?: number;
    attachments?: AttachedFile[];
    fields?: FormField[];
    approvals?: Approval[][];
    subscribers?: Subscriber[];
    participants?: Person[];
    list_ids?: number[];
    linked_task_ids?: number[];
    parent_task_id?: number;
    last_note_id?: number;
    subject?: string;
    is_closed: boolean;
};
