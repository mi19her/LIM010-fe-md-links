"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.markedRender = exports.verificFileDir = exports.verificRoute = exports.typePath = void 0;

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _marked = _interopRequireDefault(require("marked"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const typePath = stringRoute => {
  if (_path.default.isAbsolute(stringRoute) === false) {
    return _path.default.resolve(stringRoute);
  }

  return stringRoute;
};

exports.typePath = typePath;

const verificRoute = route => {
  if (_fs.default.statSync(route).isFile()) {
    return true;
  }

  return false;
};

exports.verificRoute = verificRoute;

const verificFileDir = route => {
  let results = [];

  if (verificRoute(typePath(route)) === true) {
    if (_path.default.extname(typePath(route)) === '.md') {
      results.push(typePath(route));
    }

    return results;
  }

  const list = _fs.default.readdirSync(typePath(route));

  list.forEach(dir => {
    const dir1 = _path.default.join(typePath(route), dir);

    results = results.concat(verificFileDir(dir1));
  });
  return results;
};

exports.verificFileDir = verificFileDir;

const markedRender = route => {
  const arrayArch = [];
  const render = new _marked.default.Renderer();
  const arrayAllFiles = verificFileDir(route);
  arrayAllFiles.forEach(element => {
    const arrch = _fs.default.readFileSync(element).toString();

    render.link = (href, ruta, text) => {
      arrayArch.push({
        href,
        ruta: element,
        text
      });
    };

    (0, _marked.default)(arrch, {
      renderer: render
    });
  });
  return arrayArch;
};

exports.markedRender = markedRender;