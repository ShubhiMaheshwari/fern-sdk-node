/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ShubhiMaheshwariApi from "../../api";
import * as core from "../../core";

export const OfferValidations: core.serialization.ObjectSchema<
    serializers.OfferValidations.Raw,
    ShubhiMaheshwariApi.OfferValidations
> = core.serialization.object({
    minAmount: core.serialization.property("min_amount", core.serialization.string().optional()),
    paymentMethod: core.serialization.property(
        "payment_method",
        core.serialization.lazy(async () => (await import("..")).OfferValidationsPaymentMethod)
    ),
    maxAllowed: core.serialization.property("max_allowed", core.serialization.string()),
});

export declare namespace OfferValidations {
    interface Raw {
        min_amount?: string | null;
        payment_method: serializers.OfferValidationsPaymentMethod.Raw;
        max_allowed: string;
    }
}
