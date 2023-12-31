/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as ShubhiMaheshwariApi from "../../../../../api";
import * as core from "../../../../../core";

export const EligibilityOffersRequest: core.serialization.Schema<
    serializers.EligibilityOffersRequest.Raw,
    ShubhiMaheshwariApi.EligibilityOffersRequest
> = core.serialization.object({
    queries: core.serialization.lazyObject(async () => (await import("../../../..")).OfferQueries),
    filters: core.serialization.lazyObject(async () => (await import("../../../..")).OfferFilters).optional(),
});

export declare namespace EligibilityOffersRequest {
    interface Raw {
        queries: serializers.OfferQueries.Raw;
        filters?: serializers.OfferFilters.Raw | null;
    }
}
