import {ChannelType} from "../enums/channelType";
import {ChannelUser} from "./channelUser";

export type Channel = {
    type: ChannelType;
    phone?: string;
    direction?: string;
    to?: ChannelUser;
    from?: ChannelUser;
};
