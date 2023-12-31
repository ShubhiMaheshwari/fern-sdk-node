/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ShubhiMaheshwariApi from "../../api";
import * as core from "../../core";

export const ErrorDetailsInPaymentsEntity: core.serialization.ObjectSchema<
    serializers.ErrorDetailsInPaymentsEntity.Raw,
    ShubhiMaheshwariApi.ErrorDetailsInPaymentsEntity
> = core.serialization.object({
    errorCode: core.serialization.property("error_code", core.serialization.string().optional()),
    errorDescription: core.serialization.property("error_description", core.serialization.string().optional()),
    errorReason: core.serialization.property("error_reason", core.serialization.string().optional()),
    errorSource: core.serialization.property("error_source", core.serialization.string().optional()),
});

export declare namespace ErrorDetailsInPaymentsEntity {
    interface Raw {
        error_code?: string | null;
        error_description?: string | null;
        error_reason?: string | null;
        error_source?: string | null;
    }
}
