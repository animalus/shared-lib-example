import { ViewContainerRef } from "@angular/core";

import { AUDialogOptions, ConfirmOptions } from "./types";
import { ConfirmDialog } from "./confirm.dialog";

export abstract class AbstractDialogService {
    public defaultVCRef: ViewContainerRef;
    public sideDrawerComponent: any;

    abstract openDialog<T, K = any>(
        component: any,
        config?: K,
        options?: AUDialogOptions,
        data?: T
    ): Promise<T>;

    async confirm(
        options: ConfirmOptions,
        dialogOptions: AUDialogOptions = {}
    ) {
        console.log(options, dialogOptions);
        return this.openDialog<boolean, ConfirmOptions>(
            ConfirmDialog,
            options,
            dialogOptions
        );
    }
}
