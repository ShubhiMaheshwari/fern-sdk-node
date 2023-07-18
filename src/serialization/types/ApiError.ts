/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ShubhiMaheshwariApi from "../../api";
import * as core from "../../core";

export const ApiError: core.serialization.ObjectSchema<serializers.ApiError.Raw, ShubhiMaheshwariApi.ApiError> =
    core.serialization.object({
        message: core.serialization.string().optional(),
        code: core.serialization.string().optional(),
        type: core.serialization.stringLiteral("api_error").optional(),
    });

export declare namespace ApiError {
    interface Raw {
        message?: string | null;
        code?: string | null;
        type?: "api_error" | null;
    }
}
