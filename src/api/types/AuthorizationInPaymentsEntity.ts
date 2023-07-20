/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ShubhiMaheshwariApi from "..";

/**
 * The authorization details are present for payments which go through the preauthorization workflow. Or else this parameter will be null.
 */
export interface AuthorizationInPaymentsEntity {
    /** One of CAPTURE or VOID */
    action?: ShubhiMaheshwariApi.AuthorizationInPaymentsEntityAction;
    /** One of SUCCESS or PENDING */
    status?: ShubhiMaheshwariApi.AuthorizationInPaymentsEntityStatus;
    /** The captured amount for this authorization request */
    capturedAmount?: number;
    /** Start time of this authorization hold (only for UPI) */
    startTime?: string;
    /** End time of this authorization hold (only for UPI) */
    endTime?: string;
    /** Approve by time as passed in the authorization request (only for UPI) */
    approveBy?: string;
    /** CAPTURE or VOID reference number based on action */
    actionReference?: string;
    /** Time of action (CAPTURE or VOID) */
    actionTime?: string;
}
