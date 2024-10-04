export type Role = {
    id: number;
    name: string;
    external_id?: string;
    avatar_id?: number;
    external_avatar_id?: number;
    banned: boolean;
    fired?: boolean;
    member_ids: number[];
};
