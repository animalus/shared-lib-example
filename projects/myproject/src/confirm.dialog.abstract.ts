import { AUDialogContext, ConfirmOptions } from "./types";

export abstract class AbstractConfirmDialog {
    constructor(public context: AUDialogContext<boolean, ConfirmOptions>) {}

    public abstract close(value?: boolean): void;
}
