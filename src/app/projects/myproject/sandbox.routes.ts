import { Routes } from "@angular/router";

import { MyProjectSandboxComponent } from "./sandbox.component";

import { HomePageComponent } from "./pages/home/home";

let routes: Routes = [
    {
        path: "myproject",
        component: MyProjectSandboxComponent,
        children: [
            {
                path: "",
                redirectTo: "home",
                pathMatch: "full"
            },
            { path: "home", component: HomePageComponent }
        ]
    }
];

export { routes };
