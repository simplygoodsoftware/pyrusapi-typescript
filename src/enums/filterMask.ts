export enum FilterMask {
    /**
     *  Events whose deadline is indicated in UTC+0
     */
    Due = 0x1,
    /**
     * Tasks whose deadline is indicated by date
     * (without reference to timezone)
     */
    DueDate = 0x2,
    /**
     * Tasks whose deadline at the current step is
     * within the selected time period in UTC+0
     */
    DueForCurrentStep = 0x4,
    /**
     *  Tasks with a programmed reminder
     */
    Reminded = 0x8,
}
