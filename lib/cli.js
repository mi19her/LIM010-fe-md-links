#!/usr/bin/env node
// import { mdlinks } from './mdlinks.js';
// import { stats, statsValidate } from './links.js';
"use strict";

var _funtionCli = require("./funtionCli.js");

const path = process.argv[2]; // console.log(path);

const options = {
  validate: process.argv[3],
  stats: process.argv[4]
}; // const validate = process.argv[3];
// const stats = process.argv[4];
// fsMdlinks(path, options).then((res) => console.log(res));

(0, _funtionCli.fsMdlinks)(path, options).then(res => console.log(res));