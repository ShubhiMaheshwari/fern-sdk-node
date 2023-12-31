/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as ShubhiMaheshwariApi from "../../..";
import * as serializers from "../../../../serialization";
import urlJoin from "url-join";
import * as errors from "../../../../errors";

export declare namespace Authentication {
    interface Options {
        environment: core.Supplier<string>;
        clientId?: core.Supplier<string | undefined>;
        clientSecret?: core.Supplier<string | undefined>;
        apiVersion?: core.Supplier<string | undefined>;
    }
}

/**
 * The Authentication API allows merchants to show a native screen and capture OTP on their own page and submit to Cashfree. This feature is only available on request.
 */
export class Authentication {
    constructor(protected readonly options: Authentication.Options) {}

    /**
     * If you accept OTP on your own page, you can use the below API to send OTP to Cashfree.
     */
    public async otpRequest(
        paymentId: string,
        request: ShubhiMaheshwariApi.OtpRequest
    ): Promise<ShubhiMaheshwariApi.OtpResponseEntity> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this.options.environment), `orders/pay/authenticate/${paymentId}`),
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
            body: await serializers.OtpRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.OtpResponseEntity.parseOrThrow(_response.body, {
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
