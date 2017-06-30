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
        proxy: "https://github.com/",
        rewriteRules: [
            {
                match: /https\:\/\/assets\-cdn\.github\.com\/assets\/github\-b9b43f5697ca643594f3a899ff0ee0b6088f2fc4164c3c54ba8d43232503c6d9\.css/g,//TODO file to replace
                fn: function (req, res, match) {
                    return '/assets/main.css';//TODO file that replaces
                }
            }
        ],
        serveStatic: [{
                route: '/assets',//TODO folder with files to replace
                dir: 'assets'//TODO folder with files to replace
         }],
    });
});