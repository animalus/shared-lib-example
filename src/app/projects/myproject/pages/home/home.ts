import { Component } from "@angular/core";
import { DialogService } from "@myscope/myproject";

@Component({
    templateUrl: "./home.html"
})
export class HomePageComponent {
    constructor(private dialogService: DialogService) {}

    meClicked() {
        this.dialogService.confirm({ message: "Do this thing?" });
    }
}
