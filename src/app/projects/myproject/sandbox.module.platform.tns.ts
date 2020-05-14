import { NO_ERRORS_SCHEMA } from "@angular/core";

import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { routes } from "./sandbox.routes";

export const platform = {
    imports: [NativeScriptModule, NativeScriptRouterModule.forChild(routes)],
    schemas: [NO_ERRORS_SCHEMA],
    declarations: []
};
