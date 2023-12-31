/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ShubhiMaheshwariApi from "../../api";
import * as core from "../../core";

export const OtpResponseEntityAuthenticateStatus: core.serialization.Schema<
    serializers.OtpResponseEntityAuthenticateStatus.Raw,
    ShubhiMaheshwariApi.OtpResponseEntityAuthenticateStatus
> = core.serialization.enum_(["FAILED", "SUCCESS"]);

export declare namespace OtpResponseEntityAuthenticateStatus {
    type Raw = "FAILED" | "SUCCESS";
}
