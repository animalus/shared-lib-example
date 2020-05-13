const gulp = require("gulp");
const auGulpDevTools = require("@animalus/gulp-dev-tools");

auGulpDevTools.addGulpTasks(gulp, [{ packageName: "gulp-dev-tools" }]);

auGulpDevTools.addGulpLibTasks(
    gulp,
    [
        {
            name: "myproject",
            level: 0,
            ns: true
        }
    ],
    { scope: "@myscope" }
);
