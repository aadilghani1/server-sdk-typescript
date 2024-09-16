/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

/**
 * These are the options for the assistant's voice.
 */
export type CreateAssistantDtoVoice =
    | Vapi.CreateAssistantDtoVoice.Azure
    | Vapi.CreateAssistantDtoVoice.Cartesia
    | Vapi.CreateAssistantDtoVoice.Deepgram
    | Vapi.CreateAssistantDtoVoice._11Labs
    | Vapi.CreateAssistantDtoVoice.Lmnt
    | Vapi.CreateAssistantDtoVoice.Neets
    | Vapi.CreateAssistantDtoVoice.Openai
    | Vapi.CreateAssistantDtoVoice.Playht
    | Vapi.CreateAssistantDtoVoice.RimeAi;

export declare namespace CreateAssistantDtoVoice {
    interface Azure extends Vapi.AzureVoice {
        provider: "azure";
    }

    interface Cartesia extends Vapi.CartesiaVoice {
        provider: "cartesia";
    }

    interface Deepgram extends Vapi.DeepgramVoice {
        provider: "deepgram";
    }

    interface _11Labs extends Vapi.ElevenLabsVoice {
        provider: "11labs";
    }

    interface Lmnt extends Vapi.LmntVoice {
        provider: "lmnt";
    }

    interface Neets extends Vapi.NeetsVoice {
        provider: "neets";
    }

    interface Openai extends Vapi.OpenAiVoice {
        provider: "openai";
    }

    interface Playht extends Vapi.PlayHtVoice {
        provider: "playht";
    }

    interface RimeAi extends Vapi.RimeAiVoice {
        provider: "rime-ai";
    }
}