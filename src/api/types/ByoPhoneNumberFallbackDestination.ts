/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

/**
 * This is the fallback destination an inbound call will be transferred to if:
 *
 * 1. `assistantId` is not set
 * 2. `squadId` is not set
 * 3. and, `assistant-request` message to the `serverUrl` fails
 *
 * If this is not set and above conditions are met, the inbound call is hung up with an error message.
 */
export type ByoPhoneNumberFallbackDestination =
    | Vapi.ByoPhoneNumberFallbackDestination.Number
    | Vapi.ByoPhoneNumberFallbackDestination.Sip;

export declare namespace ByoPhoneNumberFallbackDestination {
    interface Number extends Vapi.TransferDestinationNumber {
        type: "number";
    }

    interface Sip extends Vapi.TransferDestinationSip {
        type: "sip";
    }
}