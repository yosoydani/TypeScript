var gulp = require('gulp');
var ts = require("gulp-typescript");
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var tsify = require('tsify');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
var paths = {
	pages: ['src/html/*.html']
}

gulp.task('copy-html', function() {
    // content
    return gulp.src(paths.pages)
      .pipe(gulp.dest('dist'));
});


gulp.task('tsc-test', function() {
     var tsResult = gulp.src("src/test/*.ts")
        .pipe(ts({
              noImplicitAny: true
        }));
    return tsResult.js.pipe(gulp.dest("dist/test"));
    
});

gulp.task('default',['copy-html','tsc-test'], function() {
    // content
    return browserify({
    	baseDir: '.',
    	debug: true,
    	entries: ['src/ts/main.ts'],
    	cache: {},
    	packageCache: {}
    })
    .plugin(tsify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps:true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist/js'));
});