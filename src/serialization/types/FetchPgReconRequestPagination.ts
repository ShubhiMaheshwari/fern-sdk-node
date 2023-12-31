/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ShubhiMaheshwariApi from "../../api";
import * as core from "../../core";

export const FetchPgReconRequestPagination: core.serialization.ObjectSchema<
    serializers.FetchPgReconRequestPagination.Raw,
    ShubhiMaheshwariApi.FetchPgReconRequestPagination
> = core.serialization.object({
    limit: core.serialization.number(),
    cursor: core.serialization.string().optional(),
});

export declare namespace FetchPgReconRequestPagination {
    interface Raw {
        limit: number;
        cursor?: string | null;
    }
}
