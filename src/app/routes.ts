import { Routes } from "@angular/router";

import { ProjectsComponent } from "./projects.component";

let routes: Routes = [
    {
        path: "",
        redirectTo: "projects",
        pathMatch: "full"
    },
    {
        path: "projects",
        component: ProjectsComponent
    }
];

export { routes };
