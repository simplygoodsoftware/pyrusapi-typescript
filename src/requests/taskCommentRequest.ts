import {ActivityAction} from "../enums/activityAction";
import {NewFile} from "../entities/newFile";
import {FormFieldIdentified} from "../entities/formFields/formField";
import {Channel} from "../entities/channel";
import {ApprovalChoice} from "../enums/approvalChoice";
import {PersonIdentity} from "./personIdentity";

export type TaskCommentRequest = {
    text?: string;
    formatted_text?: string;
    subject?: string;
    approval_choice?: ApprovalChoice;
    reassign_to?: PersonIdentity;
    approval_steps?: number[];
    action?: ActivityAction;
    attachments?: NewFile[];
    field_updates?: FormFieldIdentified[];
    approvals_added?: PersonIdentity[][];
    approvals_removed?: PersonIdentity[][];
    approvals_rerequested?: PersonIdentity[][];
    subscribers_added?: PersonIdentity[];
    subscribers_removed?: PersonIdentity[];
    subscribers_rerequested?: PersonIdentity[];
    participants_added?: PersonIdentity[];
    participants_removed?: PersonIdentity[];
    due_date?: Date;
    due?: Date;
    duration?: number;
    cancel_due?: boolean;
    scheduled_date?: Date;
    scheduled_datetime_utc?: Date;
    cancel_schedule?: boolean;
    added_list_ids?: number[];
    removed_list_ids?: number[];
    channel?: Channel;
    spent_minutes?: number;
    skip_satisfaction?: boolean;
    edit_comment_id?: number;
    skip_notification?: boolean;
};
