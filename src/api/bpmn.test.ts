import {afterEach, describe, expect, it, vi} from "vitest";
import {
    BpmnConditionType,
    BpmnFieldUpdateDirection,
    BpmnNodeType,
    PyrusApiClient,
} from "../../index";
import type {
    BpmnFrame,
    BpmnSubprocessFieldMapping,
    BpmnWorkflowByDepartmentColumn,
    BpmnWorkflowCatalogColumn,
    FormBpmnDiagramResponse,
} from "../../index";

import type {Person} from "../entities/person";

const apiUrl = "https://api.example.com/v4";
const person: Person = {
    id: 7,
    first_name: "Test",
    last_name: "User",
    type: "user",
    email: "test@example.com",
    position: "",
    skype: "",
    phone: "",
    banned: false,
};
const client = () =>
    new PyrusApiClient("test-token", {apiUrl, authUrl: apiUrl});

function jsonResponse(body: unknown) {
    return new Response(JSON.stringify(body), {
        headers: {"Content-Type": "application/json"},
    });
}

afterEach(() => vi.restoreAllMocks());

describe("BPMN response contracts", () => {
    it("accepts omitted false flags and visual properties in server JSON", async () => {
        const mapping: BpmnSubprocessFieldMapping = {
            local_id: 1,
            subprocess_field_local_id: 2,
            direction: BpmnFieldUpdateDirection.MainToSubprocess,
        };
        const catalog: BpmnWorkflowCatalogColumn = {
            catalog_id: 8,
            column_id: 1,
        };
        const department: BpmnWorkflowByDepartmentColumn = {
            catalog_id: 9,
            column_id: 2,
            contact_field_id: 3,
        };
        const frame: BpmnFrame = {id: 1};
        const diagram: FormBpmnDiagramResponse = {
            form_id: 123,
            bpmn_version: 0,
            author: person,
            nodes: [
                {
                    id: 0,
                    node_type: BpmnNodeType.Start,
                    flows: [{id: 1, to_node_id: 1}],
                },
                {
                    id: 1,
                    node_type: BpmnNodeType.Subprocess,
                    participant: {
                        workflow_catalog_column: catalog,
                        workflow_by_department_column: department,
                    },
                    subprocess_configuration: {
                        subprocess_form_id: 456,
                        wait_until_subprocess_finished: false,
                        field_mappings: [mapping],
                        update_main_fields_mode: "Immediately",
                        finish_subprocess_tasks_when_main_is_finished: false,
                        map_changes_only_on_subprocess_step: false,
                    },
                },
            ],
            frames: [frame],
        };
        vi.spyOn(globalThis, "fetch").mockResolvedValue(jsonResponse(diagram));
        const result = await client().forms.getBpmnDiagram(123, 0);
        expect(result).toEqual(diagram);
        expect(result.nodes![0].flows![0].is_default).toBeUndefined();
        const config = result.nodes![1].subprocess_configuration!;
        expect(config.field_mappings![0].is_constant).toBeUndefined();
        expect(config.wait_until_subprocess_finished).toBe(false);
        expect(result.author!.id).toBe(person.id);
    });

    it("reads all C# diagram branches without converting IDs into Bundle codes", async () => {
        const condition = {
            field_id: 2,
            condition_type: BpmnConditionType.Equals,
            value: "3",
        };
        const diagram: FormBpmnDiagramResponse = {
            form_id: 123,
            bpmn_version: 2,
            active_bpmn_version: 1,
            active_task_nodes: [0, 4],
            deleted_nodes: [
                {
                    id: 4,
                    node_type: "Activity",
                    task_status: 12,
                    deleted_flows: [{id: 9, to_node_id: 5}],
                },
            ],
            field_visibility_conditions: [{field_id: 7, condition}],
            frames: [{id: 1, position: {x: 0, y: -10}, size: {w: 100, h: 200}}],
            nodes: [
                {
                    id: 0,
                    node_type: "Timer",
                    reference_node_id: 4,
                    flow_group_id: 0,
                    timer: {
                        mode: "RelativeOrgWorkTime",
                        days: 0,
                        hours: 1,
                        minutes: 30,
                    },
                    awaiting_statuses: [12],
                    actions: ["Approve", "Sign"],
                    participant: {
                        person,
                        contact_field_id: 5,
                        contact_field_form_field_id: 6,
                        queue_node_id: 0,
                    },
                    flows: [
                        {
                            id: 1,
                            to_node_id: 4,
                            is_default: true,
                            vertex_no: 0,
                            to_vertex_no: 2,
                            hint_position: {x: 20, y: 30},
                            condition,
                        },
                    ],
                },
            ],
        };
        vi.spyOn(globalThis, "fetch").mockResolvedValue(jsonResponse(diagram));
        expect(await client().forms.getBpmnDiagram(123, 2)).toEqual(diagram);
    });

    it("returns an empty version list with no active version", async () => {
        vi.spyOn(globalThis, "fetch").mockResolvedValue(
            jsonResponse({form_id: 123, versions: []}),
        );
        const result = await client().forms.getBpmnVersions({id: 123});
        expect(result.versions).toEqual([]);
        expect(result.active_bpmn_version).toBeUndefined();
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
