import {
  typePath, verificRoute, verificFileDir, markedRender,
} from '../src/route.js';
import { linksCorect, stats, statsValidate } from '../src/links.js';
import { mdlinks } from '../src/mdlinks.js';

const output = ['D:\\archivoMkdown\\LIM010-fe-md-links\\archivos\\archivo2\\mack.md',
  'D:\\archivoMkdown\\LIM010-fe-md-links\\archivos\\mackdow.md',
  'D:\\archivoMkdown\\LIM010-fe-md-links\\archivos\\mackdow2.md'];
const output2 = [{
  href: 'https://nodejs.org/api/fs.html',
  ruta: 'D:\\archivoMkdown\\LIM010-fe-md-links\\archivos\\archivo2\\mack.md',
  text: 'file system',
},
{
  href: 'https://nodejs.org/api/path.html',
  ruta: 'D:\\archivoMkdown\\LIM010-fe-md-links\\archivos\\archivo2\\mack.md',
  text: 'path',
},
{
  href: 'https://nodejs.org/en/',
  ruta: 'D:\\archivoMkdown\\LIM010-fe-md-links\\archivos\\mackdow.md',
  text: 'Node.js',
},
{
  href: 'https://nodejs.org/docs/latest-v0.10.x/api/modules.html',
  ruta: 'D:\\archivoMkdown\\LIM010-fe-md-links\\archivos\\mackdow.md',
  text: 'módulos (CommonJS)',
},
{
  href: 'https://daringfireball.net/projects/markdown/syntax',
  ruta: 'D:\\archivoMkdown\\LIM010-fe-md-links\\archivos\\mackdow2.md',
  text: 'markdown',
},
{
  href: 'https://docs.npmjs.com/misc/scripts',
  ruta: 'D:\\archivoMkdown\\LIM010-fe-md-links\\archivos\\mackdow2.md',
  text: 'npm-scripts',
},
{
  href: 'https://semver.org/',
  ruta: 'D:\\archivoMkdown\\LIM010-fe-md-links\\archivos\\mackdow2.md',
  text: 'semver',
}];
const output3 = [{
  href: 'https://nodejs.org/api/fs.html',
  ruta:
    'D:\\archivoMkdown\\LIM010-fe-md-links\\archivos\\archivo2\\mack.md',
  text: 'file system',
  status: 200,
  statusText: 'OK',
},
{
  href: 'https://nodejs.org/api/path.html',
  ruta:
    'D:\\archivoMkdown\\LIM010-fe-md-links\\archivos\\archivo2\\mack.md',
  text: 'path',
  status: 200,
  statusText: 'OK',
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


describe('typePath', () => {
  it('Deberia leer una ruta absoluta', () => {
    expect(typePath('D:/archivoMkdown/LIM010-fe-md-links/src')).toBe('D:/archivoMkdown/LIM010-fe-md-links/src');
  });
});
describe('verificRoute', () => {
  it('deberia leer el archivo dentro de la ruta', () => {
    expect(verificRoute('D:/archivoMkdown/LIM010-fe-md-links/src')).toBe(false);
  });
});

describe('verificFileDir', () => {
  it('deberia mostrar los archivos que estan dentro del directorio', () => {
    expect(verificFileDir('D:/archivoMkdown/LIM010-fe-md-links/archivos')).toStrictEqual(output);
  });
});

describe('markedRender', () => {
  it('deberia mostrar los links que estan dentro del archivo', () => {
    expect(markedRender('D:/archivoMkdown/LIM010-fe-md-links/archivos')).toEqual(output2);
  });
});

describe('linksCorect', () => {
  it('deberia validar los links que existen', (done) => linksCorect('D:/archivoMkdown/LIM010-fe-md-links/archivos')
    .then((res) => {
      expect(res).toEqual(output3);
      done();
    }));
});

describe('stats', () => {
  it('deberia mostrar los links validados y los que no', () => {
    expect(stats(output3)).toBe('Total:7 Unique:1');
  });
});

describe('statsValidate', () => {
  it('deberia mostrar los links validados y los que no', () => {
    expect(statsValidate(output3)).toBe('Total:7 Unique:1 Broken:0');
  });
});

describe('mdlinks', () => {
  it('deberia validar los links que existen', (done) => mdlinks('D:/archivoMkdown/LIM010-fe-md-links/archivos', { validate: true })
    .then((res) => {
      expect(res).toEqual(output3);
      done();
    }));
});