/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface VonageCredential {
    /** This is not returned in the API. */
    vonageApplicationPrivateKey: string;
    provider: "vonage";
    /** This is not returned in the API. */
    apiSecret: string;
    /** This is the unique identifier for the credential. */
    id: string;
    /** This is the unique identifier for the org that this credential belongs to. */
    orgId: string;
    /** This is the ISO 8601 date-time string of when the credential was created. */
    createdAt: string;
    /** This is the ISO 8601 date-time string of when the assistant was last updated. */
    updatedAt: string;
    /**
     * This is the Vonage Application ID for the credential.
     *
     * Only relevant for Vonage credentials.
     */
    vonageApplicationId: string;
    apiKey: string;
}