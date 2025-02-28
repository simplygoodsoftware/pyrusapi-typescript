export const ErrorCodeType = {
    ServerError: "server_error",

    // Unauthorized (401)
    AuthorizationError: "authorization_error",
    TokenNotSpecified: "token_not_specified",
    RevokedToken: "revoked_token",
    ExpiredToken: "expired_token",
    InvalidToken: "invalid_token",
    AccountBlocked: "account_blocked",
    InvalidCredentials: "invalid_credentials",
    InvalidApplicationId: "invalid_application_id",

    // BadRequest (400)
    InvalidFieldId: "invalid_field_id",
    InvalidFieldName: "invalid_field_name",
    InvalidFieldIdName: "invalid_field_id_name",
    NonUniqueName: "non_unique_name",
    FieldIdentityMissing: "field_identity_missing",
    DuplicateField: "duplicate_field",
    InvalidCatalogId: "invalid_catalog_id",
    InvalidCatalogItemName: "invalid_catalog_item_name",
    NonUniqueCatalogItemName: "non_unique_catalog_item_name",
    InvalidCatalogItemId: "invalid_catalog_item_id",
    InvalidCatalogItemIdName: "catalog_item_id_name_mismatch",
    InvalidEmail: "invalid_email",
    NonUniqueEmail: "non_unique_email",
    InvalidPersonIdEmail: "invalid_person_id_email",
    UnrecognizedAttachmentId: "unrecognized_attachment_id",
    RequiredFieldMissing: "required_field_missing",
    FieldTypeIsNotSupported: "type_is_not_supported",
    IncorrectParametersCount: "incorrect_parameters_count",
    FilterTypeIsNotSupported: "filter_type_is_not_supported",
    StepFieldDoesNotExists: "step_field_does_not_exists",
    NoFileInRequest: "no_file_in_request",
    TooLargeRequestLength: "too_large_request_length",
    TaskHasNoForm: "task_has_no_form",
    RequiredParameterMissing: "required_parameter_missing",
    InvalidValueFormat: "invalid_value_format",
    InvalidJson: "invalid_json",
    EmptyBody: "empty_body",
    TextMissing: "text_missing",
    FormIdMissing: "form_id_missing",
    InvalidPersonId: "invalid_person_id",
    DeletedField: "deleted_field",
    PersonIdentityMissing: "person_identity_missing",
    CatalogItemIdMissing: "catalog_identity_missing",
    FormHasNoTask: "form_has_no_task",
    EitherDueDateOrDueCanBeSet: "either_due_date_or_due_can_be_set",
    NegativeDuration: "negative_duration",
    DurationIsTooLong: "duration_is_too_long",
    DueMissing: "due_missing",
    ScheduledDateInPast: "scheduled_date_in_past",
    CannotAddFormProject: "cannot_add_form_project",
    FormTemplateCantBeRemovedFromTask:
        "form_template_cant_be_removed_from_task",
    TooManyTaskSteps: "too_many_task_steps",
    TooManyComments: "too_many_comments",
    InvalidStepNumber: "invalid_step_number",
    TaskLimitExceeded: "task_limit_exceeded",
    FieldIsInTable: "field_is_in_table",
    RequiredTableFieldMissing: "required_table_field_missing",
    DepartmentCatalogCanNotBeModified: "department_catalog_can_not_be_modified",
    CatalogDuplicateItems: "catalog_duplicate_rows",
    EmptyCatalogHeaders: "empty_catalog_headers",
    CanNotModifyDeletedCatalog: "can_not_modify_deleted_catalog",
    CatalogDuplicateHeaders: "catalog_duplicate_headers",
    CanNotModifyFirstColumn: "can_not_modify_first_column",
    CatalogHeadersItemsMismatch: "catalog_headers_items_mismatch",
    TooManyCatalogItems: "too_many_catalog_items",
    CatalogItemMaxLengthExceeded: "catalog_item_max_length_exceeded",
    SingleValueIsNotSupported: "single_value_is_not_supported",
    ParticipantLimitExceeded: "participant_limit_exceeded",
    TableRowsLimitExceeded: "table_rows_limit_exceeded",
    TextFieldValueLimitExceeded: "text_field_value_limit_exceeded",
    UnableToEditField: "unable_to_edit_field",
    EmptyFile: "empty_file",
    BadMultipartContent: "bad_multipart_content",
    TooManyDecimalPlaces: "too_many_decimal_places",
    ExternalCommentEmptyText: "external_comment_empty_text",
    SenderAddressFieldMissing: "sender_address_field_missing",
    ExternalCommentRecipientNotFound: "external_comment_recipient_not_found",
    DefaultMailboxNotFound: "default_mailbox_not_found",
    CatalogNullValue: "catalog_null_value",
    MaxTextLengthExceeded: "max_text_length_exceeded",
    DueOutsideOfBounds: "due_outside_of_bounds",
    AttachmentsForbidden: "attachments_forbidden",
    UnrecognizedCallGuid: "unrecognized_call_guid",
    UnsupportedAttachmentFormat: "unsupported_attachment_format",
    ValidationError: "validation_error",
    UnrecognizedAccountId: "unrecognized_account_id",
    WebhookIsDisabled: "webhook_is_disabled",
    TooLargeMessageText: "too_large_message_text",
    UnrecognizedMessageType: "unrecognized_message_type",
    InvalidFieldMappingCode: "invalid_field_mapping_code",
    TooManyAttachments: "too_many_attachments",
    UnrecognizedCallId: "unrecognized_call_id",
    UnsupportedRecordFileFormat: "unsupported_record_file_format",
    UnrecognizedIntegrationGuid: "unrecognized_integration_guid",
    LimitExceeded: "limit_exceeded",
    MaxSmsTextLengthExceeded: "max_sms_text_length_exceeded",
    SmsIntegrationNotConfigured: "sms_integration_not_configured",
    AttachmentTooBig: "attachment_too_big",
    UncreatedOrDeletedTableRows: "invalid_table_row",
    PrivateChannelAccessDenied: "private_channel_access_denied",
    PrivateCommentHasForbiddenChanges: "private_comment_has_forbidden_changes",
    ItemsCountOutOfRange: "items_count_out_of_range",
    CannotAddExternalUser: "cannot_add_external_user",
    UnrecognizedTaskId: "unrecognized_task_id",
    TooManyDeletedCatalogItems: "too_many_deleted_catalog_items",
    FieldCannotHaveMultipleValues: "field_cannot_have_multiple_values",
    FieldEditingIsNotAllowed: "field_editing_is_not_allowed",
    NonUniqueCode: "non_unique_code",
    InvalidFieldCode: "invalid_field_code",

    // Forbidden (403)
    AccessDeniedProject: "access_denied_project",
    AccessDeniedTask: "access_denied_task",
    AccessDeniedCatalog: "access_denied_catalog",
    AccessDeniedForm: "access_denied_form",
    AccessDeniedPerson: "access_denied_person",
    AccessDeniedCloseTask: "access_denied_close_task",
    AccessDeniedReopenTask: "access_denied_reopen_task",
    AccessDeniedFileAccessHistory: "access_denied_file_access_history",
    AccessDeniedFile: "access_denied_file",
    AccessDeniedReport: "access_denied_report",
    AccessDenied: "access_denied",
    FileIsMissing: "file_is_missing",

    // Too many Requests (429)
    TooManyRequests: "too_many_requests",
} as const;

export type ErrorCodeType = typeof ErrorCodeType[keyof typeof ErrorCodeType];
