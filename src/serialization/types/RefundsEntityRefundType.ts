/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ShubhiMaheshwariApi from "../../api";
import * as core from "../../core";

export const RefundsEntityRefundType: core.serialization.Schema<
    serializers.RefundsEntityRefundType.Raw,
    ShubhiMaheshwariApi.RefundsEntityRefundType
> = core.serialization.enum_(["PAYMENT_AUTO_REFUND", "MERCHANT_INITIATED", "UNRECONCILED_AUTO_REFUND"]);

export declare namespace RefundsEntityRefundType {
    type Raw = "PAYMENT_AUTO_REFUND" | "MERCHANT_INITIATED" | "UNRECONCILED_AUTO_REFUND";
}
