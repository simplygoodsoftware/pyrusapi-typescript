import {AuthRequest} from "../requests/authRequest";
import {BaseApi, BaseApiParams} from "./baseApi";
import {Endpoints} from "../settings/endpoints";
import {AuthResponse} from "../responses/authResponse";
import {Settings} from "../entities/settings";
import {RoleApi} from "./roleApi";
import {defaults} from "../settings/defaults";
import {ProfileApi} from "./profileApi";
import {ContactsApi} from "./contactsApi";
import {FilesApi} from "./filesApi";
import {ListsApi} from "./listsApi";
import {CalendarApi} from "./calendarApi";
import {AnnouncementsApi} from "./announcementsApi";
import {CatalogsApi} from "./catalogsApi";
import {MembersApi} from "./membersApi";
import {TasksApi} from "./tasksApi";
import {FormsApi} from "./formsApi";
import {LogsApi} from "./logsApi";
import {CallApi} from "./callApi";
import {BotApi} from "./botApi";

export class PyrusApiClient extends BaseApi {
    private _role: RoleApi;
    private _profile: ProfileApi;
    private _contacts: ContactsApi;
    private _files: FilesApi;
    private _lists: ListsApi;
    private _calendar: CalendarApi;
    private _announcements: AnnouncementsApi;
    private _catalogs: CatalogsApi;
    private _members: MembersApi;
    private _tasks: TasksApi;
    private _forms: FormsApi;
    private _logs: LogsApi;
    private _call: CallApi;
    private _bot: BotApi;

    /**
     *
     * @param auth
     * can be AuthRequest type or token
     * @param settings
     * connection settings
     */
    constructor(auth: AuthRequest | string, settings?: Settings) {
        const currentSettings = !!settings
            ? {...defaults, ...settings}
            : defaults;

        super({settings: currentSettings});
        if (typeof auth === "string") this._token = auth;
        else this._authRequest = this._authenticateClient(auth);
    }

    private async _authenticateClient(auth: AuthRequest) {
        return this.fetchApi<AuthResponse>(
            this._settings.authUrl + Endpoints.Auth,
            "POST",
            JSON.stringify(auth),
            {
                "Content-Type": "application/json",
            },
        );
    }

    private get initParams(): BaseApiParams {
        return {
            authRequest: this._authRequest,
            token: this._token,
            settings: this._settings,
        };
    }

    public get role() {
        if (!this._role) this._role = new RoleApi(this.initParams);

        return this._role;
    }

    public get profile() {
        if (!this._profile) this._profile = new ProfileApi(this.initParams);

        return this._profile;
    }

    public get contacts() {
        if (!this._contacts) this._contacts = new ContactsApi(this.initParams);

        return this._contacts;
    }

    public get files() {
        if (!this._files) this._files = new FilesApi(this.initParams);

        return this._files;
    }

    public get lists() {
        if (!this._lists) this._lists = new ListsApi(this.initParams);

        return this._lists;
    }

    public get calendar() {
        if (!this._calendar) this._calendar = new CalendarApi(this.initParams);

        return this._calendar;
    }

    public get announcements() {
        if (!this._announcements)
            this._announcements = new AnnouncementsApi(this.initParams);

        return this._announcements;
    }

    public get catalogs() {
        if (!this._catalogs) this._catalogs = new CatalogsApi(this.initParams);

        return this._catalogs;
    }

    public get members() {
        if (!this._members) this._members = new MembersApi(this.initParams);

        return this._members;
    }

    public get tasks() {
        if (!this._tasks) this._tasks = new TasksApi(this.initParams);

        return this._tasks;
    }

    public get forms() {
        if (!this._forms) this._forms = new FormsApi(this.initParams);

        return this._forms;
    }

    public get logs() {
        if (!this._logs) this._logs = new LogsApi(this.initParams);

        return this._logs;
    }

    public get call() {
        if (!this._call) this._call = new CallApi(this.initParams);

        return this._call;
    }

    public get bot() {
        if (!this._bot) this._bot = new BotApi(this.initParams);

        return this._bot;
    }
}
