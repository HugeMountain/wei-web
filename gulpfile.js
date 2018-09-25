var gulp = require('gulp');
    connect = require('gulp-connect'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    coffee = require('gulp-coffee');

gulp.task('webserver', function() {
    connect.server({
        livereload: true,
        port: 3000,
        root: ['.', '.tmp']
    });
});
gulp.task('livereload', function() {

    gulp.src(['public/stylesheets/*.sass', '.public/pages/*.js'])
        .pipe(watch())
        .pipe(connect.reload());

});



gulp.task('sass', function() {
    gulp.src('.public/stylesheets/style.sass')
        .pipe(watch('.public/stylesheets/*.sass'))
        .pipe(sass())
        .pipe(gulp.dest('.tmp/style'));
});


//
// gulp.task('coffee', function() {
//
//     gulp.src('scripts/*.coffee')
//         .pipe(coffee())
//         .pipe(gulp.dest('.tmp/scripts'));
//
// });



gulp.task('watch', function() {

    gulp.watch('public/stylesheets/*.sass', ['sass']);

    // gulp.watch('scripts/*.coffee', ['coffee']);

});

gulp.task('default', ['sass', /*'coffee',*/ 'webserver', 'livereload', 'watch']);
