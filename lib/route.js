"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verificFileDir = exports.verificRoute = exports.typePath = void 0;

const pathRoute = require('path');

const fs = require('fs'); // const readdir = promisify(fs.readdir);
// const stat = promisify(fs.stat);


const typePath = stringRoute => {
  if (pathRoute.isAbsolute(stringRoute) === false) {
    return pathRoute.resolve(stringRoute);
  }

  return stringRoute;
};

exports.typePath = typePath;

const verificRoute = route => {
  if (fs.statSync(route).isFile()) {
    return true;
  }

  return false;
};

exports.verificRoute = verificRoute;

const verificFileDir = route => {
  let results = [];

  if (verificRoute(typePath(route)) === true) {
    if (pathRoute.extname(typePath(route)) === '.md') {
      results.push(typePath(route));
    }

    return results;
  } else {
    const list = fs.readdirSync(typePath(route));
    list.forEach(dir => {
      const dir1 = pathRoute.join(typePath(route), dir);
      results = results.concat(verificFileDir(dir1));
    });
    return results;
  }
};

exports.verificFileDir = verificFileDir;
console.log(verificFileDir('D:/archivoMkdown/LIM010-fe-md-links/archivos'));