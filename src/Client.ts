/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "./core";
import * as ShubhiMaheshwariApi from "./api";
import * as serializers from "./serialization";
import urlJoin from "url-join";
import * as errors from "./errors";
import { Orders } from "./api/resources/orders/client/Client";
import { Authentication } from "./api/resources/authentication/client/Client";
import { Payments } from "./api/resources/payments/client/Client";
import { Offers } from "./api/resources/offers/client/Client";
import { EligibilityApIs } from "./api/resources/eligibilityApIs/client/Client";
import { Refunds } from "./api/resources/refunds/client/Client";
import { Settlements } from "./api/resources/settlements/client/Client";
import { PaymentLinks } from "./api/resources/paymentLinks/client/Client";
import { SoftPos } from "./api/resources/softPos/client/Client";
import { TokenVault } from "./api/resources/tokenVault/client/Client";

export declare namespace ShubhiMaheshwariApiClient {
    interface Options {
        environment: core.Supplier<string>;
        clientId?: core.Supplier<string | undefined>;
        clientSecret?: core.Supplier<string | undefined>;
        apiVersion?: core.Supplier<string | undefined>;
    }
}

export class ShubhiMaheshwariApiClient {
    constructor(protected readonly options: ShubhiMaheshwariApiClient.Options) {}

    /**
     * Use this API to get all settlement details by specifying the settlement ID, settlement UTR or date range.
     */
    public async postSettlements(
        request: ShubhiMaheshwariApi.PostSettlementsRequest
    ): Promise<ShubhiMaheshwariApi.FetchSettlement> {
        const { accept, body: _body } = request;
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this.options.environment), "settlements"),
            method: "POST",
            headers: {
                "x-client-id":
                    (await core.Supplier.get(this.options.clientId)) != null
                        ? await core.Supplier.get(this.options.clientId)
                        : undefined,
                "x-client-secret":
                    (await core.Supplier.get(this.options.clientSecret)) != null
                        ? await core.Supplier.get(this.options.clientSecret)
                        : undefined,
                "x-api-version":
                    (await core.Supplier.get(this.options.apiVersion)) != null
                        ? await core.Supplier.get(this.options.apiVersion)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.0.20",
                Accept: accept != null ? accept : undefined,
            },
            contentType: "application/json",
            body: await serializers.FetchSettlementReconRequest.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.FetchSettlement.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.ShubhiMaheshwariApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ShubhiMaheshwariApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ShubhiMaheshwariApiTimeoutError();
            case "unknown":
                throw new errors.ShubhiMaheshwariApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Use this API to get settlement reconciliation details using Settlement ID, settlement UTR or date range.
     */
    public async postSettlementRecon(
        request: ShubhiMaheshwariApi.PostSettlementReconRequest
    ): Promise<ShubhiMaheshwariApi.FetchSettlementRecon> {
        const { accept, body: _body } = request;
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this.options.environment), "settlement/recon"),
            method: "POST",
            headers: {
                "x-client-id":
                    (await core.Supplier.get(this.options.clientId)) != null
                        ? await core.Supplier.get(this.options.clientId)
                        : undefined,
                "x-client-secret":
                    (await core.Supplier.get(this.options.clientSecret)) != null
                        ? await core.Supplier.get(this.options.clientSecret)
                        : undefined,
                "x-api-version":
                    (await core.Supplier.get(this.options.apiVersion)) != null
                        ? await core.Supplier.get(this.options.apiVersion)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.0.20",
                Accept: accept != null ? accept : undefined,
            },
            contentType: "application/json",
            body: await serializers.FetchSettlementReconRequest.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.FetchSettlementRecon.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.ShubhiMaheshwariApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ShubhiMaheshwariApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ShubhiMaheshwariApiTimeoutError();
            case "unknown":
                throw new errors.ShubhiMaheshwariApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Use this API to get the payment gateway reconciliation details with date range.
     */
    public async postRecon(
        request: ShubhiMaheshwariApi.FetchPgReconRequest
    ): Promise<ShubhiMaheshwariApi.FetchPgRecon> {
        const { accept, ..._body } = request;
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this.options.environment), "recon"),
            method: "POST",
            headers: {
                "x-client-id":
                    (await core.Supplier.get(this.options.clientId)) != null
                        ? await core.Supplier.get(this.options.clientId)
                        : undefined,
                "x-client-secret":
                    (await core.Supplier.get(this.options.clientSecret)) != null
                        ? await core.Supplier.get(this.options.clientSecret)
                        : undefined,
                "x-api-version":
                    (await core.Supplier.get(this.options.apiVersion)) != null
                        ? await core.Supplier.get(this.options.apiVersion)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.0.20",
                Accept: accept != null ? accept : undefined,
            },
            contentType: "application/json",
            body: await serializers.FetchPgReconRequest.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.FetchPgRecon.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.ShubhiMaheshwariApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ShubhiMaheshwariApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ShubhiMaheshwariApiTimeoutError();
            case "unknown":
                throw new errors.ShubhiMaheshwariApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected _orders: Orders | undefined;

    public get orders(): Orders {
        return (this._orders ??= new Orders(this.options));
    }

    protected _authentication: Authentication | undefined;

    public get authentication(): Authentication {
        return (this._authentication ??= new Authentication(this.options));
    }

    protected _payments: Payments | undefined;

    public get payments(): Payments {
        return (this._payments ??= new Payments(this.options));
    }

    protected _offers: Offers | undefined;

    public get offers(): Offers {
        return (this._offers ??= new Offers(this.options));
    }

    protected _eligibilityApIs: EligibilityApIs | undefined;

    public get eligibilityApIs(): EligibilityApIs {
        return (this._eligibilityApIs ??= new EligibilityApIs(this.options));
    }

    protected _refunds: Refunds | undefined;

    public get refunds(): Refunds {
        return (this._refunds ??= new Refunds(this.options));
    }

    protected _settlements: Settlements | undefined;

    public get settlements(): Settlements {
        return (this._settlements ??= new Settlements(this.options));
    }

    protected _paymentLinks: PaymentLinks | undefined;

    public get paymentLinks(): PaymentLinks {
        return (this._paymentLinks ??= new PaymentLinks(this.options));
    }

    protected _softPos: SoftPos | undefined;

    public get softPos(): SoftPos {
        return (this._softPos ??= new SoftPos(this.options));
    }

    protected _tokenVault: TokenVault | undefined;

    public get tokenVault(): TokenVault {
        return (this._tokenVault ??= new TokenVault(this.options));
    }
}
