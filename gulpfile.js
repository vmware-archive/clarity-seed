var autoprefixer = require('gulp-autoprefixer');
var Builder = require('systemjs-builder');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var del = require('del');
var env = require('gulp-env');
var gulp = require('gulp');
var historyApiFallback = require('connect-history-api-fallback');
var inlineNg2Template = require('gulp-inline-ng2-template');
var path = require('path');
var preprocess = require('gulp-preprocess');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var tslint = require('gulp-tslint');
var util = require('gulp-util');

if (util.env.prod) {
  env.set({ NODE_ENV: 'prod' });
}
else {
  env.set({ NODE_ENV: 'dev' });
}
var prod = process.env.NODE_ENV==='prod';

gulp.task('bundle:app:js', ['compile:ts'], function(){
  if (prod) {
    var bundleOptions = { minify: true, mangle: false, normalize: true };
    var builder = new Builder('dist/tmp');
    builder.config({
      meta: {
        '@angular/*':         { build: false },
        'clarity-angular*' :  { build: false },
        'rxjs*':             { build: false }
      },
      packages: {
        'app': { defaultExtension: 'js' }
      }
    });

    return builder.bundle("app/**/*.js - [app/**/*spec.js]", "dist/prod/app.js", bundleOptions)
      .catch(function(err) {
        console.error(err);
      });
  }
});

gulp.task('bundle:vendor:js', ['compile:ts'], function(){
    var bundleOptions = { minify: true, mangle: false, normalize: true };
    var builder = new Builder();
    builder.config({
      map: {
        // angular bundles
        '@angular/core':                      '@angular/core/bundles/core.umd.js',
        '@angular/common':                    '@angular/common/bundles/common.umd.js',
        '@angular/compiler':                  '@angular/compiler/bundles/compiler.umd.js',
        '@angular/platform-browser':          '@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic':  '@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/http':                      '@angular/http/bundles/http.umd.js',
        '@angular/router':                    '@angular/router/bundles/router.umd.js',
        '@angular/forms':                     '@angular/forms/bundles/forms.umd.js'
      },
      packageConfigPaths: ['node_modules/*/package.json', 'node_modules/@angular/*/package.json'],
      paths: {
        'dist/tmp/*': 'dist/tmp/*',
        '*': 'node_modules/*'
      },
      packages: {
        'clarity-angular' : { main: 'index.js', defaultExtension: 'js' },
        'dist/tmp/app': { defaultExtension: 'js' },
        'rxjs': { main: 'Rx.js', defaultExtension: 'js' },
      }
    });

    return builder.bundle('dist/tmp/app/**/* - [dist/tmp/app/**/*]', 'dist/tmp/dependencies.js', bundleOptions)
      .catch(function(err) {
        console.error(err);
      });
});

gulp.task('copy:assets', function () {
  return gulp.src(['src/images/**/*'])
      .pipe(gulp.dest(prod ? 'dist/prod/images' : 'dist/dev/images'));
});

gulp.task('copy:deps:js', ["bundle:vendor:js"], function() {
    if (prod) {
      return gulp.src([
          'node_modules/core-js/client/shim.min.js',
          'node_modules/zone.js/dist/zone.min.js',
          'node_modules/reflect-metadata/Reflect.js',
          'node_modules/systemjs/dist/system.src.js',
          'node_modules/web-animations-js/web-animations.min.js',
          'node_modules/mutationobserver-shim/dist/mutationobserver.min.js',
          'node_modules/@webcomponents/custom-elements/custom-elements.min.js',
          'node_modules/clarity-icons/clarity-icons.min.js',
          'dist/tmp/dependencies.js'
        ])
        .pipe(prod? concat('vendor.js') : util.noop())
        .pipe(gulp.dest('dist/prod'));
    }
});

gulp.task('copy:deps:static', function () {
  return gulp.src([
    'node_modules/clarity-ui/clarity-ui.min.css',
    'node_modules/clarity-icons/clarity-icons.min.css'
  ])
    .pipe(gulp.dest(prod ? 'dist/prod' : 'dist/dev'));
});

gulp.task('copy:typings', function() {
  return gulp.src('typings/**/index.d.ts')
    .pipe(gulp.dest('dist/dev'));
});

gulp.task('copy:html', function(){
  return gulp.src(['src/app/**/*.html'], { base: 'src/'})
    .pipe(gulp.dest('dist/dev'));
});

