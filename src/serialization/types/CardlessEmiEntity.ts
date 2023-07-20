/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ShubhiMaheshwariApi from "../../api";
import * as core from "../../core";

export const CardlessEmiEntity: core.serialization.ObjectSchema<
    serializers.CardlessEmiEntity.Raw,
    ShubhiMaheshwariApi.CardlessEmiEntity
> = core.serialization.object({
    paymentMethod: core.serialization.property("payment_method", core.serialization.string().optional()),
    emiPlans: core.serialization.property(
        "emi_plans",
        core.serialization
            .list(core.serialization.lazyObject(async () => (await import("..")).EmiPlansArray))
            .optional()
    ),
});

export declare namespace CardlessEmiEntity {
    interface Raw {
        payment_method?: string | null;
        emi_plans?: serializers.EmiPlansArray.Raw[] | null;
    }
}
