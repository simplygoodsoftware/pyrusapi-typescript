import {
    allDateAndTimeFieldTypes,
    allDateAndTimeResponseKeys,
    dateFieldTypes,
    dateRequestKeys,
    dateTimeFieldTypes,
    dateTimeRequestKeys,
} from "./constants";
import {FormFilter} from "../requests/formFilter";
import {OperatorId} from "../enums/operatorId";
import {CatalogHeader} from "../entities/catalogHeader";

export function toSearchParams(request: object) {
    return (
        "?" +
        new URLSearchParams(
            Object.entries(request).map(([key, value]) => {
                if (value instanceof Date) {
                    if (dateTimeRequestKeys.includes(key))
                        return [key, toDateTimeString(value)];
                    if (dateRequestKeys.includes(key))
                        return [key, toDateString(value)];
                }
                return [key, value];
            }),
        ).toString()
    );
}

export function extractDates(key: string, value: any) {
    // if Field
    if (value instanceof Object && value.type && value.value) {
        if (allDateAndTimeFieldTypes.includes(value.type)) {
            value.value = new Date(value.value);
        }
        return value;
    }
    if (allDateAndTimeResponseKeys.includes(key)) {
        value = value && new Date(value);
    }

    return value;
}

export function packDates(key: string, value: any) {
    if (dateRequestKeys.includes(key)) {
        return value && toDateString(value);
    }
    if (dateTimeRequestKeys.includes(key)) {
        return value && toDateTimeString(value);
    }
    // if Field
    if (value instanceof Object && value.type && value.value) {
        if (dateTimeFieldTypes.includes(value.type)) {
            value.value = toDateTimeString(value.value);
            return value;
        }
        if (dateFieldTypes.includes(value.type)) {
            value.value = toDateString(value.value);
            return value;
        }
    }

    return value;
}

export function toJson(obj: any) {
    return JSON.stringify(obj, packDates);
}

export function fromJson<T = any>(str: string) {
    return JSON.parse(str, extractDates) as T;
}

export function trimTrailingSlash(url: string) {
    return url.endsWith("/") ? url.slice(0, -1) : url;
}

export function toDateTimeString(date: Date | string): string {
    if (typeof date !== "string") date = date.toISOString();
    return date.split(".")[0] + "Z";
}

export function toDateString(date: Date | string): string {
    if (typeof date !== "string") date = date.toISOString();
    return date.split("T")[0];
}

type Filters = {
    [index: string]: string;
};
export function processFilters(filters: FormFilter[] | undefined) {
    if (!filters) return {};
    return filters.reduce((prev: Filters, {operator_id, values, field_id}) => {
        switch (operator_id) {
            case OperatorId.Equals:
            case OperatorId.MatchPrefix:
                prev[`fld${field_id}`] = values[0];
                break;
            case OperatorId.LessThan:
                prev[`fld${field_id}`] = `lt${values[0]}`;
                break;
            case OperatorId.GreaterThan:
                prev[`fld${field_id}`] = `gt${values[0]}`;
                break;
            case OperatorId.IsIn:
                prev[`fld${field_id}`] = values.join(",");
                break;
            case OperatorId.Range:
                prev[`fld${field_id}`] = `gt${values[0]},lt${values[1]}`;
                break;
            case OperatorId.IsEmpty:
                prev[`fld${field_id}`] = "empty";
                break;
            default:
                return prev;
        }

        return prev;
    }, {});
}

export function prepareHeadersForCatalogApiRequest(
    headers: string[] | CatalogHeader[],
): string[] {
    return headers.map((header) =>
        typeof header === "string" ? header : header.name,
    );
}
