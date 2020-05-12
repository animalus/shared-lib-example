import { RouterModule } from "@angular/router";

import { routes } from "./sandbox.routes";

export const platform = {
    imports: [RouterModule.forChild(routes)],
    declarations: [],
    schemas: []
};
