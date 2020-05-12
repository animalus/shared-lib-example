import { ViewContainerRef } from "@angular/core";

export type AUDialogOptions = {
    title?: string;
    icon?: string;
    vcRef?: ViewContainerRef;
    minHeight?: number;
    minWidth?: number;
    maxHeight?: number;
    maxWidth?: number;
    actionsAlign?: string;
};

export type AUDialogContext<T, K = any> = {
    data?: T;
    config?: K;
    options: AUDialogOptions;
};

export type ConfirmOptions = {
    message?: string;
    cancelText?: string;
    okText?: string;
    vcRef?: ViewContainerRef;
};
