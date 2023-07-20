/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ShubhiMaheshwariApi from "../../api";
import * as core from "../../core";

export const FetchAllSavedInstrumentsInstrumentStatus: core.serialization.Schema<
    serializers.FetchAllSavedInstrumentsInstrumentStatus.Raw,
    ShubhiMaheshwariApi.FetchAllSavedInstrumentsInstrumentStatus
> = core.serialization.enum_(["ACTIVE", "INACTIVE"]);

export declare namespace FetchAllSavedInstrumentsInstrumentStatus {
    type Raw = "ACTIVE" | "INACTIVE";
}
