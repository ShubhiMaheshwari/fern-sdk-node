/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ShubhiMaheshwariApi from "../../api";
import * as core from "../../core";

export const OtpRequestAction: core.serialization.Schema<
    serializers.OtpRequestAction.Raw,
    ShubhiMaheshwariApi.OtpRequestAction
> = core.serialization.enum_(["SUBMIT_OTP", "RESEND_OTP"]);

export declare namespace OtpRequestAction {
    type Raw = "SUBMIT_OTP" | "RESEND_OTP";
}
