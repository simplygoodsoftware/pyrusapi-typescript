export type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";

export type IdRequired = {
    id: number;
};

export type CodeRequired = {
    code: string;
};

export type NameRequired = {
    name: string;
};

export type ById = IdRequired;

export type FormFieldIdentifier = IdRequired | CodeRequired | NameRequired;
