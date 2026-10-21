import {afterEach, describe, expect, it, vi} from "vitest";
import {
    BpmnTokenEventType,
    BpmnTokenStatus,
    PyrusApiClient,
    fromJson,
} from "../../index";
import type {
    BotHookRequest,
    BpmnToken,
    BpmnTransition,
    TaskCommentRequest,
} from "../../index";

import type {TaskWithComments} from "../entities/TaskWithComments";

const apiUrl = "https://api.example.com/v4";
const client = () =>
    new PyrusApiClient("test-token", {apiUrl, authUrl: apiUrl});

function mockTask(task: object) {
    return vi.spyOn(globalThis, "fetch").mockResolvedValue(
        new Response(JSON.stringify({task}), {
            headers: {"Content-Type": "application/json"},
        }),
    );
}

afterEach(() => vi.restoreAllMocks());

describe("Task BPMN API", () => {
    it("reads parallel tokens, event dates and consumed/suspended transitions in tasks and bot hooks", async () => {
        const tokens: BpmnToken[] = [
            {
                token_id: 1,
                node_id: 0,
                status: BpmnTokenStatus.Active,
                node_type: "Activity",
                node_name: "Approval",
            },
            {
                token_id: 2,
                node_id: 3,
                status: BpmnTokenStatus.Waiting,
                event_type: BpmnTokenEventType.Timer,
                event_time: new Date("2026-10-21T12:00:00Z"),
            },
        ];
        const transitions: BpmnTransition[] = [
            {token_id: 3},
            {token_id: 4, node_id: 8, status: BpmnTokenStatus.Suspended},
        ];
        const task = {
            id: 123,
            bpmn_version: 0,
            bpmn_suspended: false,
            bpmn_tokens: tokens,
            comments: [{bpmn_transitions: transitions}],
        };
        const fetchMock = mockTask(task);
        const result = (await client().tasks.get({id: 123})).task;
        expect(fetchMock).toHaveBeenCalledWith(
            `${apiUrl}/tasks/123`,
            expect.objectContaining({method: "GET"}),
        );
        expect(result.bpmn_version).toBe(0);
        expect(result.bpmn_suspended).toBe(false);
        expect(result.bpmn_tokens).toEqual(tokens);
        expect(result.bpmn_tokens![1].event_time).toBeInstanceOf(Date);
        expect(result.comments[0].bpmn_transitions).toEqual(transitions);
        const hook = fromJson<BotHookRequest>(
            JSON.stringify({task, event: "comment", task_id: 123}),
        );
        expect(hook.task.bpmn_tokens).toEqual(tokens);
        expect(
            hook.task.comments[0].bpmn_transitions![0].node_id,
        ).toBeUndefined();
    });

    it("accepts ordinary tasks without BPMN data", async () => {
        const task: Partial<TaskWithComments> = {id: 123, comments: []};
        mockTask(task);
        const result = (await client().tasks.get({id: 123})).task;
        expect(result.bpmn_version).toBeUndefined();
        expect(result.bpmn_suspended).toBeUndefined();
        expect(result.bpmn_tokens).toBeUndefined();
    });

    it.each<TaskCommentRequest>([
        {approval_choice: "approved", bpmn_node_id: 0},
        {bpmn_resume_processing: true},
        {
            bpmn_token_moves: [
                {token_id: 0, node_id: 0},
                {token_id: 2, node_id: 3},
            ],
        },
    ])(
        "sends BPMN comment commands with unchanged IDs: %j",
        async (request) => {
            const fetchMock = mockTask({
                id: 123,
                comments: [
                    {
                        bpmn_transitions: [
                            {token_id: 0, node_id: 0, status: "Active"},
                        ],
                    },
                ],
            });
            const result = await client().tasks.addComment(123, request);
            expect(fetchMock).toHaveBeenCalledWith(
                `${apiUrl}/tasks/123/comments`,
                expect.objectContaining({
                    method: "POST",
                    body: JSON.stringify(request),
                }),
            );
            expect(result.task.comments[0].bpmn_transitions![0].node_id).toBe(
                0,
            );
        },
    );
});
