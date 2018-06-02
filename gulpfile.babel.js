'use strict';

import gulp from 'gulp';
import CustomApp from "./app/CustomApp";

const dirs = {
  src: 'src',
  dest: 'build'
};

const sassPaths = {
  src: `${dirs.src}/app.scss`,
  dest: `${dirs.dest}/styles/`
};

const getFileContents = (data) => {
	var arr = [];
  var str = data.trim();
	str.replace(/\r?\n/g, '|').replace(/\r/g, '|').split('|').map((item) => {
		arr.push(item.split(' '));
	});

  const app = new CustomApp(arr,callBackHandler);

}

gulp.task ('default', () => {

  console.log("default task");

  let client = new XMLHttpRequest();
  client.open('GET', '/text.txt');

  client.onreadystatechange = function (evt) {
  	if (client.readyState == 4 && client.status == 200) {
  		getFileContents(client.responseText);
  	}
  }
  client.send();

});


/*
gulp.task('styles', () => {
  return gulp.src(paths.src)
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', plugins.sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.dest));
});*/
