/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as ShubhiMaheshwariApi from "../../../../api";
import * as core from "../../../../core";

export const Response: core.serialization.Schema<
    serializers.paymentLinks.getPaymentLinkOrders.Response.Raw,
    ShubhiMaheshwariApi.LinkOrdersResponse[]
> = core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).LinkOrdersResponse));

export declare namespace Response {
    type Raw = serializers.LinkOrdersResponse.Raw[];
}
