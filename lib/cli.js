#!/usr/bin/env node
"use strict";

var _mdlinks = require("./mdlinks.js");

var _links = require("./links.js");

const path = process.argv[2];
const validate = process.argv[3];
const vali = process.argv[4];

if (path === undefined) {
  console.log('ingrese una ruta <path-to-file>');
} else if (validate === undefined) {
  (0, _mdlinks.mdlinks)(path, {
    validate: false
  }).then(res => res.forEach(elem => {
    console.log(`${elem.ruta} ${elem.href} ${elem.text}`);
  }));
} else if (validate === '--stats' && vali === '--validate') {
  (0, _mdlinks.mdlinks)(path, {
    validate: true
  }).then(res => {
    console.log((0, _links.statsValidate)(res));
  });
} else if (validate === '--validate') {
  (0, _mdlinks.mdlinks)(path, {
    validate: true
  }).then(res => res.forEach(elem => {
    console.log(`${elem.ruta} ${elem.href} ${elem.text} ${elem.status} ${elem.statusText}`);
  }));
} else if (validate === '--stats') {
  (0, _mdlinks.mdlinks)(path, {
    validate: true
  }).then(res => {
    console.log((0, _links.stats)(res));
  });
}