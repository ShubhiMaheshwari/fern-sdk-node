/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "./core";
import { Orders } from "./api/resources/orders/client/Client";

export declare namespace ShubhiMaheshwariApiClient {
    interface Options {
        environment: core.Supplier<string>;
        apiVersion?: core.Supplier<string | undefined>;
    }
}

export class ShubhiMaheshwariApiClient {
    constructor(protected readonly options: ShubhiMaheshwariApiClient.Options) {}

    protected _orders: Orders | undefined;

    public get orders(): Orders {
        return (this._orders ??= new Orders(this.options));
    }
}
