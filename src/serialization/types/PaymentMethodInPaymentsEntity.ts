/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ShubhiMaheshwariApi from "../../api";
import * as core from "../../core";

export const PaymentMethodInPaymentsEntity: core.serialization.ObjectSchema<
    serializers.PaymentMethodInPaymentsEntity.Raw,
    ShubhiMaheshwariApi.PaymentMethodInPaymentsEntity
> = core.serialization.object({
    paymentMethod: core.serialization.property(
        "payment_method",
        core.serialization.lazy(async () => (await import("..")).PaymentMethodInPaymentsEntityPaymentMethod).optional()
    ),
});

export declare namespace PaymentMethodInPaymentsEntity {
    interface Raw {
        payment_method?: serializers.PaymentMethodInPaymentsEntityPaymentMethod.Raw | null;
    }
}