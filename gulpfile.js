const auGulpDevTools = require("@animalus/gulp-dev-tools");

auGulpDevTools.addGulpTasks([{ packageName: "gulp-dev-tools" }]);

auGulpDevTools.addGulpLibTasks(
    [
        {
            name: "myproject",
            level: 0,
            ns: true
        }
    ],
    { scope: "@myscope" }
);
