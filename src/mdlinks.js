
import { markedRender } from './route.js';
import { linksCorect } from './links.js';

const mdlinks = (route, options) => new Promise((resolve) => {
  if (options.validate === true) {
    resolve(linksCorect(route));
  } else {
    resolve(markedRender(route));
  }
});

export {
  mdlinks,
};
