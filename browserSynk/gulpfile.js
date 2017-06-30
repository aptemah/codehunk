var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// or...

gulp.task('default', function() {
    browserSync.init({
        proxy: "http://codeit.pro/casino/32334/review.html",
        rewriteRules: [
            {
                match: /css\/style\.cr\.min\.css/g,//TODO file to replace
                fn: function (req, res, match) {
                    return '/assets/style.cr.min.css';//TODO file that replaces
                }
            }
        ],
        serveStatic: [{
                route: '/assets',//TODO folder with files to replace
                dir: 'assets'//TODO folder with files to replace
         }],
    });
});