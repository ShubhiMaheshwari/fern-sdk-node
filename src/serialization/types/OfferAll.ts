/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ShubhiMaheshwariApi from "../../api";
import * as core from "../../core";

export const OfferAll: core.serialization.ObjectSchema<serializers.OfferAll.Raw, ShubhiMaheshwariApi.OfferAll> =
    core.serialization.object({
        all: core.serialization.lazy(async () => (await import("..")).All),
    });

export declare namespace OfferAll {
    interface Raw {
        all: serializers.All.Raw;
    }
}