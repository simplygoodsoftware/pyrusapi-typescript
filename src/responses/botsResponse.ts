import {ResponseBase} from "./responseBase";
import {Bot} from "../entities/bot";

export type BotsResponse = ResponseBase & {
    bots: Bot[];
};
