/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ShubhiMaheshwariApi from "../../api";
import * as core from "../../core";

export const PaymentUrlObject: core.serialization.ObjectSchema<
    serializers.PaymentUrlObject.Raw,
    ShubhiMaheshwariApi.PaymentUrlObject
> = core.serialization.object({
    url: core.serialization.string().optional(),
});

export declare namespace PaymentUrlObject {
    interface Raw {
        url?: string | null;
    }
}