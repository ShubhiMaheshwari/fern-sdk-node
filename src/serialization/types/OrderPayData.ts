/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ShubhiMaheshwariApi from "../../api";
import * as core from "../../core";

export const OrderPayData: core.serialization.ObjectSchema<
    serializers.OrderPayData.Raw,
    ShubhiMaheshwariApi.OrderPayData
> = core.serialization.object({
    url: core.serialization.string().optional(),
    payload: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    contentType: core.serialization.property("content_type", core.serialization.string().optional()),
    method: core.serialization.string().optional(),
});

export declare namespace OrderPayData {
    interface Raw {
        url?: string | null;
        payload?: Record<string, unknown> | null;
        content_type?: string | null;
        method?: string | null;
    }
}