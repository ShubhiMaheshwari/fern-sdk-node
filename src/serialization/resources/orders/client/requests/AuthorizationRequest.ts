/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as ShubhiMaheshwariApi from "../../../../../api";
import * as core from "../../../../../core";

export const AuthorizationRequest: core.serialization.Schema<
    serializers.AuthorizationRequest.Raw,
    ShubhiMaheshwariApi.AuthorizationRequest
> = core.serialization.object({
    action: core.serialization.lazy(async () => (await import("../../../..")).AuthorizationRequestAction).optional(),
    amount: core.serialization.number().optional(),
});

export declare namespace AuthorizationRequest {
    interface Raw {
        action?: serializers.AuthorizationRequestAction.Raw | null;
        amount?: number | null;
    }
}
