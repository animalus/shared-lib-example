import { NO_ERRORS_SCHEMA } from "@angular/core";

import {
    NativeScriptModule,
    NativeScriptRouterModule,
} from "@nativescript/angular";

import { routes } from "./sandbox.routes";

export const platform = {
    imports: [NativeScriptModule, NativeScriptRouterModule.forChild(routes)],
    schemas: [NO_ERRORS_SCHEMA],
    declarations: [],
};
