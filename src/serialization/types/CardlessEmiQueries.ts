/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ShubhiMaheshwariApi from "../../api";
import * as core from "../../core";

export const CardlessEmiQueries: core.serialization.ObjectSchema<
    serializers.CardlessEmiQueries.Raw,
    ShubhiMaheshwariApi.CardlessEmiQueries
> = core.serialization.object({
    orderId: core.serialization.property("order_id", core.serialization.string().optional()),
    amount: core.serialization.number().optional(),
    customerDetails: core.serialization.property(
        "customer_details",
        core.serialization.lazyObject(async () => (await import("..")).CustomerDetailsCardlessEmi).optional()
    ),
});

export declare namespace CardlessEmiQueries {
    interface Raw {
        order_id?: string | null;
        amount?: number | null;
        customer_details?: serializers.CustomerDetailsCardlessEmi.Raw | null;
    }
}