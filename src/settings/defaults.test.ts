import {afterEach, describe, expect, it, vi} from "vitest";
import {defaults, setDefaults} from "./defaults";
import {PyrusApiClient} from "../api";

const originalDefaults = {...defaults};

afterEach(() => {
    setDefaults(originalDefaults);
    vi.restoreAllMocks();
});

describe("setDefaults", () => {
    it("overrides only the provided fields and trims the trailing slash", () => {
        setDefaults({apiUrl: "https://api.example.com/v4/"});

        expect(defaults.apiUrl).toBe("https://api.example.com/v4");
        // other fields are left untouched
        expect(defaults.authUrl).toBe(originalDefaults.authUrl);
        expect(defaults.filesUrl).toBe(originalDefaults.filesUrl);
    });

    it("ignores empty/undefined values", () => {
        setDefaults({authUrl: "", apiUrl: undefined});

        expect(defaults.authUrl).toBe(originalDefaults.authUrl);
        expect(defaults.apiUrl).toBe(originalDefaults.apiUrl);
    });

    it("a client without settings uses the overridden authUrl", async () => {
        setDefaults({authUrl: "https://accounts.example.com/api/v4"});

        const fetchMock = vi.spyOn(globalThis, "fetch").mockResolvedValue(
            new Response(JSON.stringify({access_token: "t"}), {
                status: 200,
                headers: {"Content-Type": "application/json"},
            }),
        );

        const client = new PyrusApiClient({
            login: "bot@b.com",
            security_key: "key",
        });
        // wait for the auth request started in the constructor
        await (client as any)._authRequest;

        const requestedUrl = fetchMock.mock.calls[0]?.[0] as string;
        expect(requestedUrl).toBe("https://accounts.example.com/api/v4/auth");
    });
});
