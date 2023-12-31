/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ShubhiMaheshwariApi from "../../api";
import * as core from "../../core";

export const Card: core.serialization.ObjectSchema<serializers.Card.Raw, ShubhiMaheshwariApi.Card> =
    core.serialization.object({
        channel: core.serialization.lazy(async () => (await import("..")).CardChannel).optional(),
        cardNumber: core.serialization.property("card_number", core.serialization.string().optional()),
        cardHolderName: core.serialization.property("card_holder_name", core.serialization.string().optional()),
        cardExpiryMm: core.serialization.property("card_expiry_mm", core.serialization.string().optional()),
        cardExpiryYy: core.serialization.property("card_expiry_yy", core.serialization.string().optional()),
        cardCvv: core.serialization.property("card_cvv", core.serialization.string().optional()),
        instrumentId: core.serialization.property("instrument_id", core.serialization.string().optional()),
        cryptogram: core.serialization.string().optional(),
        tokenRequestorId: core.serialization.property("token_requestor_id", core.serialization.string().optional()),
        cardDisplay: core.serialization.property("card_display", core.serialization.string().optional()),
        cardAlias: core.serialization.property("card_alias", core.serialization.string().optional()),
        cardBankName: core.serialization.property(
            "card_bank_name",
            core.serialization.lazy(async () => (await import("..")).CardCardBankName).optional()
        ),
        emiTenure: core.serialization.property("emi_tenure", core.serialization.number().optional()),
    });

export declare namespace Card {
    interface Raw {
        channel?: serializers.CardChannel.Raw | null;
        card_number?: string | null;
        card_holder_name?: string | null;
        card_expiry_mm?: string | null;
        card_expiry_yy?: string | null;
        card_cvv?: string | null;
        instrument_id?: string | null;
        cryptogram?: string | null;
        token_requestor_id?: string | null;
        card_display?: string | null;
        card_alias?: string | null;
        card_bank_name?: serializers.CardCardBankName.Raw | null;
        emi_tenure?: number | null;
    }
}
