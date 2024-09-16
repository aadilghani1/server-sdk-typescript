/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export type TransferCallToolDestinationsItem =
    | Vapi.TransferCallToolDestinationsItem.Assistant
    | Vapi.TransferCallToolDestinationsItem.Step
    | Vapi.TransferCallToolDestinationsItem.Number
    | Vapi.TransferCallToolDestinationsItem.Sip;

export declare namespace TransferCallToolDestinationsItem {
    interface Assistant extends Vapi.TransferDestinationAssistant {
        type: "assistant";
    }

    interface Step extends Vapi.TransferDestinationStep {
        type: "step";
    }

    interface Number extends Vapi.TransferDestinationNumber {
        type: "number";
    }

    interface Sip extends Vapi.TransferDestinationSip {
        type: "sip";
    }
}