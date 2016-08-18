var gulp = require('gulp');
var sass = require('gulp-sass');


var input = 'sass/**/*.scss';
var output = 'styles';

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

gulp.task('sass', function () {
  return gulp
    
    .src(input)
    
    .pipe(sass(sassOptions).on('error', sass.logError))
   
    .pipe(gulp.dest(output));
});

gulp.task('watch', function() {
  return gulp
  
    .watch(input, ['sass'])
 
    .on('change', function(event) {
      console.log('Plik ' + event.path + ' został ' + event.type + ', siuda ssie kule na nowo...');
    });
});

gulp.task('default', ['sass', 'watch']);