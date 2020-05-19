import { NgModule } from "@angular/core";

import { ProjectsComponent } from "./projects.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { MyProjectSandboxModule } from "./projects/myproject/sandbox.module";
import { MyProjectModule } from "~/../projects/myproject/index";

import { platform } from "./app.module.platform";

@NgModule({
    imports: [
        ...platform.imports,
        AppRoutingModule,
        MyProjectModule,
        MyProjectSandboxModule
    ],
    declarations: [AppComponent, ProjectsComponent],
    bootstrap: [AppComponent],
    schemas: platform.schemas
})
export class AppModule {}
