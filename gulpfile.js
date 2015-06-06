var mocha = require('gulp-mocha');
var jshint = require('gulp-jshint');
var gulp = require('gulp');

gulp.task('default', ['lint', 'test'], function(){
	// https://github.com/gulpjs/gulp/issues/411#issuecomment-40681948
	process.exit(0);
});

gulp.task('lint', function() {
	return gulp.src(['./lib/*.js', './test/*.js'])
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

gulp.task('test', function() {
	return gulp.src('test/test.js', {read: false})
	.pipe(mocha({reporter: 'list'}));
});