/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ShubhiMaheshwariApi from "../../api";
import * as core from "../../core";

export const OrderPayRequestPaymentMethod: core.serialization.Schema<
    serializers.OrderPayRequestPaymentMethod.Raw,
    ShubhiMaheshwariApi.OrderPayRequestPaymentMethod
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazyObject(async () => (await import("..")).CardPaymentMethod),
    core.serialization.lazyObject(async () => (await import("..")).UpiPaymentMethod),
    core.serialization.lazyObject(async () => (await import("..")).NetBankingPaymentMethod),
    core.serialization.lazyObject(async () => (await import("..")).AppPaymentMethod),
    core.serialization.lazyObject(async () => (await import("..")).CardEmiPaymentMethod),
    core.serialization.lazyObject(async () => (await import("..")).CardlessEmiPaymentMethod),
    core.serialization.lazyObject(async () => (await import("..")).PaylaterPaymentMethod),
]);

export declare namespace OrderPayRequestPaymentMethod {
    type Raw =
        | serializers.CardPaymentMethod.Raw
        | serializers.UpiPaymentMethod.Raw
        | serializers.NetBankingPaymentMethod.Raw
        | serializers.AppPaymentMethod.Raw
        | serializers.CardEmiPaymentMethod.Raw
        | serializers.CardlessEmiPaymentMethod.Raw
        | serializers.PaylaterPaymentMethod.Raw;
}