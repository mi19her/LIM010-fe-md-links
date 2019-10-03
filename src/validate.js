import fetch from 'node-fetch';
import { markedRender } from './route.js';

const linksCorect = (route) => {
  const typeHref = markedRender(route);
  const arrayPromises = typeHref.map((element) => new Promise((resolve) => {
    const data = { ...element };
    fetch(element.href).then((res) => {
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
};

export {
  linksCorect,
};

// linksCorect('D:/archivoMkdown/LIM010-fe-md-links/archivos').then(res => {
//   console.log(res);
// });
