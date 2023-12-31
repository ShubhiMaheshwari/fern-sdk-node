/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ShubhiMaheshwariApi from "../../api";
import * as core from "../../core";

export const CardlessEmiProvider: core.serialization.Schema<
    serializers.CardlessEmiProvider.Raw,
    ShubhiMaheshwariApi.CardlessEmiProvider
> = core.serialization.enum_(["flexmoney", "zestmoney", "hdfc", "icici", "cashe", "idfc", "kotak"]);

export declare namespace CardlessEmiProvider {
    type Raw = "flexmoney" | "zestmoney" | "hdfc" | "icici" | "cashe" | "idfc" | "kotak";
}
