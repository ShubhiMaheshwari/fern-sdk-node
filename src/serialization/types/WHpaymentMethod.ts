/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ShubhiMaheshwariApi from "../../api";
import * as core from "../../core";

export const WHpaymentMethod: core.serialization.ObjectSchema<
    serializers.WHpaymentMethod.Raw,
    ShubhiMaheshwariApi.WHpaymentMethod
> = core.serialization.object({
    card: core.serialization.lazyObject(async () => (await import("..")).WHcard).optional(),
});

export declare namespace WHpaymentMethod {
    interface Raw {
        card?: serializers.WHcard.Raw | null;
    }
}
