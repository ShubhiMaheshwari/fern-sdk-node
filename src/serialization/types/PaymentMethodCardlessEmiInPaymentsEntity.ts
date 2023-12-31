/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ShubhiMaheshwariApi from "../../api";
import * as core from "../../core";

export const PaymentMethodCardlessEmiInPaymentsEntity: core.serialization.ObjectSchema<
    serializers.PaymentMethodCardlessEmiInPaymentsEntity.Raw,
    ShubhiMaheshwariApi.PaymentMethodCardlessEmiInPaymentsEntity
> = core.serialization.object({
    channel: core.serialization.string().optional(),
    provider: core.serialization.string().optional(),
    phone: core.serialization.string().optional(),
});

export declare namespace PaymentMethodCardlessEmiInPaymentsEntity {
    interface Raw {
        channel?: string | null;
        provider?: string | null;
        phone?: string | null;
    }
}
