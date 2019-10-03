import path from 'path';
import fs from 'fs';
import marked from 'marked';

const typePath = (stringRoute) => {
  if (path.isAbsolute(stringRoute) === false) {
    return path.resolve(stringRoute);
  }
  return stringRoute;
};
const verificRoute = (route) => {
  if (fs.statSync(route).isFile()) {
    return true;
  }
  return false;
};
const verificFileDir = (route) => {
  let results = [];
  if (verificRoute(typePath(route)) === true) {
    if (path.extname(typePath(route)) === '.md') {
      results.push(typePath(route));
    }
    return results;
  }
  const list = fs.readdirSync(typePath(route));
  list.forEach((dir) => {
    const dir1 = path.join(typePath(route), dir);
    results = results.concat(verificFileDir(dir1));
  });
  return results;
};

const markedRender = (route) => {
  const arrayArch = [];
  const render = new marked.Renderer();
  const arrayAllFiles = verificFileDir(route);
  arrayAllFiles.forEach((element) => {
    const arrch = fs.readFileSync(element).toString();
    render.link = (href, ruta, text) => {
      arrayArch.push({
        href,
        ruta: element,
        text,
      });
    };
    marked(arrch, { renderer: render });
  });
  return arrayArch;
};

export {
  typePath,
  verificRoute,
  verificFileDir,
  markedRender,
};
