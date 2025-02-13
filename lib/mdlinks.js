"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdlinks = void 0;

var _route = require("./route.js");

var _links = require("./links.js");

const mdlinks = (route, options) => new Promise(resolve => {
  if (options.validate === true) {
    resolve((0, _links.linksCorect)(route));
  } else {
    resolve((0, _route.markedRender)(route));
  }
});

exports.mdlinks = mdlinks;