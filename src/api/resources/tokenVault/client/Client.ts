/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as ShubhiMaheshwariApi from "../../..";
import { default as URLSearchParams } from "@ungap/url-search-params";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace TokenVault {
    interface Options {
        environment: core.Supplier<string>;
        clientId?: core.Supplier<string | undefined>;
        clientSecret?: core.Supplier<string | undefined>;
        apiVersion?: core.Supplier<string | undefined>;
    }
}

/**
 * Cashfree's token Vault helps you save cards and tokenize them in a PCI complaint manner. We support creation of network tokens which can be used across acquiring banks
 */
export class TokenVault {
    constructor(protected readonly options: TokenVault.Options) {}

    /**
     * To get all saved instruments for a customer id
     */
    public async fetchAllSavedInstruments(
        customerId: string,
        request: ShubhiMaheshwariApi.FetchAllSavedInstrumentsRequest
    ): Promise<ShubhiMaheshwariApi.FetchAllSavedInstruments[]> {
        const { instrumentType } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("instrument_type", instrumentType);
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this.options.environment), `customers/${customerId}/instruments`),
            method: "GET",
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
                "X-Fern-SDK-Version": "0.0.19",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.tokenVault.fetchAllSavedInstruments.Response.parseOrThrow(_response.body, {
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
     * To get specific saved instrument for a customer id and instrument id
     */
    public async fetchSpecificSavedInstrument(
        customerId: string,
        instrumentId: string
    ): Promise<ShubhiMaheshwariApi.FetchAllSavedInstruments> {
        const _response = await core.fetcher({
            url: urlJoin(
                await core.Supplier.get(this.options.environment),
                `customers/${customerId}/instruments/${instrumentId}`
            ),
            method: "GET",
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
                "X-Fern-SDK-Version": "0.0.19",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.FetchAllSavedInstruments.parseOrThrow(_response.body, {
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
     * To delete a saved instrument for a customer id and instrument id
     */
    public async deleteSpecificSavedInstrument(
        customerId: string,
        instrumentId: string
    ): Promise<ShubhiMaheshwariApi.FetchAllSavedInstruments> {
        const _response = await core.fetcher({
            url: urlJoin(
                await core.Supplier.get(this.options.environment),
                `customers/${customerId}/instruments/${instrumentId}`
            ),
            method: "DELETE",
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
                "X-Fern-SDK-Version": "0.0.19",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.FetchAllSavedInstruments.parseOrThrow(_response.body, {
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
     * To get the card network token, token expiry and cryptogram for a saved instrument using instrument id
     */
    public async fetchCryptogram(customerId: string, instrumentId: string): Promise<ShubhiMaheshwariApi.Cryptogram> {
        const _response = await core.fetcher({
            url: urlJoin(
                await core.Supplier.get(this.options.environment),
                `customers/${customerId}/instruments/${instrumentId}/cryptogram`
            ),
            method: "GET",
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
                "X-Fern-SDK-Version": "0.0.19",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.Cryptogram.parseOrThrow(_response.body, {
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
}
