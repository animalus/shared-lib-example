import { Component, ViewContainerRef } from "@angular/core";
import { DialogService } from "@myscope/myproject";

@Component({
    templateUrl: "./home.html"
})
export class HomePageComponent {
    constructor(
        private dialogService: DialogService,
        private vcRef: ViewContainerRef
    ) {}

    meClicked() {
        this.dialogService.confirm(
            { message: "Do this thing?" },
            { vcRef: this.vcRef }
        );
    }
}
