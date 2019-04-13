const {src, dest, parallel} = require('gulp');
const minifyCSS = require('gulp-uglifycss');
const minifyJS = require('gulp-uglifyjs');
const optimizeImage = require('gulp-image');
const webpack = require('webpack-stream');
const named = require('vinyl-named');

function html(){
    return src('src/*.html')
        .pipe(dest('public/'));
}
function buildJS(){
    return src('src/assets/js/**/*.js')
        .pipe(named())
        .pipe(webpack({
           mode: 'development',
           output:{
               filename:'[name].js'
           },
           module:{
               rules:[
                   {test: /\.(js|jsx)$/, use:{
                       loader:'babel-loader',
                       options:{ presets: ['@babel/preset-env', '@babel/preset-react']}
                   }}
               ]
           }
        }))
        
        .pipe(dest('public/assets/js/'));
}

function css(){
    return src('src/assets/css/*.css')
        .pipe(minifyCSS({
            'maxLineLen':80,
            'uglyComments':true
        }))
        .pipe(dest('public/assets/css/'));
}
function images(){
    return src(['src/assets/images/*.jpg', 'src/assets/images/*.png','src/assets/images/*.jpeg','src/assets/images/*.gif'])
        .pipe(optimizeImage())
        .pipe(dest('public/assets/images/'));
}

exports.default = parallel(buildJS, css, images);

exports.js = buildJS;