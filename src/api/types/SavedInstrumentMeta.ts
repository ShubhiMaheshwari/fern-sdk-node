/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface SavedInstrumentMeta {
    /** card scheme/network of the saved card */
    cardNetwork?: string;
    /** Issuing bank name of saved card */
    cardBankName?: string;
    /** Issuing country of saved card */
    cardCountry?: string;
    /** Type of saved card */
    cardType?: string;
    cardTokenDetails?: Record<string, unknown>;
}
