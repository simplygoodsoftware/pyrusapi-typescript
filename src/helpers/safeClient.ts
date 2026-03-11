import {ApiError} from "./errors";

export type Ok<T> = {ok: true; value: T};
export type Err<E> = {ok: false; error: E};
export type Result<T, E = ApiError> = Ok<T> | Err<E>;

/**
 * Transforms the return type of every async method in T from Promise<R> to Promise<Result<R>>.
 * Non-function properties that are objects are transformed recursively.
 */
export type SafeClient<T> = {
    [K in keyof T]: T[K] extends (...args: infer A) => Promise<infer R>
        ? (...args: A) => Promise<Result<R>>
        : T[K] extends object
          ? SafeClient<T[K]>
          : T[K];
};

function wrapApi<T extends object>(api: T): SafeClient<T> {
    const cache = new Map<string | symbol, unknown>();

    return new Proxy(api, {
        get(target, prop) {
            if (cache.has(prop)) return cache.get(prop);

            const value = (target as Record<string | symbol, unknown>)[prop];

            let wrapped: unknown;

            if (typeof value === "function") {
                wrapped = (...args: unknown[]) => {
                    const result = (value as (...a: unknown[]) => unknown).apply(
                        target,
                        args,
                    );
                    if (!(result instanceof Promise)) return result;
                    return result.then(
                        (v) => ({ok: true, value: v}) satisfies Ok<unknown>,
                        (e: unknown) => {
                            if (e instanceof ApiError)
                                return {ok: false, error: e} satisfies Err<ApiError>;
                            throw e;
                        },
                    );
                };
            } else if (value !== null && typeof value === "object") {
                wrapped = wrapApi(value as object);
            } else {
                return value;
            }

            cache.set(prop, wrapped);
            return wrapped;
        },
    }) as SafeClient<T>;
}

/**
 * Wraps an API client so every async method returns Promise<Result<T>> instead of throwing.
 *
 * ApiError is caught and returned as { ok: false, error }.
 * Unexpected errors (network, etc.) are still thrown.
 *
 * @example
 * const safe = safeClient(new PyrusApiClient(auth));
 * const result = await safe.tasks.get({ id: 123 });
 * if (result.ok) {
 *     console.log(result.value.task);
 * } else {
 *     console.error(result.error.errorCode); // ErrorCodeType
 * }
 */
export function safeClient<T extends object>(client: T): SafeClient<T> {
    return wrapApi(client);
}
