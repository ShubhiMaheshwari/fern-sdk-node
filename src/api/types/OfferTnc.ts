/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ShubhiMaheshwariApi from "..";

export interface OfferTnc {
    /** TnC Type for the Offer. It can be either `text` or `link` */
    offerTncType: ShubhiMaheshwariApi.OfferTncOfferTncType;
    /** TnC for the Offer. <span style="white-space: nowrap">`<= 100 characters`</span> */
    offerTncValue: string;
}
