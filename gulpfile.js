var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	fileinclude = require('gulp-file-include'),
	browserSync = require('browser-sync').create(),
	reload = browserSync.reload;

// html

gulp.task('html', function() {
	return gulp.src(['html/*.html'])
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file',
			indent: true
		}))
		.on('error', console.log)
		.pipe(gulp.dest('.'));
});

//less

gulp.task('scss', function() {
	return gulp.src(['css/style.scss'])
		.pipe(sass())
		.on('error', console.log)
		.pipe(autoprefixer({

		}))
		.pipe(gulp.dest('css'));
});

gulp.task('scss-bootstrap', function() {
	return gulp.src(['scss/bootstrap.scss'])
		.pipe(sass())
		.on('error', console.log)
		.pipe(autoprefixer({
		
		}))
		.pipe(gulp.dest('css'));
});

gulp.task('reload', function() {
	browserSync.reload();
	return true;
});


//default task

gulp.task('default', function() {

	browserSync.init({
		server: {
			baseDir: "./"
		}
	});

	gulp.watch('css/**', ['scss', 'reload']);
	gulp.watch('html/**', ['html', 'reload']);
	gulp.watch('js/**', ['reload']);
	gulp.watch('images/**', ['reload']);
});
