/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface ByoPhoneNumber {
    /**
     * This is the fallback destination an inbound call will be transferred to if:
     *
     * 1. `assistantId` is not set
     * 2. `squadId` is not set
     * 3. and, `assistant-request` message to the `serverUrl` fails
     *
     * If this is not set and above conditions are met, the inbound call is hung up with an error message.
     */
    fallbackDestination?: Vapi.ByoPhoneNumberFallbackDestination;
    /**
     * This is the flag to toggle the E164 check for the `number` field. This is an advanced property which should be used if you know your use case requires it.
     *
     * Use cases:
     *
     * - `false`: To allow non-E164 numbers like `+001234567890`, `1234`, or `abc`. This is useful for dialing out to non-E164 numbers on your SIP trunks.
     * - `true` (default): To allow only E164 numbers like `+14155551234`. This is standard for PSTN calls.
     *
     * If `false`, the `number` is still required to only contain alphanumeric characters (regex: `/^\+?[a-zA-Z0-9]+$/`).
     *
     * @default true (E164 check is enabled)
     */
    numberE164CheckEnabled?: boolean;
    /** This is the unique identifier for the phone number. */
    id: string;
    /** This is the unique identifier for the org that this phone number belongs to. */
    orgId: string;
    /** This is the ISO 8601 date-time string of when the phone number was created. */
    createdAt: string;
    /** This is the ISO 8601 date-time string of when the phone number was last updated. */
    updatedAt: string;
    /** This is the name of the phone number. This is just for your own reference. */
    name?: string;
    /**
     * This is the assistant that will be used for incoming calls to this phone number.
     *
     * If neither `assistantId` nor `squadId` is set, `assistant-request` will be sent to your Server URL. Check `ServerMessage` and `ServerMessageResponse` for the shape of the message and response that is expected.
     */
    assistantId?: string;
    /**
     * This is the squad that will be used for incoming calls to this phone number.
     *
     * If neither `assistantId` nor `squadId` is set, `assistant-request` will be sent to your Server URL. Check `ServerMessage` and `ServerMessageResponse` for the shape of the message and response that is expected.
     */
    squadId?: string;
    /**
     * This is the server URL where messages will be sent for calls on this number. This includes the `assistant-request` message.
     *
     * You can see the shape of the messages sent in `ServerMessage`.
     *
     * This overrides the `org.serverUrl`. Order of precedence: tool.server.url > assistant.serverUrl > phoneNumber.serverUrl > org.serverUrl.
     */
    serverUrl?: string;
    /**
     * This is the secret Vapi will send with every message to your server. It's sent as a header called x-vapi-secret.
     *
     * Same precedence logic as serverUrl.
     */
    serverUrlSecret?: string;
    /** This is the number of the customer. */
    number?: string;
    /**
     * This is the credential of your own SIP trunk or Carrier (type `byo-sip-trunk`) which can be used to make calls to this phone number.
     *
     * You can add the SIP trunk or Carrier credential in the Provider Credentials page on the Dashboard to get the credentialId.
     */
    credentialId: string;
}