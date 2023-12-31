/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ShubhiMaheshwariApi from "../../api";
import * as core from "../../core";

export const FetchPgReconDataItem: core.serialization.ObjectSchema<
    serializers.FetchPgReconDataItem.Raw,
    ShubhiMaheshwariApi.FetchPgReconDataItem
> = core.serialization.object({
    eventId: core.serialization.property("event_id", core.serialization.string().optional()),
    eventType: core.serialization.property("event_type", core.serialization.string().optional()),
    eventSettlementAmount: core.serialization.property(
        "event_settlement_amount",
        core.serialization.number().optional()
    ),
    eventAmount: core.serialization.property("event_amount", core.serialization.number().optional()),
    saleType: core.serialization.property("sale_type", core.serialization.string().optional()),
    eventStatus: core.serialization.property("event_status", core.serialization.string().optional()),
    entity: core.serialization.string().optional(),
    eventTime: core.serialization.property("event_time", core.serialization.string().optional()),
    eventCurrency: core.serialization.property("event_currency", core.serialization.string().optional()),
    orderId: core.serialization.property("order_id", core.serialization.string().optional()),
    orderAmount: core.serialization.property("order_amount", core.serialization.number().optional()),
    customerPhone: core.serialization.property("customer_phone", core.serialization.string().optional()),
    customerEmail: core.serialization.property("customer_email", core.serialization.string().optional()),
    customerName: core.serialization.property("customer_name", core.serialization.string().optional()),
    paymentAmount: core.serialization.property("payment_amount", core.serialization.number().optional()),
    paymentUtr: core.serialization.property("payment_utr", core.serialization.string().optional()),
    paymentTime: core.serialization.property("payment_time", core.serialization.string().optional()),
    paymentServiceCharge: core.serialization.property("payment_service_charge", core.serialization.number().optional()),
    paymentServiceTax: core.serialization.property("payment_service_tax", core.serialization.number().optional()),
    cfPaymentId: core.serialization.property("cf_payment_id", core.serialization.number().optional()),
    cfSettlementId: core.serialization.property("cf_settlement_id", core.serialization.number().optional()),
    settlementDate: core.serialization.property("settlement_date", core.serialization.string().optional()),
    settlementUtr: core.serialization.property("settlement_utr", core.serialization.string().optional()),
    splitServiceCharge: core.serialization.property("split_service_charge", core.serialization.number().optional()),
    splitServiceTax: core.serialization.property("split_service_tax", core.serialization.number().optional()),
    vendorCommission: core.serialization.property("vendor_commission", core.serialization.number().optional()),
    closedInFavorOf: core.serialization.property("closed_in_favor_of", core.serialization.string().optional()),
    disputeResolvedOn: core.serialization.property("dispute_resolved_on", core.serialization.string().optional()),
    disputeCategory: core.serialization.property("dispute_category", core.serialization.string().optional()),
    disputeNote: core.serialization.property("dispute_note", core.serialization.string().optional()),
    refundProcessedAt: core.serialization.property("refund_processed_at", core.serialization.string().optional()),
    refundArn: core.serialization.property("refund_arn", core.serialization.string().optional()),
    refundNote: core.serialization.property("refund_note", core.serialization.string().optional()),
    refundId: core.serialization.property("refund_id", core.serialization.string().optional()),
    adjustmentRemarks: core.serialization.property("adjustment_remarks", core.serialization.string().optional()),
    adjustment: core.serialization.number().optional(),
    serviceTax: core.serialization.property("service_tax", core.serialization.number().optional()),
    serviceCharge: core.serialization.property("service_charge", core.serialization.number().optional()),
    amountSettled: core.serialization.property("amount_settled", core.serialization.number().optional()),
    paymentFrom: core.serialization.property("payment_from", core.serialization.string().optional()),
    paymentTill: core.serialization.property("payment_till", core.serialization.string().optional()),
    reason: core.serialization.string().optional(),
    settlementInitiatedOn: core.serialization.property(
        "settlement_initiated_on",
        core.serialization.string().optional()
    ),
    settlementType: core.serialization.property("settlement_type", core.serialization.string().optional()),
    settlementCharge: core.serialization.property("settlement_charge", core.serialization.number().optional()),
    settlementTax: core.serialization.property("settlement_tax", core.serialization.number().optional()),
    remarks: core.serialization.string().optional(),
});

export declare namespace FetchPgReconDataItem {
    interface Raw {
        event_id?: string | null;
        event_type?: string | null;
        event_settlement_amount?: number | null;
        event_amount?: number | null;
        sale_type?: string | null;
        event_status?: string | null;
        entity?: string | null;
        event_time?: string | null;
        event_currency?: string | null;
        order_id?: string | null;
        order_amount?: number | null;
        customer_phone?: string | null;
        customer_email?: string | null;
        customer_name?: string | null;
        payment_amount?: number | null;
        payment_utr?: string | null;
        payment_time?: string | null;
        payment_service_charge?: number | null;
        payment_service_tax?: number | null;
        cf_payment_id?: number | null;
        cf_settlement_id?: number | null;
        settlement_date?: string | null;
        settlement_utr?: string | null;
        split_service_charge?: number | null;
        split_service_tax?: number | null;
        vendor_commission?: number | null;
        closed_in_favor_of?: string | null;
        dispute_resolved_on?: string | null;
        dispute_category?: string | null;
        dispute_note?: string | null;
        refund_processed_at?: string | null;
        refund_arn?: string | null;
        refund_note?: string | null;
        refund_id?: string | null;
        adjustment_remarks?: string | null;
        adjustment?: number | null;
        service_tax?: number | null;
        service_charge?: number | null;
        amount_settled?: number | null;
        payment_from?: string | null;
        payment_till?: string | null;
        reason?: string | null;
        settlement_initiated_on?: string | null;
        settlement_type?: string | null;
        settlement_charge?: number | null;
        settlement_tax?: number | null;
        remarks?: string | null;
    }
}
