import { Component, ViewContainerRef } from "@angular/core";

import { DialogService } from "@myscope/myproject";

@Component({
    selector: "app-root",
    templateUrl: "./app.html"
})
export class AppComponent {
    constructor(vcRef: ViewContainerRef, dialogService: DialogService) {
        dialogService.defaultVCRef = vcRef;
    }
}
