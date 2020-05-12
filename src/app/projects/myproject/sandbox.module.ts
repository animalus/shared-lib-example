import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { platform } from "./sandbox.module.platform";

import { MyProjectModule } from "~/../projects/myproject/index";

import { MyProjectSandboxComponent } from "./sandbox.component";

import { HomePageComponent } from "./pages/home/home";

@NgModule({
    imports: [...platform.imports, MyProjectModule, ReactiveFormsModule],
    declarations: [
        MyProjectSandboxComponent,
        HomePageComponent,
        ...platform.declarations
    ],
    schemas: platform.schemas
})
export class MyProjectSandboxModule {}
