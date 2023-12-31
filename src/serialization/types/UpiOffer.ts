/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ShubhiMaheshwariApi from "../../api";
import * as core from "../../core";

export const UpiOffer: core.serialization.Schema<serializers.UpiOffer.Raw, ShubhiMaheshwariApi.UpiOffer> =
    core.serialization.record(core.serialization.string(), core.serialization.unknown());

export declare namespace UpiOffer {
    type Raw = Record<string, unknown>;
}
