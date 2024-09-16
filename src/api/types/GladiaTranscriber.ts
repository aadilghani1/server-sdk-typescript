/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface GladiaTranscriber {
    model?: Vapi.GladiaTranscriberModel;
    languageBehaviour?: Vapi.GladiaTranscriberLanguageBehaviour;
    /** Defines the language to use for the transcription. Required when languageBehaviour is 'manual'. */
    language?: Vapi.GladiaTranscriberLanguage;
    /**
     * Provides a custom vocabulary to the model to improve accuracy of transcribing context specific words, technical terms, names, etc. If empty, this argument is ignored.
     * ⚠️ Warning ⚠️: Please be aware that the transcription_hint field has a character limit of 600. If you provide a transcription_hint longer than 600 characters, it will be automatically truncated to meet this limit.
     */
    transcriptionHint?: string;
    /** If prosody is true, you will get a transcription that can contain prosodies i.e. (laugh) (giggles) (malefic laugh) (toss) (music)… Default value is false. */
    prosody?: boolean;
    /** If true, audio will be pre-processed to improve accuracy but latency will increase. Default value is false. */
    audioEnhancer?: boolean;
}