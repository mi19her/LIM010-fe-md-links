
import { markedRender } from './route.js';
import { linksCorect } from './links.js';

const mdlinks = (route, options) => new Promise((resolve) => {
  if (options.validate === true) {
    resolve(linksCorect(route));
  } else {
    resolve(markedRender(route));
  }
});

// mdlinks('D:/archivoMkdown/LIM010-fe-md-links/archivos', { validate: true }).then((val) => {
//   console.log(val);
// });

export {
  mdlinks,
};
