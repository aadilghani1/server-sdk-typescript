/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../../../index";

export type UpdateBlockDtoMessagesItem =
    | Vapi.UpdateBlockDtoMessagesItem.BlockStart
    | Vapi.UpdateBlockDtoMessagesItem.BlockComplete;

export declare namespace UpdateBlockDtoMessagesItem {
    interface BlockStart extends Vapi.BlockStartMessage {
        type: "block-start";
    }

    interface BlockComplete extends Vapi.BlockCompleteMessage {
        type: "block-complete";
    }
}