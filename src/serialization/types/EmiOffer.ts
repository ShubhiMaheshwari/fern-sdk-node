/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ShubhiMaheshwariApi from "../../api";
import * as core from "../../core";

export const EmiOffer: core.serialization.ObjectSchema<serializers.EmiOffer.Raw, ShubhiMaheshwariApi.EmiOffer> =
    core.serialization.object({
        type: core.serialization.string(),
        bankName: core.serialization.property("bank_name", core.serialization.string()),
        tenures: core.serialization
            .list(core.serialization.lazy(async () => (await import("..")).TenuresArray))
            .optional(),
    });

export declare namespace EmiOffer {
    interface Raw {
        type: string;
        bank_name: string;
        tenures?: serializers.TenuresArray.Raw[] | null;
    }
}
