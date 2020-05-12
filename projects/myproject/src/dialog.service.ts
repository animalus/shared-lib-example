import { Injectable } from "@angular/core";

import { MatDialog, MatDialogConfig } from "@angular/material/dialog";

import { AUDialogContext, AUDialogOptions } from "./types";
import { AbstractDialogService } from "./dialog.service.abstract";

@Injectable()
export class DialogService extends AbstractDialogService {
    constructor(private dialog: MatDialog) {
        super();
    }

    async openDialog<T, K = any>(
        component: any,
        config: K = null,
        options: AUDialogOptions = {},
        data: T = null
    ): Promise<T> {
        let mdc: MatDialogConfig<AUDialogContext<T, K>> = {
            data: { data, config, options },
            viewContainerRef: options.vcRef,
            maxHeight: options.maxHeight,
            maxWidth: options.maxWidth,
            minHeight: options.minHeight,
            minWidth: options.minWidth
        };
        let dialogRef = this.dialog.open(component, mdc);
        return dialogRef.afterClosed().toPromise();
        // .then(response => (response ? response.data : null));
    }
}
