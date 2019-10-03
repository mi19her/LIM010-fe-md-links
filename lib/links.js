"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statsValidate = exports.stats = exports.linksCorect = void 0;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _route = require("./route.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const linksCorect = route => {
  const typeHref = (0, _route.markedRender)(route);
  const arrayPromises = typeHref.map(element => new Promise(resolve => (0, _nodeFetch.default)(element.href).then(validate => {
    const newObjet = { ...element
    };

    if (validate.status >= 200 && validate.status < 400) {
      newObjet.status = validate.status;
      newObjet.statusText = validate.statusText;
      resolve(newObjet);
    } else {
      newObjet.status = validate.status;
      newObjet.statusText = 'Fail';
      resolve(newObjet);
    }
  }).catch(() => {
    const newObjet = { ...element
    };
    newObjet.status = 'este link no existe';
    newObjet.statusText = 'Fail';
    resolve(newObjet);
  })));
  return Promise.all(arrayPromises);
}; // linksCorect('D:/girly-master/prueba/noExiste.md').then((res) => console.log(res));


exports.linksCorect = linksCorect;

const stats = arrayObject => {
  const linksAll = arrayObject.map(element => element.href);
  const total = linksAll.length;
  const linksAlone = [new Set(linksAll)].length;
  return `Total:${total} Unique:${linksAlone}`;
};

exports.stats = stats;

const statsValidate = arrayObject => {
  const linksAll = arrayObject.map(element => element.href);
  const total = linksAll.length;
  const broken = arrayObject.filter(element => element.statusText === 'fail');
  const linksAlone = [new Set(linksAll)].length;
  return `Total:${total} Unique:${linksAlone} Broken:${broken.length}`;
};

exports.statsValidate = statsValidate;