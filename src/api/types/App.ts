/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ShubhiMaheshwariApi from "..";

export interface App {
    /** Specify the channel through which the payment must be processed. */
    channel: string;
    /** Specify the provider through which the payment must be processed. */
    provider: ShubhiMaheshwariApi.AppProvider;
    /** Customer phone number associated with a wallet for payment. */
    phone: string;
}