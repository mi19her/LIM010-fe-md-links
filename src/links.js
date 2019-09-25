import fetch from 'node-fetch';
import { markedRender } from './route.js';

const linksCorect = (route) => {
  const typeHref = markedRender(route);
  const arrayPromises = typeHref.map((element) => new Promise((resolve) => (fetch)(element.href)
    .then((validate) => {
      if (validate.status >= 200 && validate.status < 400) {
        element.status = validate.status;
        element.statusText = validate.statusText;
        resolve(element);
      } else {
        element.status = validate.status;
        element.statusText = 'Fail';
        resolve(element);
      }
    }).catch(() => {
      element.status = '';
      element.statusText = 'Este link no existe';
      resolve(element);
    })));
  return Promise.all(arrayPromises);
};

const stats = (arrayObject) => {
  const linksAll = arrayObject.map((element) => element.href);
  const total = linksAll.length;
  const linksAlone = [new Set(linksAll)].length;
  return `Total:${total} Unique:${linksAlone}`;
};

const output3 = [{
  href: 'https://nodejs.org/api/fs.html',
  ruta:
    'D:\\archivoMkdown\\LIM010-fe-md-links\\archivos\\archivo2\\mack.md',
  text: 'file system',
  status: 200,
  statusText: 'fail',
},
{
  href: 'https://nodejs.org/api/path.html',
  ruta:
    'D:\\archivoMkdown\\LIM010-fe-md-links\\archivos\\archivo2\\mack.md',
  text: 'path',
  status: 200,
  statusText: 'fail',
},
{
  href: 'https://nodejs.org/en/',
  ruta:
    'D:\\archivoMkdown\\LIM010-fe-md-links\\archivos\\mackdow.md',
  text: 'Node.js',
  status: 200,
  statusText: 'OK',
},
{
  href: 'https://nodejs.org/docs/latest-v0.10.x/api/modules.html',
  ruta:
    'D:\\archivoMkdown\\LIM010-fe-md-links\\archivos\\mackdow.md',
  text: 'módulos (CommonJS)',
  status: 200,
  statusText: 'OK',
},
{
  href: 'https://daringfireball.net/projects/markdown/syntax',
  ruta:
    'D:\\archivoMkdown\\LIM010-fe-md-links\\archivos\\mackdow2.md',
  text: 'markdown',
  status: 200,
  statusText: 'OK',
},
{
  href: 'https://docs.npmjs.com/misc/scripts',
  ruta:
    'D:\\archivoMkdown\\LIM010-fe-md-links\\archivos\\mackdow2.md',
  text: 'npm-scripts',
  status: 200,
  statusText: 'OK',
},
{
  href: 'https://semver.org/',
  ruta:
    'D:\\archivoMkdown\\LIM010-fe-md-links\\archivos\\mackdow2.md',
  text: 'semver',
  status: 200,
  statusText: 'OK',
}];

const statsValidate = (arrayObject) => {
  const linksAll = arrayObject.map((element) => element.href);
  const total = linksAll.length;
  const broken = arrayObject.filter((element) => element.statusText === 'fail');
  const linksAlone = [new Set(linksAll)].length;
  return `Total:${total} Unique:${linksAlone} Broken:${broken.length}`;
};

// console.log(statsValidate(output3));


export {
  linksCorect,
  stats,
  statsValidate,
};
