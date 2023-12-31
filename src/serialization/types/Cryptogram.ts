/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ShubhiMaheshwariApi from "../../api";
import * as core from "../../core";

export const Cryptogram: core.serialization.ObjectSchema<serializers.Cryptogram.Raw, ShubhiMaheshwariApi.Cryptogram> =
    core.serialization.object({
        instrumentId: core.serialization.property("instrument_id", core.serialization.string().optional()),
        tokenRequestorId: core.serialization.property("token_requestor_id", core.serialization.string().optional()),
        cardNumber: core.serialization.property("card_number", core.serialization.string().optional()),
        cardExpiryMm: core.serialization.property("card_expiry_mm", core.serialization.string().optional()),
        cardExpiryYy: core.serialization.property("card_expiry_yy", core.serialization.string().optional()),
        cryptogram: core.serialization.string().optional(),
        cardDisplay: core.serialization.property("card_display", core.serialization.string().optional()),
    });

export declare namespace Cryptogram {
    interface Raw {
        instrument_id?: string | null;
        token_requestor_id?: string | null;
        card_number?: string | null;
        card_expiry_mm?: string | null;
        card_expiry_yy?: string | null;
        cryptogram?: string | null;
        card_display?: string | null;
    }
}
