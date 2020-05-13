import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { DialogService } from "./dialog.service";
import { ConfirmDialog } from "./confirm.dialog";
import { MainPageComponent } from "./mainpage";

import { platform } from "./module.platform";

@NgModule({
    imports: [...platform.imports, RouterModule],
    providers: [DialogService],
    declarations: [ConfirmDialog, MainPageComponent],
    entryComponents: [ConfirmDialog],
    exports: [MainPageComponent],
    schemas: [...platform.schemas]
})
export class MyProjectModule {}

export { DialogService };
export * from "./module.platform";

export { MainPageComponent };
