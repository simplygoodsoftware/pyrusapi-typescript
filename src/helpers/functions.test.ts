import {describe, it, expect} from "vitest";
import {
    toJson,
    fromJson,
    toDateString,
    toDateTimeString,
    toTimeString,
} from "./functions";

describe("fromJson", () => {
    it("parses plain object without date fields", () => {
        const result = fromJson<{name: string; count: number}>(
            '{"name":"test","count":42}',
        );
        expect(result).toEqual({name: "test", count: 42});
    });

    it("converts known date response keys to Date objects", () => {
        const iso = "2024-05-01T10:30:00.000Z";
        const result = fromJson<{create_date: Date; last_modified_date: Date}>(
            `{"create_date":"${iso}","last_modified_date":"${iso}"}`,
        );
        expect(result.create_date).toBeInstanceOf(Date);
        expect(result.last_modified_date).toBeInstanceOf(Date);
        expect(result.create_date.toISOString()).toBe(iso);
    });

    it("converts due_date and close_date to Date objects", () => {
        const iso = "2024-12-31T00:00:00.000Z";
        const result = fromJson<{due_date: Date; close_date: Date}>(
            `{"due_date":"${iso}","close_date":"${iso}"}`,
        );
        expect(result.due_date).toBeInstanceOf(Date);
        expect(result.close_date).toBeInstanceOf(Date);
    });

    it("does not convert unknown string keys to Date", () => {
        const result = fromJson<{title: string; description: string}>(
            '{"title":"2024-01-01","description":"some text"}',
        );
        expect(result.title).toBe("2024-01-01");
        expect(typeof result.title).toBe("string");
    });

    it("converts date-type form field value to Date", () => {
        const iso = "2024-06-15";
        const json = `{"type":"date","value":"${iso}"}`;
        const result = fromJson<{type: string; value: Date}>(json);
        expect(result.value).toBeInstanceOf(Date);
    });

    it("converts due_date_time form field value to Date", () => {
        const iso = "2024-06-15T12:00:00Z";
        const json = `{"type":"due_date_time","value":"${iso}"}`;
        const result = fromJson<{type: string; value: Date}>(json);
        expect(result.value).toBeInstanceOf(Date);
    });

    it("does not convert text form field value", () => {
        const json = '{"type":"text","value":"hello"}';
        const result = fromJson<{type: string; value: string}>(json);
        expect(result.value).toBe("hello");
    });
});

describe("toJson", () => {
    it("serializes plain object without date fields", () => {
        const result = toJson({name: "test", count: 42});
        expect(JSON.parse(result)).toEqual({name: "test", count: 42});
    });

    it("serializes due_date (dateRequestKey) Date as YYYY-MM-DD string", () => {
        const date = new Date("2024-08-20T14:30:00.000Z");
        const result = toJson({due_date: date});
        const parsed = JSON.parse(result);
        expect(parsed.due_date).toBe("2024-08-20");
    });

    it("serializes scheduled_date (dateRequestKey) Date as YYYY-MM-DD string", () => {
        const date = new Date("2024-03-05T00:00:00.000Z");
        const result = toJson({scheduled_date: date});
        const parsed = JSON.parse(result);
        expect(parsed.scheduled_date).toBe("2024-03-05");
    });

    it("serializes start_date_utc (dateTimeRequestKey) Date as ISO without milliseconds", () => {
        const date = new Date("2024-08-20T14:30:45.000Z");
        const result = toJson({start_date_utc: date});
        const parsed = JSON.parse(result);
        expect(parsed.start_date_utc).toBe("2024-08-20T14:30:45Z");
    });

    it("serializes due (dateTimeRequestKey) Date as ISO without milliseconds", () => {
        const date = new Date("2025-01-01T09:00:00.000Z");
        const result = toJson({due: date});
        const parsed = JSON.parse(result);
        expect(parsed.due).toBe("2025-01-01T09:00:00Z");
    });

    it("serializes due_date form field value as date string", () => {
        const date = new Date("2024-07-10T00:00:00.000Z");
        const result = toJson({type: "due_date", value: date});
        const parsed = JSON.parse(result);
        expect(parsed.value).toBe("2024-07-10");
    });

    it("serializes due_date_time form field value as datetime string", () => {
        const date = new Date("2024-07-10T08:15:00.000Z");
        const result = toJson({type: "due_date_time", value: date});
        const parsed = JSON.parse(result);
        expect(parsed.value).toBe("2024-07-10T08:15:00Z");
    });

    it("round-trips a task with create_date through toJson/fromJson", () => {
        const iso = "2024-11-20T12:00:00.000Z";
        const input = {id: 1, create_date: iso};
        const roundTripped = fromJson(toJson(input));
        expect(roundTripped.create_date).toBeInstanceOf(Date);
        expect(roundTripped.create_date.toISOString()).toBe(iso);
    });
});

describe("toDateString / toDateTimeString / toTimeString", () => {
    const date = new Date("2024-06-15T08:30:45.000Z");

    it("toDateString returns YYYY-MM-DD for a Date", () => {
        expect(toDateString(date)).toBe("2024-06-15");
    });

    it("toDateString returns string as-is", () => {
        expect(toDateString("2024-06-15")).toBe("2024-06-15");
    });

    it("toDateTimeString returns ISO without milliseconds for a Date", () => {
        expect(toDateTimeString(date)).toBe("2024-06-15T08:30:45Z");
    });

    it("toDateTimeString returns string as-is", () => {
        expect(toDateTimeString("2024-06-15T08:30:45Z")).toBe(
            "2024-06-15T08:30:45Z",
        );
    });

    it("toTimeString returns HH:MM for a Date", () => {
        expect(toTimeString(date)).toBe("08:30");
    });

    it("toTimeString returns string as-is", () => {
        expect(toTimeString("08:30")).toBe("08:30");
    });

    it("toDateString falls back to String() for non-date non-string values", () => {
        expect(toDateString(42 as any)).toBe("42");
        expect(toDateString(null as any)).toBe("null");
        expect(toDateString({} as any)).toBe("[object Object]");
    });

    it("toDateTimeString falls back to String() for non-date non-string values", () => {
        expect(toDateTimeString(42 as any)).toBe("42");
        expect(toDateTimeString(null as any)).toBe("null");
    });

    it("toTimeString falls back to String() for non-date non-string values", () => {
        expect(toTimeString(42 as any)).toBe("42");
        expect(toTimeString(null as any)).toBe("null");
    });

    it("toDateString works with a cross-realm date-like object (duck typing)", () => {
        const dateLike = {toISOString: () => "2024-06-15T08:30:45.000Z"};
        expect(toDateString(dateLike as any)).toBe("2024-06-15");
    });

    it("toDateTimeString works with a cross-realm date-like object (duck typing)", () => {
        const dateLike = {toISOString: () => "2024-06-15T08:30:45.000Z"};
        expect(toDateTimeString(dateLike as any)).toBe("2024-06-15T08:30:45Z");
    });

    it("toTimeString works with a cross-realm date-like object (duck typing)", () => {
        const dateLike = {toISOString: () => "2024-06-15T08:30:45.000Z"};
        expect(toTimeString(dateLike as any)).toBe("08:30");
    });
});
