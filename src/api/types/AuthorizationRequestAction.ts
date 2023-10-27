/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Type of authorization to run. Can be one of 'CAPTURE' , 'VOID'
 */
export type AuthorizationRequestAction = "CAPTURE" | "VOID";

export const AuthorizationRequestAction = {
    Capture: "CAPTURE",
    Void: "VOID",
} as const;