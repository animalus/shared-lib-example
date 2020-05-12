import { Component } from "@angular/core";
import { DialogService } from "@myscope/myproject";

@Component({
    templateUrl: "./home.html"
})
export class HomeComponent {
    constructor(private dialogService: DialogService) {}

    meClicked() {
        this.dialogService.confirm({ message: "Do this thing?" });
    }

    openDrawer() {
        if (this.dialogService.sideDrawerComponent) {
            this.dialogService.sideDrawerComponent.sideDrawer.toggleDrawerState();
        }
    }
}
