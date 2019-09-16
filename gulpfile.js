"use strict";

const { src, dest } = require("gulp");
const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const cssbeautify = require("gulp-cssbeautify");
const removeComments = require("gulp-strip-css-comments");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const cssnano = require("gulp-cssnano");
const rigger = require("gulp-rigger");
const uglify = require("gulp-uglify");
const plumber = require("gulp-plumber");
const imagemin = require("gulp-imagemin");
const del = require("del");
const panini = require("panini");
const browsersync = require("browser-sync").create();

var path = {
  build: {
    html: "dist/",
    js: "dist/assest/js/",
    css: "dist/assest/css/",
    images: "dist/assets/img/"
  },
  src: {
    html: "src/*.html",
    js: "src/assest/js/*.js",
    css: "src/assest/sass/style.scss",
    images: "src/assest/img/**/*.{jpg,png,svg,dif,ico}"
  },
  watch: {
    html: "src/**/*.html",
    js: "src/assest/js/**/*.js",
    css: "src/assest/sass/**/*.scss",
    images: "src/assest/img/**/*.{jpg,png,svg,dif,ico}"
  },
  clean: "./dist"
};

function html() {
  return src(path.src.html, { base: "src/" })
  .pipe(plumber())
  .pipe(dest(path.build.html))
  .pipe();
}

exports.html = html;
