import { RouterModule } from "@angular/router";
import { MatDialogModule } from "@angular/material/dialog";

export const platform = {
    imports: [MatDialogModule, RouterModule],
    schemas: [],
    declarations: [],
    exports: [MatDialogModule, RouterModule],
    entryComponents: [],
    providers: []
};
