/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as ShubhiMaheshwariApi from "..";

export interface Paylater {
    /** The channel for cardless EMI is always `link` */
    channel?: string;
    /** One of ["kotak", "flexipay", "zestmoney", "lazypay", "olapostpaid","simpl", "freechargepaylater"]. Please note that Flexipay is offered by HDFC bank */
    provider?: ShubhiMaheshwariApi.PaylaterProvider;
    /** Customers phone number for this payment instrument. If the customer is not eligible you will receive a 400 error with type as 'invalid_request_error' and code as 'invalid_request_error' */
    phone?: string;
}
