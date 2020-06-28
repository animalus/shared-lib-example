# shared-lib-example

The structure of this repo is a set of libraries which are listed under the projects folder. Currently there is just the one called `myproject`. Then there is a sandbox used to test the libraries and that code is in the `src` directory.

## Prerequisites

This also assumes you have `tns` installed globally. You can add it to the `package.json` and the gulp build process will pick the local version up if it is there.

## Install

    npm i

## Debug

All templates are written in pug so we have to first compile the pug files. You can do this with the command `npm run pugc`. This will compile all the pug files in the `projects` and `src` folder and sub-folders. Then you could run your standard `ng serve` or `tns run ...`. But you can also run the appropriate script defined below which will compile the pug for you (no need to run `npm run pugc`), start a watch on the pug files, and then run the corresponding `ng serve` or `tns` commands to serve up a watched version of the typescript files.

    npm run web
    npm run android
    npm run ios

## Build libraries

    npm run build

This will compile both web and nativescript versions of the libraries in the `dist` folder. The web version under `<projectname>` and the nativescript version under `nativescript-<projectname>`

## Problems I Had at Some Point

The following is some problems I had along the way and the fixes that I had to do. Hopefully these are all completely out-of-date now but leaving here for historical purposes for now.

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
