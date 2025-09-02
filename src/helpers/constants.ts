import {FormFieldType} from "../enums/formFieldType";

export const dateTimeFieldTypes = [
    FormFieldType.DueDateTime,
    FormFieldType.CreationDate,
];
export const dateFieldTypes = [FormFieldType.Date, FormFieldType.DueDate];
export const allDateAndTimeFieldTypes = [
    ...dateFieldTypes,
    ...dateTimeFieldTypes,
];

export const allDateAndTimeResponseKeys = [
    "create_date",
    "last_modified_date",
    "due_date",
    "due",
    "scheduled_date",
    "scheduled_datetime_utc",
    "close_date",
];

export const dateRequestKeys = ["due_date", "scheduled_date"];

export const dateTimeRequestKeys = [
    "start_date_utc",
    "end_date_utc",
    "modified_before",
    "modified_after",
    "created_before",
    "created_after",
    "closed_before",
    "closed_after",
    "due",
    "scheduled_datetime_utc",
    "start_time",
    "end_time",
];
