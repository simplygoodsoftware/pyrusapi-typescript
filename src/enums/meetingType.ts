export const MeetingType = {
    Offline: "offline",
    Zoom: "zoom",
    GoogleMeet: "google_meet",
    YandexTelemost: "yandex_telemost",
} as const;

export type MeetingType = typeof MeetingType[keyof typeof MeetingType];
