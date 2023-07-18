/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * This can be one of ["SUCCESS", "PENDING", "CANCELLED", "ONHOLD", "FAILED"]
 */
export type RefundsEntityRefundStatus = "SUCCESS" | "PENDING" | "CANCELLED" | "ONHOLD";

export const RefundsEntityRefundStatus = {
    Success: "SUCCESS",
    Pending: "PENDING",
    Cancelled: "CANCELLED",
    Onhold: "ONHOLD",
} as const;
