/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ShubhiMaheshwariApi from "../..";

export interface FetchPgReconRequest {
    /**
     * application/json
     */
    accept?: string;
    /**
     * To fetch the next set of settlements, pass the cursor received in the response to the next API call.
     *  To receive the data for the first time, pass the cursor as null.
     *  Limit would be number of settlements that you want to receive.
     */
    pagination: ShubhiMaheshwariApi.FetchPgReconRequestPagination;
    filters: ShubhiMaheshwariApi.FetchPgReconRequestFilters;
}
