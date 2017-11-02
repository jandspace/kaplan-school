var gulp = require('gulp');

// Plugins
var concat = require('gulp-concat');  
var rename = require('gulp-rename');  
var uglify = require('gulp-uglify'); 
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');
var prefix = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

function errorLog(error) {
	console.error.bind(error);
	this.emit('end');
}

//Browser Sync
gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("src/scss/*.scss", ['sass']);
    gulp.watch("*.html").on('change', reload);
});

// Styles Task
// Uglifies
gulp.task('styles', function() {
	sass('src/scss/**/*.scss', { sourcemap: true, style: 'nested' })
    // sass('src/scss/**/*.scss', { sourcemap: true, style: 'compressed' })
	.on('error', errorLog)
	.pipe(prefix('last 2 version'))
    .pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('dist/css'))
	.pipe(reload({stream: true}));
});

// Scripts Task
// Uglifies
var jsFilesVendor = 'src/js/vendors/*.js',
    jsFilesApp = 'src/js/apps/*.js',
    jsFiles = 'src/js/*.js',
    jsDest = 'dist/js';

gulp.task('scripts', function() {  
    return gulp.src([jsFilesVendor, jsFilesApp, jsFiles])
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});

// Image Task
// Compress
gulp.task('image', function() {
	gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'));
});



// Watch Task
// Watches JS
gulp.task('watch', function() {
	gulp.watch([jsFilesVendor, jsFilesApp, jsFiles], ['scripts']);
	gulp.watch('src/scss/**/*.scss', ['styles']);
});



gulp.task('default', ['scripts', 'image', 'styles', 'watch', 'serve']);