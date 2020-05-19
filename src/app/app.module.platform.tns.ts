import { NO_ERRORS_SCHEMA } from "@angular/core";

import {
    NativeScriptModule,
    NativeScriptFormsModule
} from "@nativescript/angular";

export const platform = {
    imports: [NativeScriptModule, NativeScriptFormsModule],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA]
};
