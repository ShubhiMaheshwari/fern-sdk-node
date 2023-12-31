/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Specify the provider through which the payment must be processed.
 */
export type AppProvider =
    | "gpay"
    | "phonepe"
    | "ola"
    | "paytm"
    | "amazon"
    | "airtel"
    | "freecharge"
    | "mobikwik"
    | "jio";

export const AppProvider = {
    Gpay: "gpay",
    Phonepe: "phonepe",
    Ola: "ola",
    Paytm: "paytm",
    Amazon: "amazon",
    Airtel: "airtel",
    Freecharge: "freecharge",
    Mobikwik: "mobikwik",
    Jio: "jio",
} as const;
