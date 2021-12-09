const { src, dest, watch } = require('gulp');
const pug = require('gulp-pug');
// const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const webpack = require('webpack-stream');
const browsersync = require('browser-sync').create();
const gutil = require('gulp-util');
const ftp = require('vinyl-ftp');

// npm i gulp gulp-pug gulp-sass sass webpack-stream browser-sync




function deploy() {
  const conn = ftp.create({
    host: '74.208.33.224',
    user: 'chikungunya',
    password: 'ImgRMozp#16up3wl',
    parallel: 1,
    log: gutil.log
  });

  const globs = [
    './dist/mail.php'
  ];

  return src(globs, { base: './dist', buffer: false })
    // .pipe(conn.newer('/staging.chikungunya.com')) // only upload newer files
    .pipe(conn.dest('/staging.chikungunya.com/inc'));
}

function browserSync() {
  browsersync.init({
    server: {
      baseDir: './dist/'
    },
    port: 3000,
    notify: false
  })
}

function styles() {
  return src('./src/scss/*.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(dest('./dist'))
    .pipe(browsersync.stream())
};

function html() {
  return src('./src/pug/*.pug')
    .pipe(
      pug({
        pretty: true
      })
    )
    .pipe(dest('./dist'))
    .pipe(browsersync.stream())
}

function scripts() {
  return src('./src/js/main.js')
    .pipe(webpack({
      mode: 'development',
      output: {
        filename: 'main.min.js'
      }
    }))
    .pipe(dest('./dist/'))
    .pipe(browsersync.stream())
}

function scriptsTwo() {
  return src('./src/js/main2.js')
    .pipe(webpack({
      mode: 'development',
      output: {
        filename: 'main2.min.js'
      }
    }))
    .pipe(dest('./dist/'))
    .pipe(browsersync.stream())
}

function images() {
  return src('./src/img/**/*')
    .pipe(dest('./dist/img'))
}

function fonts() {
  return src('./src/fonts/**/*')
    .pipe(dest('./dist/fonts/'))
}

// exports.views = () => {
//   return src('./src/*.pug')
//     .pipe(
//       pug({
//         // Your options in here.
//       })
//     )
//     .pipe(dest('./dist'));
// };

exports.html = html;
exports.styles = styles;
exports.scripts = scripts;
exports.scriptsTwo = scriptsTwo;
exports.images = images;
exports.fonts = fonts;
exports.browserSync = browserSync;
exports.deploy = () => {
  watch('./dist/mail.php', deploy);
};


exports.default = () => {
  html();
  styles();
  scripts();
  scriptsTwo();
  images();
  fonts();
  browserSync();
  watch('./src/pug/**/*.pug', html);
  watch('./src/scss/**/*.scss', styles);
  watch('./src/js/**/*.js', scripts);
  watch('./src/js/main2.js', scriptsTwo);
  watch('./src/img/**/*', images);
};