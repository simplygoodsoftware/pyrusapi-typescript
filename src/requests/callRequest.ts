import {FormMapping} from "../entities/formMapping";

export type CallRequest = {
    /**
     * Unique ID of the extension's account in the external system
     */
    account_id: string;
    /**
     * Sender phone number
     */
    from_number: string;
    /**
     * Recipient phone number
     */
    to_number: string;
    /**
     * Internal operator number
     */
    internal_number?: string;
    /**
     * Call ID in external system
     */
    external_id?: string;
    /**
     * Data for autofill form fields
     */
    mappings?: FormMapping[];
};
