"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linksCorect = void 0;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _route = require("./route.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const linksCorect = route => {
  const typeHref = (0, _route.markedRender)(route);
  const arrayPromises = typeHref.map(element => new Promise(resolve => {
    const data = { ...element
    };
    (0, _nodeFetch.default)(element.href).then(res => {
      if (res.status >= 200 && res.status < 400) {
        data.status = res.status;
        data.statusText = res.statusText;
        resolve(data);
      } else {
        data.status = res.status;
        data.statusText = 'Fail';
        resolve(data);
      }
    }).catch(() => {
      data.status = '';
      data.statusText = 'Este link no existe';
      resolve(data);
    });
  }));
  return Promise.all(arrayPromises);
}; // linksCorect('D:/archivoMkdown/LIM010-fe-md-links/archivos').then(res => {
//   console.log(res);
// });


exports.linksCorect = linksCorect;