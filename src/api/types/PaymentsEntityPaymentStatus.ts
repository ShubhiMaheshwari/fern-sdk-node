/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The transaction status can be one of  ["SUCCESS", "NOT_ATTEMPTED", "FAILED", "USER_DROPPED", "VOID", "CANCELLED", "PENDING"]
 */
export type PaymentsEntityPaymentStatus =
    | "SUCCESS"
    | "NOT_ATTEMPTED"
    | "FAILED"
    | "USER_DROPPED"
    | "VOID"
    | "CANCELLED"
    | "PENDING";

export const PaymentsEntityPaymentStatus = {
    Success: "SUCCESS",
    NotAttempted: "NOT_ATTEMPTED",
    Failed: "FAILED",
    UserDropped: "USER_DROPPED",
    Void: "VOID",
    Cancelled: "CANCELLED",
    Pending: "PENDING",
} as const;
