/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ShubhiMaheshwariApi from "../../api";
import * as core from "../../core";

export const CardEmiCardBankName: core.serialization.Schema<
    serializers.CardEmiCardBankName.Raw,
    ShubhiMaheshwariApi.CardEmiCardBankName
> = core.serialization.enum_([
    "hdfc",
    "kotak",
    "icici",
    "rbl",
    "bob",
    "standard chartered",
    "axis",
    "au",
    "yes",
    "sbi",
    "fed",
    "hsbc",
    "citi",
    "amex",
]);

export declare namespace CardEmiCardBankName {
    type Raw =
        | "hdfc"
        | "kotak"
        | "icici"
        | "rbl"
        | "bob"
        | "standard chartered"
        | "axis"
        | "au"
        | "yes"
        | "sbi"
        | "fed"
        | "hsbc"
        | "citi"
        | "amex";
}
