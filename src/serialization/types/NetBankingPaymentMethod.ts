/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ShubhiMaheshwariApi from "../../api";
import * as core from "../../core";

export const NetBankingPaymentMethod: core.serialization.ObjectSchema<
    serializers.NetBankingPaymentMethod.Raw,
    ShubhiMaheshwariApi.NetBankingPaymentMethod
> = core.serialization.object({
    netbanking: core.serialization.lazyObject(async () => (await import("..")).Netbanking),
});

export declare namespace NetBankingPaymentMethod {
    interface Raw {
        netbanking: serializers.Netbanking.Raw;
    }
}
