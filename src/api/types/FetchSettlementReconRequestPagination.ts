/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * To fetch the next set of settlements, pass the cursor received in the response to the next API call.
 *  To receive the data for the first time, pass the cursor as null.
 *  Limit would be number of settlements that you want to receive.
 */
export interface FetchSettlementReconRequestPagination {
    /** The number of settlements you want to fetch. Maximum limit is 1000, default value is 10. */
    limit: number;
    /** Specifies from where the next set of settlement details should be fetched. */
    cursor?: string;
}
