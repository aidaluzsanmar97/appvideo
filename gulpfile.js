const gulp = require('gulp')

gulp.task('css', function(){
  gulp.src('./bower_components/materialize/dist/css/materialize.min.css')
    .pipe(gulp.dest('./assets/css'))
})
gulp.task('materialize.js', function(){
  gulp.src('./bower_components/materialize/dist/js/materialize.min.js')
    .pipe(gulp.dest('./assets/js'))
})
gulp.task('chart.js', function(){
  gulp.src('./bower_components/chart.js/dist/Chart.min.js')
    .pipe(gulp.dest('./assets/js'))
})
gulp.task('jquery', function(){
  gulp.src('./bower_components/jquery/dist/jquery.min.js')
    .pipe(gulp.dest('./assets/js'))
})
gulp.task('angular', function(){
  gulp.src('./bower_components/angular/angular.min.js')
    .pipe(gulp.dest('./assets/js'))
})

gulp.task('angular-resource', function(){
  gulp.src('./bower_components/angular-resource/angular-resource.min.js')
    .pipe(gulp.dest('./assets/js'))
})

gulp.task('angular-route', function(){
  gulp.src('./bower_components/angular-route/angular-route.min.js')
    .pipe(gulp.dest('./assets/js'))
})

gulp.task('default', ['css', 'jquery', 'materialize.js', 'chart.js', 'angular', 'angular-route', 'angular-resource'])