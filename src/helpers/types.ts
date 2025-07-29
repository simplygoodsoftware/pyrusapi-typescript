export type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";

export type IdRequired = {
    id: number;
};

type CodeRequired = {
    code: string;
};

export type ById = IdRequired;

export type IdOrCodeRequired = IdRequired | CodeRequired;
