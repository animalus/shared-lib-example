import { Component, ViewChild } from "@angular/core";

import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";

import { DialogService } from "./dialog.service";

@Component({
    selector: "main-page",
    templateUrl: "./mainpage.html"
})
export class MainPageComponent {
    @ViewChild(RadSideDrawerComponent, { static: true })
    sideDrawerComponent: RadSideDrawerComponent;

    constructor(private dialogService: DialogService) {}

    ngOnInit() {
        this.dialogService.sideDrawerComponent = this.sideDrawerComponent;
    }
}
