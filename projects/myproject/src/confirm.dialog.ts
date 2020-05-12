import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

import { AUDialogContext, ConfirmOptions } from "./types";

import { AbstractConfirmDialog } from "./confirm.dialog.abstract";

@Component({
    templateUrl: "./confirm.dialog.html"
})
export class ConfirmDialog extends AbstractConfirmDialog {
    constructor(
        private dialogRef: MatDialogRef<ConfirmDialog>,
        @Inject(MAT_DIALOG_DATA)
        context: AUDialogContext<boolean, ConfirmOptions>
    ) {
        super(context);
    }

    close(value: boolean = false) {
        this.dialogRef.close(value);
    }
}
