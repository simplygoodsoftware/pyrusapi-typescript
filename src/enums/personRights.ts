export enum PersonRights {
    None = 0x0,
    ManageRoles = 0x1,
    CanSeeAllTasks = 0x2,
    ManagePersonsInOrganization = 0x4,
    EditOrganizationProjects = 0x8,
    EditOrganizationSettings = 0x10,
    DeleteMyTasksAndProjects = 0x20,
    CloseDeleteAnnouncements = 0x40,
    BillsPayment = 0x80,
    InvitePersonsToOrganization = 0x100,
    DeleteOtherMembersTasks = 0x200,
    ManageIntegrationsAndCatalogs = 0x400,
    CreateAnnouncement = 0x800,

    CanDeleteTaskFlagEquivalent = DeleteMyTasksAndProjects |
        DeleteOtherMembersTasks,
    SupervisorRights = ManageRoles |
        ManagePersonsInOrganization |
        EditOrganizationProjects |
        EditOrganizationSettings |
        BillsPayment |
        CloseDeleteAnnouncements,
    MaxAdditionalRights = ManageRoles |
        CanSeeAllTasks |
        ManagePersonsInOrganization |
        EditOrganizationProjects |
        EditOrganizationSettings |
        DeleteMyTasksAndProjects |
        CloseDeleteAnnouncements |
        BillsPayment |
        InvitePersonsToOrganization |
        ManageIntegrationsAndCatalogs |
        DeleteOtherMembersTasks,
    NewOrganizationDefaultRights = DeleteMyTasksAndProjects |
        CreateAnnouncement,

    // Front Rights Set
    UIOrganizationManager = ManagePersonsInOrganization |
        ManageRoles |
        EditOrganizationSettings |
        InvitePersonsToOrganization,
    UIAccountant = BillsPayment,
    UISupervisor = CanSeeAllTasks | EditOrganizationProjects,
    UIConfigurationManager = CloseDeleteAnnouncements |
        DeleteOtherMembersTasks |
        ManageIntegrationsAndCatalogs,
    UIAdministrator = UIOrganizationManager |
        UIAccountant |
        UISupervisor |
        UIConfigurationManager,
}
