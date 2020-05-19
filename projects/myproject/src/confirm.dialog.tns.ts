import { Component } from "@angular/core";

import { ModalDialogParams } from "@nativescript/angular";

import { AbstractConfirmDialog } from "./confirm.dialog.abstract";

@Component({
    templateUrl: "./confirm.dialog.html"
})
export class ConfirmDialog extends AbstractConfirmDialog {
    constructor(private params: ModalDialogParams) {
        super(params.context);
        console.log(params);
    }

    close(value?: boolean) {
        this.params.closeCallback(value);
    }
}
