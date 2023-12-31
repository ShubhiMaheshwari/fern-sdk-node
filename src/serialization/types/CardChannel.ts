/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ShubhiMaheshwariApi from "../../api";
import * as core from "../../core";

export const CardChannel: core.serialization.Schema<serializers.CardChannel.Raw, ShubhiMaheshwariApi.CardChannel> =
    core.serialization.enum_(["link", "post"]);

export declare namespace CardChannel {
    type Raw = "link" | "post";
}
