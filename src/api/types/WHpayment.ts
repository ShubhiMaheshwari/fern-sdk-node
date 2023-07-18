/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ShubhiMaheshwariApi from "..";

export interface WHpayment {
    cfPaymentId?: string;
    paymentStatus?: string;
    paymentAmount?: number;
    paymentCurrency?: string;
    paymentMessage?: string;
    paymentTime?: string;
    bankReference?: string;
    authId?: string;
    paymentMethod?: ShubhiMaheshwariApi.WHpaymentMethod;
    paymentGroup?: string;
}