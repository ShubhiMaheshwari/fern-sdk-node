/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ShubhiMaheshwariApi from "../../api";
import * as core from "../../core";

export const RefundsEntityRefundStatus: core.serialization.Schema<
    serializers.RefundsEntityRefundStatus.Raw,
    ShubhiMaheshwariApi.RefundsEntityRefundStatus
> = core.serialization.enum_(["SUCCESS", "PENDING", "CANCELLED", "ONHOLD"]);

export declare namespace RefundsEntityRefundStatus {
    type Raw = "SUCCESS" | "PENDING" | "CANCELLED" | "ONHOLD";
}
