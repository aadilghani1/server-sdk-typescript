/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export type WorkflowBlockStepsItem = Vapi.WorkflowBlockStepsItem.Handoff | Vapi.WorkflowBlockStepsItem.Callback;

export declare namespace WorkflowBlockStepsItem {
    interface Handoff extends Vapi.HandoffStep {
        type: "handoff";
    }

    interface Callback extends Vapi.CallbackStep {
        type: "callback";
    }
}