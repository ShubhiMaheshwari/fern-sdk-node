/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface CreateTerminalRequest {
    /** merchant’s internal terminal id <span style="white-space: nowrap">`<= 100 characters`</span> */
    terminalId?: string;
    /** terminal name to be assigned by merchants <span style="white-space: nowrap">`<= 100 characters`</span> */
    terminalName: string;
    /** phone number assigned to the terminal <span style="white-space: nowrap">`<= 10 characters`</span> */
    terminalPhoneNo: string;
}
