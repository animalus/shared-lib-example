# shared-lib-example

## Prerequisites

Needs globally installed gulp.

    npm i -g gulp

## Install

    npm i

## Debug

Sandbox is set up for libraries. To run the sandbox and test the library code do one of the following.

### Web

    gulp dev

This sets up a watch for pug files and runs `ng serve` which itself watches for typescript, scss, and html changes. Navigate to `http://localhost:4200`.

### Mobile

    gulp dev:android
    gulp dev:ios

## Build libraries

We can compile these libraries (both web and nativescript)

## Problems

```
ERROR in Symbol ListViewComponent declared in /home/ken/dev/animalus/test/shared-lib-example/node_modules/@nativescript/angular/directives/list-view-comp.d.ts is not exported from nativescript-angular/nativescript.module (import into /home/ken/dev/animalus/test/shared-lib-example/src/app/projects.component.ts)
```

I also tried getting rid of my outer routing which simply selects which project to put in the sandbox (currently only one anyway) by change `main.tns.ts`. I changed it from this ...

```
import { AppModule } from "./app/app.module";
platformNativeScriptDynamic().bootstrapModule(AppModule);
```

.. to this ...

```
import { MyProjectSandboxModule } from "./app/projects/myproject/sandbox.module";
platformNativeScriptDynamic().bootstrapModule(MyProjectSandboxModule);
```

... and all it did was shift the "missing import" to a different file...

```
ERROR in Symbol ListViewComponent declared in /home/ken/dev/animalus/test/shared-lib-example/node_modules/@nativescript/angular/directives/list-view-comp.d.ts is not exported from nativescript-angular/nativescript.module (import into /home/ken/dev/animalus/test/shared-lib-example/src/app/projects/myproject/sandbox.component.ts)
```
