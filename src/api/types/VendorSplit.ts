/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface VendorSplit {
    /** Vendor id created in Cashfree system */
    vendorId?: string;
    /** Amount which will be associated with this vendor */
    amount?: number;
    /** Percentage of order amount which shall get added to vendor account */
    percentage?: number;
}