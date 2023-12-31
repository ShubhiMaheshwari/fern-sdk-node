/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ShubhiMaheshwariApi from "..";

export interface CashbackDetails {
    /** Type of discount */
    cashbackType?: ShubhiMaheshwariApi.CashbackDetailsCashbackType;
    /** Value of Discount. <span style="white-space: nowrap">`<= 100 characters`</span> */
    cashbackValue?: string;
    /** Maximum Value of Cashback allowed. <span style="white-space: nowrap">`<= 100 characters`</span> */
    maxCashbackAmount: string;
}
