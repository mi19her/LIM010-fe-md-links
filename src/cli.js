#!/usr/bin/env node

import { mdlinks } from './mdlinks.js';
import { stats, statsValidate } from './links.js';

const path = process.argv[2];
const validate = process.argv[3];
const vali = process.argv[4];

if (path === undefined) {
  console.log('ingrese una ruta <path-to-file>');
} else if (validate === undefined) {
  mdlinks(path, { validate: false })
    .then((res) => res.forEach((elem) => {
      console.log(`${elem.ruta} ${elem.href} ${elem.text}`);
    }));
} else if (validate === '--stats' && vali === '--validate') {
  mdlinks(path, { validate: true })
    .then((res) => {
      console.log(statsValidate(res));
    });
} else if (validate === '--validate') {
  mdlinks(path, { validate: true })
    .then((res) => res.forEach((elem) => {
      console.log(`${elem.ruta} ${elem.href} ${elem.text} ${elem.status} ${elem.statusText}`);
    }));
} else if (validate === '--stats') {
  mdlinks(path, { validate: true })
    .then((res) => {
      console.log(stats(res));
    });
}
