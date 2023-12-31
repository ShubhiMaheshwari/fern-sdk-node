/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ShubhiMaheshwariApi from "../../../..";

export interface OtpRequest {
    /** OTP to be submitted */
    otp: string;
    /** The action for this workflow. Could be either SUBMIT_OTP or RESEND_OTP */
    action: ShubhiMaheshwariApi.OtpRequestAction;
}
