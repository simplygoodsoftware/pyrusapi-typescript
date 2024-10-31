export type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";
export type ById = {
    id: number;
};

export type IdOrCodeRequired =
    | {
          id: number;
      }
    | {
          code: string;
      };
