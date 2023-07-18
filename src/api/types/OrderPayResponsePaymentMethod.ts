/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * One of ["upi", "netbanking", "card", "app", "cardless_emi", "paylater"]
 */
export type OrderPayResponsePaymentMethod = "netbanking" | "card" | "upi" | "app" | "cardless_emi" | "paylater";

export const OrderPayResponsePaymentMethod = {
    Netbanking: "netbanking",
    Card: "card",
    Upi: "upi",
    App: "app",
    CardlessEmi: "cardless_emi",
    Paylater: "paylater",
} as const;
