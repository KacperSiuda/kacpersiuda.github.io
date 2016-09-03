var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');

gulp.task('sass', function(){
  return gulp.src('scss/**/*.scss')
    .pipe(sass()) 
    .pipe(gulp.dest('styles'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    },
  })
});

gulp.task('sass', function() {
  return gulp.src('scss/**/*.scss') 
    .pipe(sass())
    .pipe(gulp.dest('styles'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('images', function(){
  return gulp.src('resources/**/*.+(png|jpg|gif|svg)')
  .pipe(imagemin())
  .pipe(gulp.dest('resources/images'))
});




gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('scss/**/*.scss', ['sass']); 
  gulp.watch('*.html', browserSync.reload); 
  gulp.watch('js/**/*.js', browserSync.reload); 
});