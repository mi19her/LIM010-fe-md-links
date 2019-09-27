"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fsMdlinks = void 0;

var _mdlinks = require("./mdlinks");

var _links = require("./links.js");

const fsMdlinks = (path, options) => {
  let resultado = '';

  if (path === undefined) {
    resultado = new Promise(resolve => resolve('ingrese una ruta <path-to-file>'));
  } else if (options.validate === undefined) {
    resultado = (0, _mdlinks.mdlinks)(path, {
      validate: false
    }).then(res => {
      let stringElem = '';
      res.forEach(elem => {
        stringElem += `${elem.ruta} ${elem.href} ${elem.text}\n`;
      });
      return stringElem;
    });
  } else if (options.validate === '--validate' && options.stats === '--stats') {
    resultado = (0, _mdlinks.mdlinks)(path, {
      validate: true
    }).then(res => (0, _links.statsValidate)(res));
  } else if (options.validate === '--validate') {
    resultado = (0, _mdlinks.mdlinks)(path, {
      validate: true
    }).then(res => {
      let stringElem = '';
      res.forEach(elem => {
        stringElem += `${elem.ruta} ${elem.href} ${elem.text} ${elem.status} ${elem.statusText}\n`;
      });
      return stringElem;
    });
  } else if (options.validate === '--stats') {
    resultado = (0, _mdlinks.mdlinks)(path, {
      validate: true
    }).then(res => (0, _links.stats)(res));
  }

  return resultado;
};
/*
mdlinks(path, options)
  .then((res) => {
    let resultado = '';
    if (path === undefined) {
      resultado = 'ingrese una ruta <path-to-file>';
    } else if (options.validate === undefined) {
      mdlinks(path, { validate: false });
      let strings = '';
      res.forEach((elem) => {
        strings += `${elem.ruta} ${elem.href} ${elem.text}\n`;
      });
      resultado = strings;
    } else if (options.validate === '--stats' && options.stats === '--validate') {
      mdlinks(path, { validate: true });
      resultado = statsValidate(res);
    } else if (options.validate === '--validate') {
      mdlinks(path, { validate: true });
      let strings = '';
      res.forEach((elem) => {
        strings += `${elem.ruta} ${elem.href} ${elem.text} ${elem.status} ${elem.statusText}\n`;
      });
      resultado = strings;
    } else if (options.validate === '--stats') {
      mdlinks(path, { validate: true });
      resultado = stats(res);
    } else {
      resultado = 'ingrese una ruta <path-to-file>';
    }
    return resultado;
  });
*/


exports.fsMdlinks = fsMdlinks;