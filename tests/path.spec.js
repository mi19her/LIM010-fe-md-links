import {
  typePath, verificRoute, verificFileDir, markedRender,
} from '../src/route.js';
import { linksCorect, stats, statsValidate } from '../src/links.js';
import { mdlinks } from '../src/mdlinks.js';
import { fsMdlinks } from '../src/funtionCli.js';

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

const output4 = `D:\\archivoMkdown\\LIM010-fe-md-links\\archivos\\archivo2\\mack.md https://nodejs.org/api/fs.html file system
D:\\archivoMkdown\\LIM010-fe-md-links\\archivos\\archivo2\\mack.md https://nodejs.org/api/path.html path
D:\\archivoMkdown\\LIM010-fe-md-links\\archivos\\mackdow.md https://nodejs.org/en/ Node.js
D:\\archivoMkdown\\LIM010-fe-md-links\\archivos\\mackdow.md https://nodejs.org/docs/latest-v0.10.x/api/modules.html módulos (CommonJS)
D:\\archivoMkdown\\LIM010-fe-md-links\\archivos\\mackdow2.md https://daringfireball.net/projects/markdown/syntax markdown
D:\\archivoMkdown\\LIM010-fe-md-links\\archivos\\mackdow2.md https://docs.npmjs.com/misc/scripts npm-scripts
D:\\archivoMkdown\\LIM010-fe-md-links\\archivos\\mackdow2.md https://semver.org/ semver\n`;

const output5 = `D:\\archivoMkdown\\LIM010-fe-md-links\\archivos\\archivo2\\mack.md https://nodejs.org/api/fs.html file system 200 OK
D:\\archivoMkdown\\LIM010-fe-md-links\\archivos\\archivo2\\mack.md https://nodejs.org/api/path.html path 200 OK
D:\\archivoMkdown\\LIM010-fe-md-links\\archivos\\mackdow.md https://nodejs.org/en/ Node.js 200 OK
D:\\archivoMkdown\\LIM010-fe-md-links\\archivos\\mackdow.md https://nodejs.org/docs/latest-v0.10.x/api/modules.html módulos (CommonJS) 200 OK
D:\\archivoMkdown\\LIM010-fe-md-links\\archivos\\mackdow2.md https://daringfireball.net/projects/markdown/syntax markdown 200 OK
D:\\archivoMkdown\\LIM010-fe-md-links\\archivos\\mackdow2.md https://docs.npmjs.com/misc/scripts npm-scripts 200 OK
D:\\archivoMkdown\\LIM010-fe-md-links\\archivos\\mackdow2.md https://semver.org/ semver 200 OK\n`;

const outputCatch = [{
  href: 'https://daringfireball.net/projects/markdown/syntax',
  ruta: 'D:/girly-master/prueba/falla.md',
  text: 'links1',
  status: 200,
  statusText: 'OK',
},
{
  href: 'https://www.facebook.com',
  ruta: 'D:/girly-master/prueba/falla.md',
  text: 'milca',
  status: 200,
  statusText: 'OK',
},
{
  href: 'https://www.deadlinkchecker.com/login',
  ruta: 'D:/girly-master/prueba/falla.md',
  text: 'semver',
  status: 404,
  statusText: 'Fail',
}];

const noExiste = [{
  href: 'https://www.milca.com',
  ruta: 'D:/girly-master/prueba/noExiste.md',
  text: 'milca',
  status: 'este link no existe',
  statusText: 'Fail',
}];

describe('typePath', () => {
  it('Deberia leer una ruta absoluta ', () => {
    expect(typePath('D:/archivoMkdown/LIM010-fe-md-links/src')).toBe('D:/archivoMkdown/LIM010-fe-md-links/src');
  });
  it('Deberia leer una ruta relativa', () => {
    expect(typePath('../LIM010-fe-md-links/src')).toBe('D:\\archivoMkdown\\LIM010-fe-md-links\\src');
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
  it('deberia validar los links que fallan', (done) => linksCorect('D:/girly-master/prueba/falla.md')
    .then((res) => {
      expect(res).toEqual(outputCatch);
      done();
    }));
  it('deberia validar los links que no existen', (done) => linksCorect('D:/girly-master/prueba/noExiste.md')
    .then((res) => {
      expect(res).toEqual(noExiste);
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

describe('fsMdlinks', () => {
  it('deberia mostrar un string', (done) => fsMdlinks(undefined, undefined)
    .then((res) => {
      expect(res).toEqual('ingrese una ruta <path-to-file>');
      done();
    }));
  it('deberia imprimir un string de ruta, link y nombre', (done) => fsMdlinks('D:/archivoMkdown/LIM010-fe-md-links/archivos', { validate: undefined, stats: undefined })
    .then((res) => {
      expect(res).toEqual(output4);
      done();
    }));
  it('deberia mostrar el total de links, unique y broken ', (done) => fsMdlinks('D:/archivoMkdown/LIM010-fe-md-links/archivos', { validate: '--validate', stats: '--stats' })
    .then((res) => {
      expect(res).toEqual('Total:7 Unique:1 Broken:0');
      done();
    }));
  it('deberia mostrar el total de links', (done) => fsMdlinks('D:/archivoMkdown/LIM010-fe-md-links/archivos', { validate: '--validate', stats: undefined })
    .then((res) => {
      expect(res).toEqual(output5);
      done();
    }));
  it('deberia mostrar el total y unique', (done) => fsMdlinks('D:/archivoMkdown/LIM010-fe-md-links/archivos', { validate: '--stats', stats: undefined })
    .then((res) => {
      expect(res).toEqual('Total:7 Unique:1');
      done();
    }));
});
