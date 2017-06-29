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
                match: /css\/style\.cr\.min\.css/g,
                fn: function (req, res, match) {
                    return '/assets/style.cr.min.css';
                }
            }
        ],
        serveStatic: [{
                route: '/assets',
                dir: 'assets'
         }],
    });
});