gulp.task('copy:index', function() {
  return gulp.src(['src/index.html'])
    .pipe(preprocess({context: { NODE_ENV: process.env.NODE_ENV}})) //To set environment variables in-line
    .pipe(gulp.dest(prod?'dist/prod':'dist/dev'));
});

gulp.task('clean', function() {
  return del(['dist/*']);
});

gulp.task('compile:ts', ['copy:typings', 'compile:sass', 'copy:html'], function() {
  var tsSources = ['src/**/*.ts'];

  if (prod) {
    tsSources = tsSources.concat(['!src/**/*.spec.ts', '!src/**/*e2e-spec.ts']); // exclude spec files
  }

  var tsProject = ts.createProject('./tsconfig.json', { typescript: require("typescript") });

  return gulp.src(tsSources)
    .pipe(prod? gulp.dest('dist/dev') : util.noop())
    .pipe(prod ? inlineNg2Template({
      base: 'dist/dev',
      target: 'es5',
      useRelativePaths: true,
      supportNonExistentFiles: false
    }) : util.noop())
    .pipe(sourcemaps.init())
    .pipe(tsProject(ts.reporter.defaultReporter()))
    .pipe(sourcemaps.write('.', {sourceRoot:'src/'}))
    .pipe(gulp.dest(prod? 'dist/tmp' : 'dist/dev'));
});

gulp.task('compile:sass', function() {
  var compressed = {outputStyle: 'compressed'};
  var uncompressed = {sourceComments: 'map', errLogToConsole: true, sourceMap: 'sass'};

  return gulp.src('src/**/*.scss', {base: 'src'})
    .pipe(prod ? util.noop() : sourcemaps.init())
    .pipe(sass(prod ? compressed : uncompressed).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 3 versions', 'ie 10', 'ie 11', '> 5%', 'Firefox > 35', 'Chrome > 35'],
      cascade: false
    }))
    .pipe(prod ? util.noop() : sourcemaps.write('.', {sourceRoot: '/src'}))
    .pipe(gulp.dest('dist/dev'));
});

gulp.task('serve', ['build'], function() {
  gulp.watch(['src/**/*.ts'], [ 'tslint', 'compile:ts']);
  gulp.watch(['src/**/*.scss'], ['compile:sass']);
  gulp.watch(['src/**/*.js', 'src/**/*.html'], ['copy:html']);
  gulp.watch(['src/index.html'], ['copy:index']);

  var baseRoot = prod? './dist/prod': './dist/dev';

  return browserSync.init({
    port: 4000,
    server: {
      baseDir: baseRoot,
      routes: {
        '/node_modules': './node_modules'
      },
      // Necessary middleware for a single-page application with client-side routing
      middleware: [
        historyApiFallback({index: './index.html'})
      ]
    },
    files: [ baseRoot + '/**/*']
  });
});

gulp.task('build', function(callback){
  return runSequence('clean', [
    'copy:assets',
    'copy:deps:js',
    'copy:deps:static',
    'copy:index',
    'copy:html',
    'tslint',
    'compile:ts',
    'bundle:app:js',
    'bundle:vendor:js',
    'compile:sass'
  ], callback);
});

gulp.task('tslint', function() {
  return gulp.src('src/**/*.ts')
    .pipe(tslint());
});

gulp.task('test:coverage', ['test:unit'], function () {
  var remapIstanbul = require('remap-istanbul/lib/remap');
  var remapWriteReport = require('remap-istanbul/lib/writeReport');
  var remapLoadCoverage = require('remap-istanbul/lib/loadCoverage');

  var coverage = remapLoadCoverage(['coverage/coverage-final.json']);
  var collector = remapIstanbul(coverage, {
    'lcovhtml': 'html-report'
  });
  remapWriteReport(collector, 'html', 'coverage-final.html')
});

gulp.task('test:unit', ['build'], function(done) {
  var karmaServer = require('karma').Server;
  var server = new karmaServer({
    configFile: path.resolve('karma.conf.js'),
    reporters: ['spec', 'coverage']
  });
  server.on('run_complete', function (browsers, results) {
    done(results.error ? 'There are test failures' : null);
  });

  server.start();
});

gulp.task('test:e2e', ['serve'], function(done) {
  var spawn = require('child_process').spawn;
  var protractor = spawn('protractor', ['protractor.config.js'], { stdio: 'inherit' });
  protractor.on('exit', function(code) {
    done(code === 0 ? null : 'ERROR: protractor process exited with code: ' + code);
  });
});

gulp.task('default', ['serve'], function() { });
