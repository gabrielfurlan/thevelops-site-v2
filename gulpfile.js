const gulp = require("gulp");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const stylus = require("gulp-stylus");
const clean = require("gulp-clean-css");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const mmq = require("gulp-merge-media-queries");

gulp.task("default", ["style"], () => {
	gulp.watch("stylesheets/**/*", ["style"]);
});

gulp.task("style", () => {
	return gulp.src("stylesheets/index.styl")
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(stylus({ compress: true, "include css": true }))
		.pipe(postcss([autoprefixer({})]))
		.pipe(mmq())
		.pipe(clean())
		.pipe(rename("bundle.min.css"))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest("public/build"));
});