'use strict';
var gulp = require('gulp');
var tslint = require('gulp-tslint'); 
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');

// comprueba errores
gulp.task('lint', function() 
	{ 
		console.log("Task: lint!");
		return gulp.src([ './source/ts/**/**.ts', './test/**/**.test.ts' ])
		.pipe(tslint({
				formatter:'verbose'
			}))
		.pipe(tslint.report()); 
	}
);

// compila al directorio /temp
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
var tsTestProject = ts.createProject('tsconfig.json');

gulp.task('tsc',function()
	{
 	var tsResult = gulp.src('./source/ts/**/**.ts') // or tsProject.src()
        .pipe(tsProject());
    return tsResult.js.pipe(gulp.dest('./temp/source/js'));
	}
);

gulp.task('tsc-test',function()
	{
		return gulp.src('./test/**/**.test.ts')
		.pipe(tsTestProject()).js
		.pipe(gulp.dest('./temp/test'));
	}
);

// brouserify unifica uglify afea y minifica
// compila el resultado de source a dist. La difrencia s que esta feo

gulp.task('bundle-js', function () {
  // set up the browserify instance on a task basis
  var b = browserify({
    entries: './temp/source/js/main.js',
    debug: true
  });

  return b.bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
        .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/source/js'));
});


gulp.task('bundle-test', function () {
  // set up the browserify instance on a task basis
  var b = browserify({
    entries: './temp/test/main.test.js',
   // entries: './temp/source/js/main.js',
    debug: true
  });

  return b.bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./dist/test/js'));
});

// test
var Server = require('karma').Server;

// karma test
gulp.task('gulp-karma', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
  }, done).start();
});

// run sequence
var runSequence = require('run-sequence');
/*
gulp.task('default', function(cb){
  runSequence( 'lint', // lint 
  ['tsc', 'tsc-tests'], // compile 
  ['bundle-js','bundle-test'], // optimize 
  //'karma' // test 
  //'browser-sync', // serve 
  cb // callback
  )
});
*/
// cross-device testing
gulp.task('bundle',function(cb){
  runSequence(
    ['tsc','tsc-test'], 
    ['bundle-js','bundle-test'], 
    cb);
});

gulp.task('test', function(cb){
  runSequence('tsc-test','bundle-test',['gulp-karma'],cb)
});

var browserSync = require('browser-sync');

gulp.task('browser-sync',function(){
  browserSync({
    server: {baseDir: "./"}
  });
  return gulp.watch(["./dist/source/js/**/*.js",
    "./dist/source/css/**.css",
    "./dist/test/**/**.test.js",
    "./dist/data/**/**",
    "./index.html"], 
    [browserSync.reload]);
});