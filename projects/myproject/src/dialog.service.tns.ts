import { Injectable } from "@angular/core";

import { ModalDialogService, ModalDialogOptions } from "@nativescript/angular";

import { AUDialogContext, AUDialogOptions } from "./types";
import { AbstractDialogService } from "./dialog.service.abstract";

@Injectable()
export class DialogService extends AbstractDialogService {
    constructor(private dialog: ModalDialogService) {
        super();
    }

    openDialog<T, K = any>(
        component: any,
        config: K = null,
        options: AUDialogOptions = {},
        data: T = null
    ): Promise<T> {
        let mdo: ModalDialogOptions = {
            viewContainerRef: options.vcRef || this.defaultVCRef,
            context: { data, config, options } as AUDialogContext<T, K>,
            fullscreen: false
        };
        return this.dialog.showModal(component, mdo);
    }
}
