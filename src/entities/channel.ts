import {ChannelType} from "../enums/channelType";
import {ChannelDirection} from "../enums/channelDirection";
import {ChannelUser} from "./channelUser";

export type Channel = {
    type: ChannelType;
    phone?: string;
    direction?: ChannelDirection;
    to?: ChannelUser;
    from?: ChannelUser;
    integration_id?: number;
};
