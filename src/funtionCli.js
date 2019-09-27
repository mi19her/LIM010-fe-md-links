
import { mdlinks } from './mdlinks';
import { stats, statsValidate } from './links.js';

const fsMdlinks = (path, options) => {
  let resultado = '';
  if (path === undefined) {
    resultado = new Promise((resolve) => resolve('ingrese una ruta <path-to-file>'));
  } else if (options.validate === undefined) {
    resultado = mdlinks(path, { validate: false })
      .then((res) =>{
        let stringElem = '';
        res.forEach((elem) => {
          stringElem += `${elem.ruta} ${elem.href} ${elem.text}\n`;
        });
        return stringElem;
      });
  } else if (options.validate === '--validate' && options.stats === '--stats') {
    resultado = mdlinks(path, { validate: true }).then((res) => statsValidate(res));
  } else if (options.validate === '--validate') {
    resultado = mdlinks(path, { validate: true })
      .then((res) => {
        let stringElem = '';
        res.forEach((elem) => {
          stringElem += `${elem.ruta} ${elem.href} ${elem.text} ${elem.status} ${elem.statusText}\n`;
        });
        return stringElem;
      });
  } else if (options.validate === '--stats') {
    resultado = mdlinks(path, { validate: true }).then((res) => stats(res));
  }
  return resultado;
};

export {
  fsMdlinks,
};
