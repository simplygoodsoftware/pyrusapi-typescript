import {afterEach, describe, expect, it, vi} from "vitest";
import {
    ApiError,
    BpmnConditionType,
    BpmnFieldUpdateDirection,
    BpmnNodeType,
    ErrorCodeType,
    PyrusApiClient,
} from "../../index";
import type {
    FormBpmnDiagramResponse,
    FormBpmnVersionsResponse,
} from "../../index";

const apiUrl = "https://api.example.com/v4";
const client = () =>
    new PyrusApiClient("test-token", {apiUrl, authUrl: apiUrl});

function jsonResponse(body: unknown, status = 200) {
    return new Response(JSON.stringify(body), {
        status,
        headers: {"Content-Type": "application/json"},
    });
}

function mockResponse(body: unknown, status = 200) {
    return vi
        .spyOn(globalThis, "fetch")
        .mockResolvedValue(jsonResponse(body, status));
}

afterEach(() => vi.restoreAllMocks());

describe("Forms BPMN API", () => {
    it("gets saved versions with authentication and parses creation/deletion dates", async () => {
        const fetchMock = mockResponse({
            form_id: 123,
            active_bpmn_version: null,
            versions: [
                {
                    bpmn_version: 2,
                    create_date: "2026-10-01T12:00:00Z",
                    delete_date: "2026-10-02T12:00:00Z",
                },
                {
                    bpmn_version: 1,
                    create_date: "2026-09-01T12:00:00Z",
                    delete_date: null,
                },
            ],
        });
        const response: FormBpmnVersionsResponse =
            await client().forms.getBpmnVersions({id: 123});
        expect(fetchMock).toHaveBeenCalledWith(`${apiUrl}/forms/123/bpmn`, {
            method: "GET",
            headers: {
                Authorization: "Bearer test-token",
                "Content-Type": "application/json",
            },
            body: undefined,
        });
        expect(response.active_bpmn_version).toBeNull();
        expect(response.versions.map((v) => v.bpmn_version)).toEqual([2, 1]);
        expect(response.versions[0].create_date).toEqual(
            new Date("2026-10-01T12:00:00Z"),
        );
        expect(response.versions[0].delete_date).toEqual(
            new Date("2026-10-02T12:00:00Z"),
        );
        expect(response.versions[1].delete_date).toBeNull();
    });

    it("gets a diagram and preserves nested wire values, including unknown numeric conditions", async () => {
        const fetchMock = mockResponse({
            form_id: 123,
            bpmn_version: 2,
            nodes: [
                {
                    id: 1,
                    node_type: "Subprocess",
                    flows: [
                        {
                            id: 2,
                            to_node_id: 3,
                            is_default: false,
                            condition: {
                                field_id: 0,
                                condition_type: 11,
                                children: [
                                    {
                                        field_id: 4,
                                        condition_type: 5,
                                        value: "yes",
                                    },
                                    {field_id: 5, condition_type: 999},
                                ],
                            },
                        },
                    ],
                    subprocess_configuration: {
                        field_mappings: [
                            {
                                direction: "MainToSubprocess",
                                is_constant: true,
                                constant_value: {
                                    date: "2026-10-06",
                                    bit: false,
                                    long: 0,
                                },
                            },
                        ],
                    },
                },
            ],
        });
        const response: FormBpmnDiagramResponse =
            await client().forms.getBpmnDiagram(123, 2);
        expect(fetchMock).toHaveBeenCalledWith(
            `${apiUrl}/forms/123/bpmn/2`,
            expect.objectContaining({method: "GET"}),
        );
        const node = response.nodes![0];
        expect(node.node_type).toBe(BpmnNodeType.Subprocess);
        expect(node.flows![0].condition!.condition_type).toBe(
            BpmnConditionType.And,
        );
        expect(node.flows![0].condition!.children![1].condition_type).toBe(999);
        const mapping = node.subprocess_configuration!.field_mappings![0];
        expect(mapping.direction).toBe(
            BpmnFieldUpdateDirection.MainToSubprocess,
        );
        expect(mapping.constant_value).toEqual({
            date: new Date("2026-10-06"),
            bit: false,
            long: 0,
        });
    });

    it("requests version zero and accepts an unsaved diagram", async () => {
        const empty: FormBpmnDiagramResponse = {form_id: 123, bpmn_version: 0};
        const fetchMock = mockResponse(empty);
        const response = await client().forms.getBpmnDiagram(123, 0);
        expect(fetchMock).toHaveBeenCalledWith(
            `${apiUrl}/forms/123/bpmn/0`,
            expect.objectContaining({method: "GET"}),
        );
        expect(response).toEqual(empty);
        expect(response.nodes).toBeUndefined();
        expect(response.create_date).toBeUndefined();
    });

    it("propagates a missing diagram version as ApiError", async () => {
        mockResponse(
            {
                error_code: "bpmn_diagram_version_not_found",
                error: "Version not found",
            },
            400,
        );
        const request = client().forms.getBpmnDiagram(123, 99);
        await expect(request).rejects.toBeInstanceOf(ApiError);
        await expect(request).rejects.toMatchObject({
            errorCode: ErrorCodeType.BpmnDiagramVersionNotFound,
        });
    });

    it("waits for authentication and follows the API URL from the auth response", async () => {
        const fetchMock = vi
            .spyOn(globalThis, "fetch")
            .mockResolvedValueOnce(
                jsonResponse({
                    access_token: "test-token",
                    api_url: "https://tenant.example.com/v4/",
                    files_url: "https://files.example.com/",
                }),
            )
            .mockResolvedValueOnce(jsonResponse({form_id: 123, versions: []}));
        const authenticated = new PyrusApiClient(
            {login: "test@example.com", security_key: "test-key"},
            {apiUrl, authUrl: "https://auth.example.com/v4"},
        );
        await authenticated.forms.getBpmnVersions({id: 123});
        expect(fetchMock.mock.calls[0][0]).toBe(
            "https://auth.example.com/v4/auth",
        );
        expect(fetchMock.mock.calls[1][0]).toBe(
            "https://tenant.example.com/v4/forms/123/bpmn",
        );
        expect(fetchMock.mock.calls[1][1]!.headers).toMatchObject({
            Authorization: "Bearer test-token",
        });
    });
});
