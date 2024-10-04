export type AuthRequest = {
    login: string;
    security_key: string;
    /**
     * Employee ID
     * @remarks
     *  if you have more than one account registered to the same email,
     *  then to receive a token you need to add the person_id parameter
     */
    person_id?: string;
};
