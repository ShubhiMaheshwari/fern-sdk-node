/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as ShubhiMaheshwariApi from "../../../../../api";
import * as core from "../../../../../core";

export const OrderPayRequest: core.serialization.Schema<
    serializers.OrderPayRequest.Raw,
    ShubhiMaheshwariApi.OrderPayRequest
> = core.serialization.object({
    paymentSessionId: core.serialization.property("payment_session_id", core.serialization.string()),
    paymentMethod: core.serialization.property(
        "payment_method",
        core.serialization.lazy(async () => (await import("../../../..")).OrderPayRequestPaymentMethod)
    ),
    saveInstrument: core.serialization.property("save_instrument", core.serialization.boolean().optional()),
    offerId: core.serialization.property("offer_id", core.serialization.string().optional()),
});

export declare namespace OrderPayRequest {
    interface Raw {
        payment_session_id: string;
        payment_method: serializers.OrderPayRequestPaymentMethod.Raw;
        save_instrument?: boolean | null;
        offer_id?: string | null;
    }
}