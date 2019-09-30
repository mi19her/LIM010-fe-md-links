#!/usr/bin/env node
"use strict";

var _funtionCli = require("./funtionCli.js");

const path = process.argv[2];
const options = {
  validate: process.argv[3],
  stats: process.argv[4]
};
(0, _funtionCli.fsMdlinks)(path, options).then(res => console.log(res));