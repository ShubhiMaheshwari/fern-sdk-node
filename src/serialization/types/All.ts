/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ShubhiMaheshwariApi from "../../api";
import * as core from "../../core";

export const All: core.serialization.Schema<serializers.All.Raw, ShubhiMaheshwariApi.All> = core.serialization.record(
    core.serialization.string(),
    core.serialization.unknown()
);

export declare namespace All {
    type Raw = Record<string, unknown>;
}
