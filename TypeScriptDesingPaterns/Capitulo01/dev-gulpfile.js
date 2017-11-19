// gulp.js
// tiene watchify para que los cambios se vean inmediatamente.
var gulp = require("gulp");
var browserfy = require("browserify");
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var gutil = require("gulp-util");
var tsify = require("tsify");var path = {
	pages: ['src/*.html']
};
var watchedBrowserify = watchify(browserfy({
	    	basedir: '.',
	    	debug: true,
	    	entries: ['src/main.ts'],
	    	cache:{},
	    	packageCache:{}
	    })
	    .plugin(tsify));

gulp.task('copy-html', function() {
    // content
    return gulp.src(path.pages)
      .pipe(gulp.dest('dist'));
});

function bundle(){
	    return watchedBrowserify
	    .bundle()
	    .pipe(source('bundle.js'))
	    .pipe(gulp.dest('dist'));	
}

gulp.task('default',["copy-html"], bundle);
watchedBrowserify.on("update",bundle);
watchedBrowserify.on("log",gutil.log);	
