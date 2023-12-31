/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ShubhiMaheshwariApi from "../../api";
import * as core from "../../core";

export const PaylaterEntity: core.serialization.ObjectSchema<
    serializers.PaylaterEntity.Raw,
    ShubhiMaheshwariApi.PaylaterEntity
> = core.serialization.object({
    paymentMethod: core.serialization.property("payment_method", core.serialization.string().optional()),
});

export declare namespace PaylaterEntity {
    interface Raw {
        payment_method?: string | null;
    }
}
