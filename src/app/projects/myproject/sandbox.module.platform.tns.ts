import { NO_ERRORS_SCHEMA } from "@angular/core";

import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { routes } from "./sandbox.routes";

export const platform = {
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule.forChild(routes)
    ],
    schemas: [NO_ERRORS_SCHEMA],
    declarations: []
};
