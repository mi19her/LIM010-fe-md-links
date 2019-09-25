import { markedRender } from '../src/route.js'

const linksCorect = (route) => {
  const typeHref = markedRender(route)
  const arrayPromises = typeHref.map(element => new Promise(resolve => {
    return (fetch)(element.href).then(res => {
      if (res.status >= 200 && res.status < 400) {
        element.status = res.status;
        element.statusText = res.statusText;
        resolve(element);
      } else {
        element.status = res.status;
        element.statusText = 'Fail';
        resolve(element);
      }
    }).catch(() => {
      element.status = '';
      element.statusText = 'Este link no existe';
      resolve(element);
    });
  }));
  return Promise.all(arrayPromises);
};

linksCorect('D:/archivoMkdown/LIM010-fe-md-links/archivos').then(res => {
  console.log(res);
}); 
