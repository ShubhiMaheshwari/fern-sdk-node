/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ShubhiMaheshwariApi from "../../api";
import * as core from "../../core";

export const PaymentMethodInPaymentsEntityPaymentMethod: core.serialization.Schema<
    serializers.PaymentMethodInPaymentsEntityPaymentMethod.Raw,
    ShubhiMaheshwariApi.PaymentMethodInPaymentsEntityPaymentMethod
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazyObject(async () => (await import("..")).PaymentMethodCardInPaymentsEntity),
    core.serialization.lazyObject(async () => (await import("..")).PaymentMethodNetBankingInPaymentsEntity),
    core.serialization.lazyObject(async () => (await import("..")).PaymentMethodUpiInPaymentsEntity),
    core.serialization.lazyObject(async () => (await import("..")).PaymentMethodAppInPaymentsEntity),
    core.serialization.lazyObject(async () => (await import("..")).PaymentMethodCardlessEmiInPaymentsEntity),
    core.serialization.lazyObject(async () => (await import("..")).PaymentMethodPaylaterInPaymentsEntity),
]);

export declare namespace PaymentMethodInPaymentsEntityPaymentMethod {
    type Raw =
        | serializers.PaymentMethodCardInPaymentsEntity.Raw
        | serializers.PaymentMethodNetBankingInPaymentsEntity.Raw
        | serializers.PaymentMethodUpiInPaymentsEntity.Raw
        | serializers.PaymentMethodAppInPaymentsEntity.Raw
        | serializers.PaymentMethodCardlessEmiInPaymentsEntity.Raw
        | serializers.PaymentMethodPaylaterInPaymentsEntity.Raw;
}
