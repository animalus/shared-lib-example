import { NO_ERRORS_SCHEMA } from "@angular/core";

import { NativeScriptRouterModule } from "@nativescript/angular";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

export const platform = {
    imports: [NativeScriptRouterModule, NativeScriptUISideDrawerModule],
    providers: [],
    declarations: [],
    exports: [],
    entryComponents: [],
    schemas: [NO_ERRORS_SCHEMA]
};
