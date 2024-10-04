import {FormMapping} from "../entities/formMapping";

/**
 * Adding information about the call
 *
 * @remarks
 *
 * To successfully process the request, one of the following parameters
 * must be indicated: external_id, task_id or from_number and to_number
 */
export type AttachCallRecordRequest = {
    /**
     *  Unique ID of the file uploaded with a /files/upload request
     */
    record_file?: string;
    /**
     * Sender phone number
     */
    from_number?: string;
    /**
     * Recipient phone number
     */
    to_number?: string;
    /**
     * Call ID in external system
     */
    external_id?: string;
    /**
     *  ID of the created task
     *  @remarks
     *  Returns to integrations/call.
     */
    task_id?: number;
    /**
     * Data for autofill form fields
     */
    mappings?: FormMapping[];
};
