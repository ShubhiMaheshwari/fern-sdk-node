/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as ShubhiMaheshwariApi from "../../..";
import * as serializers from "../../../../serialization";
import urlJoin from "url-join";
import * as errors from "../../../../errors";

export declare namespace Orders {
    interface Options {
        environment: core.Supplier<string>;
        clientId?: core.Supplier<string | undefined>;
        clientSecret?: core.Supplier<string | undefined>;
        apiVersion?: core.Supplier<string | undefined>;
    }
}

export class Orders {
    constructor(protected readonly options: Orders.Options) {}

    /**
     * Use this API to create orders with Cashfree from your backend and get the payment link. To use this API S2S flag needs to be enabled from the backend. In case you want to use the cards payment option the PCI DSS flag is required, for more information email us at "care@cashfree.com".
     * @throws {@link ShubhiMaheshwariApi.UnauthorizedError}
     * @throws {@link ShubhiMaheshwariApi.TooManyRequestsError}
     * @throws {@link ShubhiMaheshwariApi.InternalServerError}
     */
    public async createOrder(
        request: ShubhiMaheshwariApi.CreateOrderBackendRequest
    ): Promise<ShubhiMaheshwariApi.OrdersEntity> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this.options.environment), "orders"),
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
            },
            contentType: "application/json",
            body: await serializers.CreateOrderBackendRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.OrdersEntity.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new ShubhiMaheshwariApi.UnauthorizedError(
                        await serializers.AuthenticationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 429:
                    throw new ShubhiMaheshwariApi.TooManyRequestsError(
                        await serializers.RateLimitError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new ShubhiMaheshwariApi.InternalServerError(
                        await serializers.ApiError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.ShubhiMaheshwariApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
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
     * Use this API when you have already created the orders and want Cashfree to process the payment. To use this API S2S flag needs to be enabled from the backend. In case you want to use the cards payment option the PCI DSS flag is required, for more information send an email to "care@cashfree.com".
     * @throws {@link ShubhiMaheshwariApi.TooManyRequestsError}
     * @throws {@link ShubhiMaheshwariApi.InternalServerError}
     */
    public async orderPay(request: ShubhiMaheshwariApi.OrderPayRequest): Promise<ShubhiMaheshwariApi.OrderPayResponse> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this.options.environment), "orders/sessions"),
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
            },
            contentType: "application/json",
            body: await serializers.OrderPayRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.OrderPayResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 429:
                    throw new ShubhiMaheshwariApi.TooManyRequestsError(
                        await serializers.RateLimitError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new ShubhiMaheshwariApi.InternalServerError(
                        await serializers.ApiError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.ShubhiMaheshwariApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
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
     * Use this API to capture or void a preauthorized payment
     */
    public async preauthorization(
        orderId: string,
        request: ShubhiMaheshwariApi.AuthorizationRequest = {}
    ): Promise<ShubhiMaheshwariApi.PaymentsEntity> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this.options.environment), `orders/${orderId}/authorization`),
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
            },
            contentType: "application/json",
            body: await serializers.AuthorizationRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.PaymentsEntity.parseOrThrow(_response.body, {
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
     * Use this API to view all details of an order.
     */
    public async getOrder(orderId: string): Promise<ShubhiMaheshwariApi.OrdersEntity> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this.options.environment), `orders/${orderId}`),
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
                "X-Fern-SDK-Version": "0.0.20",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.OrdersEntity.parseOrThrow(_response.body, {
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
