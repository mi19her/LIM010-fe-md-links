#!/usr/bin/env node

import { fsMdlinks } from './funtionCli.js';

const path = process.argv[2];
const options = {
  validate: process.argv[3],
  stats: process.argv[4],
};

fsMdlinks(path, options).then((res) => console.log(res));
