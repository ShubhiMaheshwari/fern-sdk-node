/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as ShubhiMaheshwariApi from "../../../../api";
import * as core from "../../../../core";

export const Response: core.serialization.Schema<
    serializers.eligibilityApIs.eligibilityCardlessEmi.Response.Raw,
    ShubhiMaheshwariApi.EligibleCardlessEmiEntity[]
> = core.serialization.list(
    core.serialization.lazyObject(async () => (await import("../../..")).EligibleCardlessEmiEntity)
);

export declare namespace Response {
    type Raw = serializers.EligibleCardlessEmiEntity.Raw[];
}