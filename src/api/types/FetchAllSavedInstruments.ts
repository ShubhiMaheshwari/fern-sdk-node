/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ShubhiMaheshwariApi from "..";

export interface FetchAllSavedInstruments {
    /** customer_id for which the instrument was saved */
    customerId?: string;
    /** cf_payment_id of the successful transaction done while saving instrument */
    afaReference?: number;
    /** saved instrument id */
    instrumentId?: string;
    instrumentType?: "card";
    /** Unique id for the saved instrument */
    instrumentUid?: string;
    /** masked card number displayed to the customer */
    instrumentDisplay?: string;
    /** Status of the saved instrument. */
    instrumentStatus?: ShubhiMaheshwariApi.FetchAllSavedInstrumentsInstrumentStatus;
    /** Timestamp at which instrument was saved. */
    createdAt?: string;
    instrumentMeta?: ShubhiMaheshwariApi.SavedInstrumentMeta;
}
