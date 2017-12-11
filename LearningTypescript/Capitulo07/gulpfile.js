"use strict";

//******************************************************************************
//* DEPENDENCIES
//******************************************************************************
// Check out package.json for full list of dependencies!
var gulp        = require("gulp"),
    browserify  = require("browserify"),
    source      = require("vinyl-source-stream"),
    buffer      = require("vinyl-buffer"),
    run         = require("gulp-run"),
    nightwatch  = require('gulp-nightwatch'),
    tslint      = require("gulp-tslint"),
    tsc         = require("gulp-typescript"),
    browserSync = require('browser-sync'),
    karma       = require("karma").server,
    uglify      = require("gulp-uglify"),
    docco       = require("gulp-docco"),
    runSequence = require("run-sequence"),
    header      = require("gulp-header"),
    pkg         = require(__dirname + "/package.json")
    ;


// Transpilar código
// opvines de transpilación
var tsProject = tsc.createProject({
  removeComments : false,
  noImplicitAny : false,
  target : "ES6",
  module : "commonjs",
  declarationFiles : false
});

gulp.task("build-source", function() {
  return gulp.src(__dirname + "/source/*.ts")
             .pipe(tsProject())
             .js.pipe(gulp.dest(__dirname + "/build/source/"));
});

// Transpilar test
// opciones de transpilación
var tsTestProject = tsc.createProject({
  removeComments : false,
  noImplicitAny : false,
  target : "ES6",
  module : "commonjs",
  declarationFiles : false
});

gulp.task("build-test", function() {
  return gulp.src(__dirname + "/test/*.test.ts")
             .pipe(tsTestProject())
             .js.pipe(gulp.dest(__dirname + "/build/test/"));
});

// empaquetar aplicación 
gulp.task("bundle-source", function () {
  var b = browserify({
    standalone : 'demo',
    entries: __dirname + "/build/source/demo.js",
    debug: true
  });

  return b.bundle()
    .pipe(source("demos.js"))
    .pipe(buffer())
    .pipe(gulp.dest(__dirname + "/bundled/source/"));
});

// empaquetar suites de test 

gulp.task("bundle-test", function () {
  
    // Solo se ejecutar los teste bdd
    // pero hay ejemplos tdd en el directorio test
  
    var b = browserify({
      standalone : 'test',
      entries: __dirname + "/build/test/bdd.test.js",
      debug: true
    });
  
    return b.bundle()
      .pipe(source("bdd.test.js"))
      .pipe(buffer())
      .pipe(gulp.dest(__dirname + "/bundled/test/"));
  });

  // empaquetar e2e test 
gulp.task("bundle-e2e-test", function () {
  
    // in this demo we will only execute the bdd tests
    // but tdd examples are available in the /test directory
  
    var b = browserify({
      standalone : 'test',
      entries: __dirname + "/build/test/e2e.test.js",
      debug: true
    });
  
    return b.bundle()
      .pipe(source("e2e.test.js"))
      .pipe(buffer())
      .pipe(gulp.dest(__dirname + "/bundled/e2e-test/"));
  });
  
  // Unit test con karma 
var Server = require('karma').Server;
  
gulp.task("run-unit-test", function(cb) {
  new Server({
    configFile : __dirname + "/karma.conf.js",
    singleRun: true
  }, cb).start();
});

// E2E test
gulp.task('run-e2e-test', function(){
  return gulp.src('')
    .pipe(nightwatch({
      configFile: __dirname + '/nightwatch.json'
    }));
});

// Servidor Local
gulp.task('serve', function(cb) {
  browserSync({
      port: 8080,
      server: {
          baseDir: "./"
      }
  });

  gulp.watch([
    "./**/*.js",
    "./**/*.css",
    "./index.html"
  ], browserSync.reload, cb);
});

// run tests
gulp.task('run', function (cb) {
  runSequence(    
    ["build-source", "build-test"],
    ["bundle-source", "bundle-test",],
    ["run-unit-test"],
    cb);
});

// run tests
gulp.task('source', function (cb) {
  runSequence(    
    ["build-source"],
    ["bundle-source"],    
    cb);
});
