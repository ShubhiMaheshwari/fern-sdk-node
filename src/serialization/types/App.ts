/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as ShubhiMaheshwariApi from "../../api";
import * as core from "../../core";

export const App: core.serialization.ObjectSchema<serializers.App.Raw, ShubhiMaheshwariApi.App> =
    core.serialization.object({
        channel: core.serialization.string(),
        provider: core.serialization.lazy(async () => (await import("..")).AppProvider),
        phone: core.serialization.string(),
    });

export declare namespace App {
    interface Raw {
        channel: string;
        provider: serializers.AppProvider.Raw;
        phone: string;
    }
}
