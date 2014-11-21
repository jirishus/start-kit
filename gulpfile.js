var gulp    = require("gulp"),
  compass   = require("gulp-compass"),
  connect   = require("gulp-connect"),
  browserSync = require("browser-sync"),
  jade    = require("gulp-jade"),
  reload    = browserSync.reload;

/* Start Local Server */

gulp.task("webserver", function() {
  connect.server();
});

/* Start Bsync */
gulp.task("browser-sync", function() {
  browserSync({
    proxy:"http://127.0.0.1:8080/"
  });
});


var paths =  {
  styles: {
    src:["sass/**/*.scss"],
    dest:"stylesheets"
  },
  templates: {
    src: "views/src/*.jade",
    dest: "views/build"
  }
};

// COMPILE SASS
gulp.task("styles", function() {
  return gulp.src(paths.styles.src)
  .pipe(compass({
    css: "./stylesheets",
    sass: "./sass"
  }))
  .pipe(gulp.dest(paths.styles.dest));
});

// CONVERT JADE
gulp.task("templates", function() {
  gulp.src("views/src/index.jade")
  .pipe(jade({
    pretty:true
   }))
   .pipe(gulp.dest("./"));
  gulp.src(paths.templates.src)
  .pipe(jade({

   }))
   .pipe(gulp.dest(paths.templates.dest));
});

gulp.task("default",['webserver','browser-sync'], function() {
  gulp.watch(paths.styles.src,["styles"]);
  gulp.watch('stylesheets/*.css', browserSync.reload);
  gulp.watch(paths.templates.src, ["templates",browserSync.reload]);
  gulp.watch('*/**/.html', browserSync.reload);
  gulp.watch('routes/*.html', browserSync.reload);
});