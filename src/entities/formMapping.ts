/**
 * Data for autofilling form fields
 */
export type FormMapping = {
    /**
     * Pyrus form field symbol code
     */
    code: string;
    /**
     * Pyrus field value
     *
     * @remarks
     * 300 symbols max
     */
    value: string;
};
