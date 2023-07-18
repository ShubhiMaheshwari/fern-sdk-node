/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ShubhiMaheshwariApi from "../../api";
import * as core from "../../core";

export const CustomerDetails: core.serialization.ObjectSchema<
    serializers.CustomerDetails.Raw,
    ShubhiMaheshwariApi.CustomerDetails
> = core.serialization.object({
    customerId: core.serialization.property("customer_id", core.serialization.string()),
    customerEmail: core.serialization.property("customer_email", core.serialization.string().optional()),
    customerPhone: core.serialization.property("customer_phone", core.serialization.string()),
    customerBankAccountNumber: core.serialization.property(
        "customer_bank_account_number",
        core.serialization.string().optional()
    ),
    customerBankIfsc: core.serialization.property("customer_bank_ifsc", core.serialization.string().optional()),
    customerBankCode: core.serialization.property("customer_bank_code", core.serialization.string().optional()),
});

export declare namespace CustomerDetails {
    interface Raw {
        customer_id: string;
        customer_email?: string | null;
        customer_phone: string;
        customer_bank_account_number?: string | null;
        customer_bank_ifsc?: string | null;
        customer_bank_code?: string | null;
    }
}
