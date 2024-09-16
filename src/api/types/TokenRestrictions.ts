/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface TokenRestrictions {
    /** This determines whether the token is enabled or disabled. Default is true, it's enabled. */
    enabled?: boolean;
    /**
     * This determines the allowed origins for this token. Validates the `Origin` header. Default is any origin.
     *
     * Only relevant for `public` tokens.
     */
    allowedOrigins?: string[];
    /**
     * This determines which assistantIds can be used when creating a call. Default is any assistantId.
     *
     * Only relevant for `public` tokens.
     */
    allowedAssistantIds?: string[];
    /**
     * This determines whether transient assistants can be used when creating a call. Default is true.
     *
     * If `allowedAssistantIds` is provided, this is automatically false.
     *
     * Only relevant for `public` tokens.
     */
    allowTransientAssistant?: boolean;
}