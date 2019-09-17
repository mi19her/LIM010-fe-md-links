const pathRoute = require('path');
const fs = require('fs');
// const readdir = promisify(fs.readdir);
// const stat = promisify(fs.stat);

export const typePath = (stringRoute) => {
  if (pathRoute.isAbsolute(stringRoute) === false) {
    return pathRoute.resolve(stringRoute);
  }
  return stringRoute;
};

export const verificRoute = (route) =>{
   if (fs.statSync(route).isFile()){
    return true;
   }
   return false;
}

export const verificFileDir = (route) =>{
   let results = [];
   if(verificRoute(typePath(route)) === true){
     if(pathRoute.extname(typePath(route)) === '.md'){
      results.push(typePath(route));
     }
       return results;
   } else {
    const list = fs.readdirSync(typePath(route)); 
    list.forEach((dir) => {
      const dir1 = pathRoute.join(typePath(route),dir);
      results = results.concat(verificFileDir(dir1));
    });
    return results;
   }
}
console.log(verificFileDir('D:/archivoMkdown/LIM010-fe-md-links/archivos'));