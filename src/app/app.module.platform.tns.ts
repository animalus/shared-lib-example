import { NO_ERRORS_SCHEMA } from "@angular/core";

import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

export const platform = {
    imports: [NativeScriptModule, NativeScriptFormsModule],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA]
};
