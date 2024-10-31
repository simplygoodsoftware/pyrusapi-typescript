export const ListType = {
    Private: "private",
    OrganizationWide: "org_wide",
} as const;

export type ListType = typeof ListType[keyof typeof ListType];
