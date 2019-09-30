import fetch from 'node-fetch';
import { markedRender } from './route.js';

const linksCorect = (route) => {
  const typeHref = markedRender(route);
  const arrayPromises = typeHref.map((element) => new Promise((resolve) => (fetch)(element.href)
    .then((validate) => {
      const newObjet = { ...element };
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
      const newObjet = { ...element };
      newObjet.status = 'este link no existe';
      newObjet.statusText = 'Fail';
      resolve(newObjet);
    })));
  return Promise.all(arrayPromises);
};

// linksCorect('D:/girly-master/prueba/noExiste.md').then((res) => console.log(res));


const stats = (arrayObject) => {
  const linksAll = arrayObject.map((element) => element.href);
  const total = linksAll.length;
  const linksAlone = [new Set(linksAll)].length;
  return `Total:${total} Unique:${linksAlone}`;
};

const statsValidate = (arrayObject) => {
  const linksAll = arrayObject.map((element) => element.href);
  const total = linksAll.length;
  const broken = arrayObject.filter((element) => element.statusText === 'fail');
  const linksAlone = [new Set(linksAll)].length;
  return `Total:${total} Unique:${linksAlone} Broken:${broken.length}`;
};

export {
  linksCorect,
  stats,
  statsValidate,
};
